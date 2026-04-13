import { schemas } from "@wpg/model";
import { z } from "zod";

export function generateJsonSchema() {
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

  return z.toJSONSchema(Root, {
    metadata: registry,
    reused: "ref",
  });
}
