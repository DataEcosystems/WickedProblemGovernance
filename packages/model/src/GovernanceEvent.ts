import z from "zod";
import { GovernanceArtifact } from "./GovernanceArtifact.js";
import { GovernanceEpisode } from "./GovernanceEpisode.js";
import { Iri } from "./Iri.js";
import { JsonLdBase } from "./JsonLdBase.js";
import { Partner } from "./Partner.js";
import { range } from "./range.js";
import { Timestamp } from "./Timestamp.js";

export const GovernanceEvent = JsonLdBase.extend({
  "@type": z.literal("GovernanceEvent"),
  artifact: Iri.meta(range(GovernanceArtifact)),
  episode: Iri.meta(range(GovernanceEpisode)),
  governanceEventType: Iri.meta(range("GovernanceEvent")),
  partners: z.array(Iri).readonly().meta(range(Partner)),
  timestamp: Timestamp,
}).readonly();

export type GovernanceEvent = z.infer<typeof GovernanceEvent>;
