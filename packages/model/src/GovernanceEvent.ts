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
  artifact: Iri.optional().meta(range(GovernanceArtifact)),
  episode: Iri.meta(range(GovernanceEpisode)),
  governanceEventType: Iri.meta(range(GovernanceEventType)),
  partners: z.array(Iri).readonly().meta(range(Partner)),
  timestamp: Timestamp,
})
  .readonly()
  .meta({
    id: "GovernanceEvent",
  });

export type GovernanceEvent = z.infer<typeof GovernanceEvent>;
