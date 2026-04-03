import { ObjectMeta } from "./ObjectMeta.js";

export function table(
  name: string,
  options?: Omit<ObjectMeta, "table">,
): ObjectMeta {
  return { table: { name }, ...options };
}
