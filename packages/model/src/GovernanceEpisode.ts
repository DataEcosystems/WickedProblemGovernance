import { z } from "zod";
import { GovernanceEpisodeType } from "./GovernanceEpisodeType.js";
import { Iri } from "./Iri.js";
import { JsonLdBase } from "./JsonLdBase.js";
import { Project } from "./Project.js";
import { range } from "./range.js";
import { Timestamp } from "./Timestamp.js";

export const GovernanceEpisode = JsonLdBase.extend({
  "@type": z.literal("GovernanceEpisode"),
  couplingProxy: z.number(),
  domainHeterogeneity: z.number(),
  governanceEpisodeType: Iri.meta(range(GovernanceEpisodeType)),
  layerHeterogeneity: z.number(),
  normalizedBurden: z.number().optional(),
  partnerCount: z.number().int(),
  project: Iri.meta(range(Project)),
  stall: z.boolean(),
  t0: Timestamp.optional(),
  t1: Timestamp.optional(),
  t2: Timestamp.optional(),
  tau1: z.number().optional(),
  tau2: z.number().optional(),
}).readonly();

export type GovernanceEpisode = z.infer<typeof GovernanceEpisode>;
