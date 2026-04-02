import { ObjectMeta } from "./ObjectMeta.js";

export function table(name: string): ObjectMeta {
  return { table: { name } };
}
