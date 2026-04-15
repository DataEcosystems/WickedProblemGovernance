import { z } from "zod";
import { GovernanceEpisodeType } from "./GovernanceEpisodeType.js";
import { Iri } from "./Iri.js";
import { JsonLdBase } from "./JsonLdBase.js";
import { Project } from "./Project.js";
import { range } from "./range.js";
import { Timestamp } from "./Timestamp.js";

export const GovernanceEpisode = JsonLdBase.extend({
  "@type": z.literal("GovernanceEpisode"),
  couplingProxy: z.number().meta({
    description:
      "Composite measure of scale and structural heterogeneity of governance coordination demands.",
    title: "Coupling Proxy",
  }),
  domainHeterogeneity: z.number().meta({
    description:
      "Simpson-style diversity index measuring how evenly partners are distributed across domains.",
    title: "Domain Heterogeneity",
  }),
  governanceEpisodeType: Iri.meta({
    description: "The type of governance authorization attempt.",
    ...range(GovernanceEpisodeType),
    title: "Governance Episode Type",
  }),
  layerHeterogeneity: z.number().meta({
    description:
      "Simpson-style diversity index measuring how evenly partners are distributed across institutional layers.",
    title: "Layer Heterogeneity",
  }),
  normalizedBurden: z.number().optional().meta({
    description: "Time to delivered value per unit of coupling load.",
    title: "Normalized Burden",
  }),
  partnerCount: z.number().int().meta({
    description:
      "Number of governance-relevant institutional actors in this episode.",
    title: "Partner Count",
  }),
  project: Iri.meta({
    description: "The project this episode belongs to.",
    ...range(Project),
    title: "Project",
  }),
  stall: z.boolean().meta({
    description:
      "Whether the episode shows sustained governance engagement but no qualifying durable authorization.",
    title: "Stall",
  }),
  t0: Timestamp.optional().meta({
    description:
      "Timestamp of earliest event indicating entry into an approval workflow.",
    title: "Episode Start",
  }),
  t1: Timestamp.optional().meta({
    description:
      "Timestamp of earliest qualifying authorization event for core scope.",
    title: "First Durable Authorization",
  }),
  t2: Timestamp.optional().meta({
    description:
      "Timestamp of earliest analytic output answering a stakeholder question.",
    title: "First Delivered Value",
  }),
  tau1: z.number().optional().meta({
    description:
      "Calendar days from episode initiation to first durable authorization.",
    title: "Authorization Latency",
  }),
  tau2: z.number().optional().meta({
    description:
      "Calendar days from episode initiation to first delivered analytic output.",
    title: "Time to Delivered Value",
  }),
})
  .readonly()
  .meta({
    description:
      "A bounded governance authorization attempt aggregating a sequence of events.",
    id: "GovernanceEpisode",
    title: "Governance Episode",
  });

export type GovernanceEpisode = z.infer<typeof GovernanceEpisode>;
