import { z } from "zod";

export const Iri = z.string().meta({
  description:
    "An Internationalized Resource Identifier (IRI). May be a full IRI or a compact IRI (CURIE) resolved by the JSON-LD context.",
});

export type Iri = z.infer<typeof Iri>;
