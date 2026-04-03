import z from "zod";
import { ObjectMeta } from "./ObjectMeta.js";
import { PropertyMeta } from "./PropertyMeta.js";

export function foreignKey<T extends z.ZodType<Record<string, unknown>>>(
  schema: T,
  column: keyof z.infer<T>,
): PropertyMeta {
  const meta = schema.meta() as ObjectMeta;
  const tableName = meta?.table?.name;
  if (!tableName) {
    throw new Error("Foreign key target schema must have a table name in meta");
  }
  return {
    foreignKey: { column: column as string, table: { name: tableName } },
  };
}
