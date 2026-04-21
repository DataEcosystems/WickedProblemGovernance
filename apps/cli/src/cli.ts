#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { command, option, positional, run, subcommands } from "cmd-ts";
import { ExistingPath } from "cmd-ts/dist/cjs/batteries/fs.js";
import { generateCodebookMarkdown } from "./generateCodebookMarkdown.js";
// import { pino } from "pino";
import { generateJsonSchema } from "./generateJsonSchema.js";
import { generateJsonSchemas } from "./generateJsonSchemas.js";
import {
  IjpdsDataset,
  transformIjpdsDataset,
} from "./transformIjpdsDataset.js";

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

run(
  subcommands({
    cmds: {
      generate: subcommands({
        cmds: {
          "codebook-markdown": command({
            args: {},
            description: "generate codebook Markdown",
            handler: () => {
              process.stdout.write(generateCodebookMarkdown());
            },
            name: "codebook-markdown",
          }),
          "json-schema": command({
            args: {},
            description: "generate a single JSON schemas",
            handler: () => {
              process.stdout.write(
                JSON.stringify(generateJsonSchema(), null, 2),
              );
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
            description: "generate JSON schemas to an output directory",
            handler: async ({ outputDirectoryPath }) => {
              await fs.mkdir(outputDirectoryPath, { recursive: true });
              for (const [name, jsonSchema] of generateJsonSchemas()) {
                await fs.writeFile(
                  path.resolve(outputDirectoryPath, `${name}.schema.json`),
                  JSON.stringify(jsonSchema, null, 2),
                );
              }
            },
            name: "json-schema",
          }),
        },
        name: "generate",
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
    description: "shaclmate command line interface",
    name: "shaclmate",
  }),
  process.argv.slice(2),
);
