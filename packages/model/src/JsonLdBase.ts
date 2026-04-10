import { z } from "zod";
import { Iri } from "./Iri.js";

export const JsonLdBase = z.object({
  "@id": Iri,
});

export type JsonLdBase = z.infer<typeof JsonLdBase>;
