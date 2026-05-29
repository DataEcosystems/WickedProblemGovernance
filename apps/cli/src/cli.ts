#!/usr/bin/env node

import { createReadStream } from "node:fs";
import fs from "node:fs/promises";
import { createInterface } from "node:readline";
import ExcelJS from "@protobi/exceljs";
import { Resource } from "@wpg/model";
import { command, option, positional, run, subcommands } from "cmd-ts";
import { diff } from "./commands/diff.js";
import { fromExcel } from "./commands/fromExcel.js";
import { fromIjpdsDataset, IjpdsDataset } from "./commands/fromIjpdsDataset.js";
// import { pino } from "pino";
import { modelMarkdown } from "./commands/modelMarkdown.js";
import { toExcel } from "./commands/toExcel.js";
import { toRdf } from "./commands/toRdf.js";

// const _logger = pino(
//   {
//     transport: {
//       target: "pino-pretty",
//       options: {
//         colorize: true,
//       },
//     },
//   },
//   (pino as any).destination(2),
// );

async function readExcelWorkbook(input: string): Promise<ExcelJS.Workbook> {
  const workbook = new ExcelJS.Workbook();

  if (input.startsWith("https://docs.google.com/spreadsheets/")) {
    const match = input.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (match == null) {
      throw new Error(`Could not extract spreadsheet ID from URL: ${input}`);
    }
    const spreadsheetId = match[1];
    const exportUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/export?format=xlsx`;
    const response = await fetch(exportUrl);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch Google Sheet: ${response.status} ${response.statusText}`,
      );
    }
    const arrayBuffer = await response.arrayBuffer();
    await workbook.xlsx.load(new Uint8Array(arrayBuffer) as any);
  } else if (input.endsWith(".xlsx") || input.endsWith(".xls")) {
    await workbook.xlsx.readFile(input);
  } else {
    throw new Error(
      `Unrecognized input: ${input}. Expected a file path (.xlsx) or a Google Sheets URL.`,
    );
  }

  return workbook;
}

async function* parseModelJsonl(
  lines: AsyncIterable<string>,
): AsyncIterable<Resource> {
  for await (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.length > 0) {
      yield Resource.parse(JSON.parse(trimmed));
    }
  }
}

run(
  subcommands({
    cmds: {
      diff: command({
        name: "diff",
        args: {
          left: positional({ description: "path to left .jsonl file" }),
          right: positional({ description: "path to right .jsonl file" }),
        },
        async handler({ left, right }) {
          async function collectResources(
            jsonlFilePath: string,
          ): Promise<readonly Resource[]> {
            const stream =
              jsonlFilePath === "-"
                ? process.stdin
                : createReadStream(jsonlFilePath);
            const lines = createInterface({ input: stream });
            const resources: Resource[] = [];
            for await (const resource of parseModelJsonl(lines)) {
              resources.push(resource);
            }
            return resources;
          }

          const [leftResources, rightResources] = await Promise.all([
            collectResources(left),
            collectResources(right),
          ]);

          const result = diff(leftResources, rightResources);

          if (
            result.missing.length === 0 &&
            result.extra.length === 0 &&
            result.changed.length === 0
          ) {
            process.exit(0);
          }

          console.log(JSON.stringify(result, null, 2));
          process.exit(1);
        },
      }),
      from: subcommands({
        cmds: {
          "axis-demo-excel": command({
            args: {
              input: positional({
                description: "path to an .xlsx file or a Google Sheets URL",
              }),
            },
            handler: async ({ input }) => {
              for (const resource of fromExcel(
                await readExcelWorkbook(input),
              )) {
                process.stdout.write(JSON.stringify(resource));
                process.stdout.write("\n");
              }
            },
            name: "axis-demo-excel",
          }),
          excel: command({
            args: {
              input: positional({
                description: "path to an .xlsx file or a Google Sheets URL",
              }),
            },
            handler: async ({ input }) => {
              for (const resource of fromExcel(
                await readExcelWorkbook(input),
              )) {
                process.stdout.write(JSON.stringify(resource));
                process.stdout.write("\n");
              }
            },
            name: "excel",
          }),
          "ijpds-dataset": command({
            args: {},
            handler: async () => {
              for (const resource of fromIjpdsDataset(
                IjpdsDataset.parse(
                  JSON.parse(
                    (await fs.readFile("/dev/stdin", "utf-8")).toString(),
                  ),
                ),
              )) {
                process.stdout.write(JSON.stringify(resource));
                process.stdout.write("\n");
              }
            },
            name: "ijpds-dataset",
          }),
        },
        name: "from",
      }),
      model: subcommands({
        cmds: {
          markdown: command({
            args: {},
            description: "generate Markdown from the model",
            handler: () => {
              process.stdout.write(modelMarkdown());
            },
            name: "markdown",
          }),
        },
        name: "model",
      }),
      to: subcommands({
        cmds: {
          excel: command({
            args: {
              outputFilePath: option({
                long: "output-file-path",
                short: "o",
              }),
            },
            description:
              "read interchange JSON lines from stdin and write an Excel workbook to the given file path",
            handler: async ({ outputFilePath }) => {
              const workbook = await toExcel(
                parseModelJsonl(createInterface({ input: process.stdin })),
              );
              await workbook.xlsx.writeFile(outputFilePath);
            },
            name: "excel",
          }),
          rdf: command({
            args: {},
            description:
              "read interchange JSON lines from stdin and write an RDF N-Quads version to stdout",
            handler: async () => {
              for await (const nquad of toRdf(
                parseModelJsonl(createInterface({ input: process.stdin })),
              )) {
                process.stdout.write(nquad);
              }
            },
            name: "rdf",
          }),
        },
        name: "to",
      }),
    },
    description: "wpg command line interface",
    name: "wpg",
  }),
  process.argv.slice(2),
);
