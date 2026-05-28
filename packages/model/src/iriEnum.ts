import { z } from "zod";
import { expandCurie } from "./expandCurie.js";

export function iriEnum<const T extends readonly [string, ...string[]]>(
  values: T,
) {
  return z
    .string()
    .transform((val, ctx) => {
      const expanded = expandCurie(val);
      if (expanded === null) {
        ctx.addIssue({
          code: "custom",
          message: `cannot expand "${val}": unknown prefix or malformed IRI`,
        });
        return z.NEVER;
      }
      return expanded;
    })
    .pipe(z.enum(values));
}
