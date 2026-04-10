import { z } from "zod";
import { PropertyMeta } from "./PropertyMeta.js";

export function range(target: z.ZodType | string): PropertyMeta {
  return { range: target };
}
