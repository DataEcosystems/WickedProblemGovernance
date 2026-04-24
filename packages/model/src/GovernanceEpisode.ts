import { z } from "zod";
import { Description } from "./Description.js";
import { GovernanceEpisodeType } from "./GovernanceEpisodeType.js";
import { Iri } from "./Iri.js";
import { JsonLdBase } from "./JsonLdBase.js";
import { Name } from "./Name.js";
import { ObjectMeta } from "./ObjectMeta.js";
import { Project } from "./Project.js";
import { PropertyMeta } from "./PropertyMeta.js";
import { Timestamp } from "./Timestamp.js";

export const GovernanceEpisode = JsonLdBase.extend({
  "@type": z.literal("GovernanceEpisode"),
  couplingProxy: z.number().meta(
    new PropertyMeta({
      description:
        "Composite measure of scale and structural heterogeneity of governance coordination demands.",
      title: "Coupling Proxy",
    }),
  ),
  description: Description.optional(),
  domainHeterogeneity: z.number().meta(
    new PropertyMeta({
      description:
        "Simpson-style diversity index measuring how evenly partners are distributed across domains.",
      title: "Domain Heterogeneity",
    }),
  ),
  governanceEpisodeType: Iri.meta(
    new PropertyMeta({
      description: "The type of governance authorization attempt.",
      range: GovernanceEpisodeType,
      title: "Governance Episode Type",
    }),
  ),
  layerHeterogeneity: z.number().meta(
    new PropertyMeta({
      description:
        "Simpson-style diversity index measuring how evenly partners are distributed across institutional layers.",
      title: "Layer Heterogeneity",
    }),
  ),
  name: Name.optional(),
  normalizedBurden: z
    .number()
    .optional()
    .meta(
      new PropertyMeta({
        description: "Time to delivered value per unit of coupling load.",
        title: "Normalized Burden",
      }),
    ),
  partnerCount: z
    .number()
    .int()
    .meta(
      new PropertyMeta({
        description:
          "Number of governance-relevant institutional actors in this episode.",
        title: "Partner Count",
      }),
    ),
  project: Iri.meta(
    new PropertyMeta({
      description: "The project this episode belongs to.",
      range: Project,
      title: "Project",
    }),
  ),
  stall: z.boolean().meta(
    new PropertyMeta({
      description:
        "Whether the episode shows sustained governance engagement but no qualifying durable authorization.",
      title: "Stall",
    }),
  ),
  t0: Timestamp.optional().meta(
    new PropertyMeta({
      description:
        "Timestamp of earliest event indicating entry into an approval workflow.",
      title: "Episode Start",
    }),
  ),
  t1: Timestamp.optional().meta(
    new PropertyMeta({
      description:
        "Timestamp of earliest qualifying authorization event for core scope.",
      title: "First Durable Authorization",
    }),
  ),
  t2: Timestamp.optional().meta(
    new PropertyMeta({
      description:
        "Timestamp of earliest analytic output answering a stakeholder question.",
      title: "First Delivered Value",
    }),
  ),
  tau1: z
    .number()
    .optional()
    .meta(
      new PropertyMeta({
        description:
          "Calendar days from episode initiation to first durable authorization.",
        title: "Authorization Latency",
      }),
    ),
  tau2: z
    .number()
    .optional()
    .meta(
      new PropertyMeta({
        description:
          "Calendar days from episode initiation to first delivered analytic output.",
        title: "Time to Delivered Value",
      }),
    ),
})
  .readonly()
  .meta(
    new ObjectMeta({
      description:
        "A bounded governance authorization attempt aggregating a sequence of events.",
      id: "GovernanceEpisode",
      title: "Governance Episode",
    }),
  );

export type GovernanceEpisode = z.infer<typeof GovernanceEpisode>;
