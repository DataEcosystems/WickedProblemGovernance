import { z } from "zod";
import { Description } from "./Description.js";
import { GovernanceArtifact } from "./GovernanceArtifact.js";
import { GovernanceEpisode } from "./GovernanceEpisode.js";
import { GovernanceEventType } from "./GovernanceEventType.js";
import { Iri } from "./Iri.js";
import { Name } from "./Name.js";
import { ObjectMeta } from "./ObjectMeta.js";
import { PropertyMeta } from "./PropertyMeta.js";
import { ResourceBase } from "./ResourceBase.js";
import { Timestamp } from "./Timestamp.js";

export const GovernanceEvent = ResourceBase.extend({
  "@type": z.literal("GovernanceEvent"),
  artifact: Iri.optional().meta(
    new PropertyMeta({
      description: "The durable source document associated with this event.",
      range: GovernanceArtifact,
      title: "Artifact",
    }),
  ),
  description: Description.optional(),
  episode: Iri.meta(
    new PropertyMeta({
      description: "The governance episode this event belongs to.",
      range: GovernanceEpisode,
      title: "Episode",
    }),
  ),
  governanceEventType: Iri.meta(
    new PropertyMeta({
      description: "The governance function this event performs.",
      range: GovernanceEventType,
      title: "Governance Event Type",
    }),
  ),
  name: Name.optional(),
  timestamp: Timestamp.optional().meta(
    new PropertyMeta({
      description: "The date or datetime on which this event occurred.",
      title: "Timestamp",
    }),
  ),
}).meta(
  new ObjectMeta({
    "@type": "GovernanceEvent",
    description:
      "A timestamped occurrence in a governance process corresponding to a durable artifact.",
    title: "Governance Event",
  }),
);

export type GovernanceEvent = z.infer<typeof GovernanceEvent>;
