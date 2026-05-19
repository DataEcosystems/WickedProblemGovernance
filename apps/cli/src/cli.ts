#!/usr/bin/env node

import fs from "node:fs/promises";
import { createInterface } from "node:readline";
import ExcelJS from "@protobi/exceljs";
import { Resource } from "@wpg/model";
import { command, option, positional, run, subcommands } from "cmd-ts";
import { loadExcel } from "./commands/loadExcel.js";
import { loadRdf } from "./commands/loadRdf.js";
// import { pino } from "pino";
import { modelMarkdown } from "./commands/modelMarkdown.js";
import { transformExcel } from "./commands/transformExcel.js";
import {
  IjpdsDataset,
  transformIjpdsDataset,
} from "./commands/transformIjpdsDataset.js";

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
      load: subcommands({
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
              const workbook = await loadExcel(
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
              for await (const nquad of loadRdf(
                parseModelJsonl(createInterface({ input: process.stdin })),
              )) {
                process.stdout.write(nquad);
              }
            },
            name: "rdf",
          }),
        },
        name: "load",
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
      transform: subcommands({
        cmds: {
          excel: command({
            args: {
              input: positional({
                description: "path to an .xlsx file or a Google Sheets URL",
              }),
            },
            handler: async ({ input }) => {
              for (const resource of transformExcel(
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
              for (const resource of transformIjpdsDataset(
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
        name: "transform",
      }),
    },
    description: "wpg command line interface",
    name: "wpg",
  }),
  process.argv.slice(2),
);
