import { schemas } from "@wpg/model";
import { z } from "zod";

// const SCHEMA_FILE = "./myschema.schema.json";

// function rewriteJsonSchemaRefs(obj: any): any {
//   if (obj === null || typeof obj !== "object") {
//     return obj;
//   }
//   if (Array.isArray(obj)) {
//     return obj.map(rewriteJsonSchemaRefs);
//   }

//   const result: any = {};
//   for (const [key, value] of Object.entries(obj)) {
//     if (key === "$ref" && typeof value === "string" && value.startsWith("#/")) {
//       // "#/$defs/__schema0" → "./myschema.schema.json#/definitions/ItemLink"
//       result[key] = `${SCHEMA_FILE}${value}`;
//     } else {
//       result[key] = rewriteJsonSchemaRefs(value);
//     }
//   }
//   return result;
// }

export function* generateJsonSchemas() {
  const registry = z.registry<{ id: string }>();
  for (const [name, schema] of Object.entries(schemas)) {
    registry.add(schema, { id: name });
  }

  for (const [name, schema] of Object.entries(schemas)) {
    const jsonSchema = z.toJSONSchema(schema, {
      override: (ctx) => {
        // If this sub-schema has an id and isn't the root, replace with a $ref
        const meta = registry.get(ctx.zodSchema);
        if (meta?.id && meta.id !== name) {
          // Wipe the generated schema and replace with a $ref
          for (const key of Object.keys(ctx.jsonSchema)) {
            delete ctx.jsonSchema[key];
          }
          ctx.jsonSchema["$ref"] = `./${meta.id}.schema.json`;
        }
      },
      target: "draft-7",
    });

    if (jsonSchema.id) {
      jsonSchema["$id"] = jsonSchema.id;
      delete jsonSchema.id;
    }

    yield [name, jsonSchema];
  }
}
