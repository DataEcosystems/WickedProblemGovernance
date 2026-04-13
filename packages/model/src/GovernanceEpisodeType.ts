import z from "zod";
import { JsonLdBase } from "./JsonLdBase.js";

export const GovernanceEpisodeType = JsonLdBase.extend({
  "@type": z.literal("GovernanceEpisodeType"),
  name: z.string(),
})
  .readonly()
  .meta({
    namedIndividuals: [
      { "@id": "wpg:AgreementGovernanceEpisodeType", name: "Agreement" },
      { "@id": "wpg:AllocationGovernanceEpisodeType", name: "Allocation" },
      {
        "@id": "wpg:PolicyAdoptionGovernanceEpisodeType",
        name: "Policy Adoption",
      },
      { "@id": "wpg:ProductGovernanceEpisodeType", name: "Product" },
    ],
  });

export type GovernanceEpisodeType = z.infer<typeof GovernanceEpisodeType>;
