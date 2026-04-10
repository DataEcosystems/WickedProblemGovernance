import { z } from "zod";
import { PropertyMeta } from "./PropertyMeta.js";

export function range(target: z.ZodType): PropertyMeta {
  return { range: target };
}
