#!/usr/bin/env node

import { schemas } from "@wpg/model";
import { command, run, subcommands } from "cmd-ts";
// import { pino } from "pino";
import { z } from "zod";

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
              const registry = z.registry<{ id: string }>();
              for (const [name, schema] of Object.entries(schemas)) {
                registry.add(schema, { id: name });
              }

              const Root = z.object(
                Object.fromEntries(
                  Object.entries(schemas).map(([name, schema]) => [
                    name,
                    schema.optional(),
                  ]),
                ),
              );

              const jsonSchema = z.toJSONSchema(Root, {
                metadata: registry,
                reused: "ref",
              });

              console.log(JSON.stringify(jsonSchema, null, 2));
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
