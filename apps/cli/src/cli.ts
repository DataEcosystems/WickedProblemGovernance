#!/usr/bin/env node

import fs from "node:fs/promises";
import { createInterface } from "node:readline";
import { Resource } from "@wpg/model";
import { command, positional, run, subcommands } from "cmd-ts";
import { ExistingPath } from "cmd-ts/dist/cjs/batteries/fs.js";
import { loadRdf } from "./commands/loadRdf.js";
// import { pino } from "pino";
import { modelMarkdown } from "./commands/modelMarkdown.js";
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
          "ijpds-dataset": command({
            args: {
              inputFilePath: positional({
                displayName: "inputFilePath",
                description: "path to IJPDS dataset .json file",
                type: ExistingPath,
              }),
            },
            handler: async ({ inputFilePath }) => {
              for (const model of transformIjpdsDataset(
                IjpdsDataset.parse(
                  JSON.parse((await fs.readFile(inputFilePath)).toString()),
                ),
              )) {
                process.stdout.write(JSON.stringify(model));
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
