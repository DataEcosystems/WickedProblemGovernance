import { z } from "zod";
import { JsonLdBase } from "./JsonLdBase.js";

export const GovernanceArtifactType = JsonLdBase.extend({
  "@type": z.literal("GovernanceArtifactType"),
  name: z.string(),
})
  .readonly()
  .meta({
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
  });

export type GovernanceArtifactType = z.infer<typeof GovernanceArtifactType>;
