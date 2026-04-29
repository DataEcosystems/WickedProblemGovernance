import { z } from "zod";
import { Iri } from "./Iri.js";

export const ResourceBase = z.object({
  "@id": Iri,
});

export type ResourceBase = z.infer<typeof ResourceBase>;
