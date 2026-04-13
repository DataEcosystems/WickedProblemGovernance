import { z } from "zod";
import { GovernanceArtifactType } from "./GovernanceArtifactType.js";
import { Iri } from "./Iri.js";
import { JsonLdBase } from "./JsonLdBase.js";
import { range } from "./range.js";

export const GovernanceArtifact = JsonLdBase.extend({
  "@type": z.literal("GovernanceArtifact"),
  governanceArtifactType: Iri.meta(range(GovernanceArtifactType)),
}).readonly();

export type GovernanceArtifact = z.infer<typeof GovernanceArtifact>;
