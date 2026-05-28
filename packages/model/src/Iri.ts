import { z } from "zod";
import { expandCurie } from "./expandCurie.js";

export const Iri = z
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
  .meta({
    description:
      "An Internationalized Resource Identifier (IRI). May be a full IRI or a compact IRI (CURIE) resolved by the JSON-LD context.",
    title: "IRI",
  });

export type Iri = z.infer<typeof Iri>;
