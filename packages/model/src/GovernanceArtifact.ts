import { z } from "zod";
import { GovernanceArtifactType } from "./GovernanceArtifactType.js";
import { Iri } from "./Iri.js";
import { JsonLdBase } from "./JsonLdBase.js";
import { range } from "./range.js";

export const GovernanceArtifact = JsonLdBase.extend({
  "@type": z.literal("GovernanceArtifact"),
  governanceArtifactType: Iri.meta({
    description:
      "The type of durable source document from which an event was reconstructed.",
    ...range(GovernanceArtifactType),
    title: "Governance Artifact Type",
  }),
})
  .readonly()
  .meta({
    description:
      "A durable source document from which a governance event was reconstructed.",
    id: "GovernanceArtifact",
    title: "Governance Artifact",
  });

export type GovernanceArtifact = z.infer<typeof GovernanceArtifact>;
