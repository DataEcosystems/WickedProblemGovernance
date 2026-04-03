#!/usr/bin/env npm exec tsx --

import { schemas } from "@wpg/model";
import { z } from "zod";

const registry = z.registry<{ id: string }>();
for (const [name, schema] of Object.entries(schemas)) {
  registry.add(schema, { id: name });
}

const Root = z.object(
  Object.fromEntries(
    Object.entries(schemas).map(([name, schema]) => [name, schema.optional()]),
  ),
);

const jsonSchema = z.toJSONSchema(Root, {
  metadata: registry,
  reused: "ref",
});

console.log(JSON.stringify(jsonSchema, null, 2));
