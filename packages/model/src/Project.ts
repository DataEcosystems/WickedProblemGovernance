import { z } from "zod";
import { Architecture } from "./Architecture.js";
import { Ecosystem } from "./Ecosystem.js";
import { Iri } from "./Iri.js";
import { JsonLdBase } from "./JsonLdBase.js";
import { range } from "./range.js";
import { Timestamp } from "./Timestamp.js";

export const Project = JsonLdBase.extend({
  "@type": z.literal("Project"),
  architecture: Iri.meta(range(Architecture)),
  deliveryCouplingProxy: z.number().optional(),
  deliveryEpisode: Iri.optional().meta(range("Episode")),
  ecosystem: Iri.meta(range(Ecosystem)),
  episodeCount: z.number().int(),
  normalizedBurden: z.number().optional(),
  partnerCount: z.number().int(),
  stallFraction: z.number().optional(),
  stewardPresence: z.boolean(),
  t0: Timestamp,
  tau2: z.number().optional(),
}).readonly();

export type Project = z.infer<typeof Project>;
