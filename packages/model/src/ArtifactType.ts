import { z } from "zod";
import { JsonLdBase } from "./JsonLdBase.js";

export const ArtifactType = JsonLdBase.extend({
  "@type": z.literal("ArtifactType"),
  name: z.string(),
})
  .readonly()
  .meta({
    namedIndividuals: [
      { "@id": "wpg:CommitteeMinutesArtifactType", name: "Committee Minutes" },
      { "@id": "wpg:EmailArtifactType", name: "Email" },
      { "@id": "wpg:SignedAgreementArtifactType", name: "Signed Agreement" },
    ],
  });

export type ArtifactType = z.infer<typeof ArtifactType>;
