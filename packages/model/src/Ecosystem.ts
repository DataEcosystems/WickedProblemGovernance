import { z } from "zod";
import { Iri } from "./Iri.js";
import { JsonLdBase } from "./JsonLdBase.js";
import { Project } from "./Project.js";
import { range } from "./range.js";

export const Ecosystem = JsonLdBase.extend({
  "@type": z.literal("Ecosystem"),
  meanNormalizedBurden: z.number().nullable(),
  meanTimeToValue: z.number().nullable(),
  name: z.string(),
  projects: z.array(Iri).readonly().meta(range(Project)),
  stdTimeToValue: z.number().nullable(),
}).readonly();

export type Ecosystem = z.infer<typeof Ecosystem>;
