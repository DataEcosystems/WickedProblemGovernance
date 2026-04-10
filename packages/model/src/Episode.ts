import { z } from "zod";
import { Iri } from "./Iri.js";
import { JsonLdBase } from "./JsonLdBase.js";
import { Project } from "./Project.js";
import { range } from "./range.js";
import { Timestamp } from "./Timestamp.js";

export const Episode = JsonLdBase.extend({
  "@type": z.literal("Episode"),
  couplingProxy: z.number(),
  domainHeterogeneity: z.number(),
  layerHeterogeneity: z.number(),
  normalizedBurden: z.number().optional(),
  partnerCount: z.number().int(),
  project: Iri.meta(range(Project)),
  stall: z.boolean(),
  t0: Timestamp,
  t1: Timestamp.optional(),
  t2: Timestamp.optional(),
  tau1: z.number().optional(),
  tau2: z.number().optional(),
}).readonly();

export type Episode = z.infer<typeof Episode>;
