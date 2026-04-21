import { z } from "zod";
import { JsonLdBase } from "./JsonLdBase.js";

export const GovernanceEpisodeType = JsonLdBase.extend({
  "@type": z.literal("GovernanceEpisodeType"),
  name: z.string().meta({
    description: "Human-readable name of the episode type.",
    title: "Name",
  }),
})
  .readonly()
  .meta({
    description:
      "A classification of governance episodes by the nature of the authorization attempt.",
    id: "GovernanceEpisodeType",
    namedIndividuals: [
      { "@id": "wpg:AgreementGovernanceEpisodeType", name: "Agreement" },
      { "@id": "wpg:AllocationGovernanceEpisodeType", name: "Allocation" },
      {
        "@id": "wpg:PolicyAdoptionGovernanceEpisodeType",
        name: "Policy Adoption",
      },
      { "@id": "wpg:ProductGovernanceEpisodeType", name: "Product" },
    ],
    title: "Governance Episode Type",
  });

export type GovernanceEpisodeType = z.infer<typeof GovernanceEpisodeType>;
