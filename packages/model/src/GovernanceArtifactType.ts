import { z } from "zod";
import { JsonLdBase } from "./JsonLdBase.js";

export const GovernanceArtifactType = JsonLdBase.extend({
  "@type": z.literal("GovernanceArtifactType"),
  name: z.string().meta({
    description: "Human-readable name of the artifact type.",
    title: "Name",
  }),
})
  .readonly()
  .meta({
    description:
      "A classification of governance artifacts by their documentary form.",
    id: "GovernanceArtifactType",
    namedIndividuals: [
      {
        "@id": "wpg:CommitteeMinutesGovernanceArtifactType",
        name: "Committee Minutes",
      },
      { "@id": "wpg:EmailGovernanceArtifactType", name: "Email" },
      {
        "@id": "wpg:SignedAgreementGovernanceArtifactType",
        name: "Signed Agreement",
      },
    ],
    title: "Governance Artifact Type",
  });

export type GovernanceArtifactType = z.infer<typeof GovernanceArtifactType>;
