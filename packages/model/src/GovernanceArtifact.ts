import { z } from "zod";
import { Description } from "./Description.js";
import { GovernanceArtifactType } from "./GovernanceArtifactType.js";
import { Iri } from "./Iri.js";
import { JsonLdBase } from "./JsonLdBase.js";
import { Name } from "./Name.js";
import { ObjectMeta } from "./ObjectMeta.js";
import { PropertyMeta } from "./PropertyMeta.js";

export const GovernanceArtifact = JsonLdBase.extend({
  "@type": z.literal("GovernanceArtifact"),
  description: Description.optional(),
  governanceArtifactType: Iri.meta(
    new PropertyMeta({
      description:
        "The type of durable source document from which an event was reconstructed.",
      range: GovernanceArtifactType,
      title: "Governance Artifact Type",
    }),
  ),
  name: Name.optional(),
})
  .readonly()
  .meta(
    new ObjectMeta({
      description:
        "A durable source document from which a governance event was reconstructed.",
      id: "GovernanceArtifact",
      title: "Governance Artifact",
    }),
  );

export type GovernanceArtifact = z.infer<typeof GovernanceArtifact>;
