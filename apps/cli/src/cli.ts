#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { createInterface } from "node:readline";
import { Resource } from "@wpg/model";
import { command, option, positional, run, subcommands } from "cmd-ts";
import { ExistingPath } from "cmd-ts/dist/cjs/batteries/fs.js";
import { loadRdf } from "./commands/loadRdf.js";
// import { pino } from "pino";
import { modelJsonSchema } from "./commands/modelJsonSchema.js";
import { modelJsonSchemas } from "./commands/modelJsonSchemas.js";
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
          "json-schema": command({
            args: {},
            description: "generate a single JSON schema from the model",
            handler: () => {
              process.stdout.write(JSON.stringify(modelJsonSchema(), null, 2));
            },
            name: "json-schema",
          }),
          "json-schemas": command({
            args: {
              outputDirectoryPath: option({
                long: "--output",
                short: "o",
              }),
            },
            description:
              "generate JSON schemas from the model to an output directory",
            handler: async ({ outputDirectoryPath }) => {
              await fs.mkdir(outputDirectoryPath, { recursive: true });
              for (const [name, jsonSchema] of modelJsonSchemas()) {
                await fs.writeFile(
                  path.resolve(outputDirectoryPath, `${name}.schema.json`),
                  JSON.stringify(jsonSchema, null, 2),
                );
              }
            },
            name: "json-schema",
          }),
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
