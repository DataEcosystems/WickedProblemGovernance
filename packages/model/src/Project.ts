import { z } from "zod";
import { Architecture } from "./Architecture.js";
import { Episode } from "./Episode.js";
import { Iri } from "./Iri.js";
import { JsonLdBase } from "./JsonLdBase.js";
import { range } from "./range.js";
import { Timestamp } from "./Timestamp.js";

export const Project = JsonLdBase.extend({
  "@type": z.literal("Project"),
  architecture: Iri.meta(range(Architecture)),
  deliveryCouplingProxy: z.number().nullable(),
  deliveryEpisode: Iri.nullable().meta(range(Episode)),
  episodeCount: z.number().int(),
  episodes: z.array(Iri).readonly().meta(range(Episode)),
  normalizedBurden: z.number().nullable(),
  partnerCount: z.number().int(),
  stallFraction: z.number(),
  stewardPresence: z.boolean(),
  t0: Timestamp,
  tau2: z.number().nullable(),
}).readonly();
