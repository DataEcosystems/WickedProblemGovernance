#!/usr/bin/env node

import fs from "node:fs/promises";
import { command, positional, run, subcommands } from "cmd-ts";
import { ExistingPath } from "cmd-ts/dist/cjs/batteries/fs.js";
// import { pino } from "pino";
import { generateJsonSchema } from "./generateJsonSchema.js";
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
          "json-schema": command({
            args: {},
            description: "generate JSON schema",
            handler: () => {
              process.stdout.write(
                JSON.stringify(generateJsonSchema(), null, 2),
              );
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
