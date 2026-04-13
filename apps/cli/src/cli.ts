#!/usr/bin/env node

import { command, run, subcommands } from "cmd-ts";
// import { pino } from "pino";
import { generateJsonSchema } from "./generateJsonSchema.js";

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
            name: "json-schema",
            description: "generate JSON schema",
            args: {},
            handler: async () => {
              console.log(JSON.stringify(generateJsonSchema(), null, 2));
            },
          }),
        },
        name: "generate",
      }),
    },
    description: "shaclmate command line interface",
    name: "shaclmate",
  }),
  process.argv.slice(2),
);
