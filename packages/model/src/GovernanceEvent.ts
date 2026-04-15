import z from "zod";
import { GovernanceArtifact } from "./GovernanceArtifact.js";
import { GovernanceEpisode } from "./GovernanceEpisode.js";
import { GovernanceEventType } from "./GovernanceEventType.js";
import { Iri } from "./Iri.js";
import { JsonLdBase } from "./JsonLdBase.js";
import { Partner } from "./Partner.js";
import { range } from "./range.js";
import { Timestamp } from "./Timestamp.js";

export const GovernanceEvent = JsonLdBase.extend({
  "@type": z.literal("GovernanceEvent"),
  artifact: Iri.optional().meta({
    description: "The durable source document associated with this event.",
    ...range(GovernanceArtifact),
    title: "Artifact",
  }),
  episode: Iri.meta({
    description: "The governance episode this event belongs to.",
    ...range(GovernanceEpisode),
    title: "Episode",
  }),
  governanceEventType: Iri.meta({
    description: "The governance function this event performs.",
    ...range(GovernanceEventType),
    title: "Governance Event Type",
  }),
  partners: z
    .array(Iri)
    .readonly()
    .meta({
      description: "The institutional actors involved in this event.",
      ...range(Partner),
      title: "Partners",
    }),
  timestamp: Timestamp.optional().meta({
    description: "The date or datetime on which this event occurred.",
    title: "Timestamp",
  }),
})
  .readonly()
  .meta({
    description:
      "A timestamped occurrence in a governance process corresponding to a durable artifact.",
    id: "GovernanceEvent",
    title: "Governance Event",
  });

export type GovernanceEvent = z.infer<typeof GovernanceEvent>;
