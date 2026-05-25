import { z } from "zod";
import { Description } from "./Description.js";
import { Name } from "./Name.js";
import { namedIndividualIriEnum } from "./namedIndividualIriEnum.js";
import { ObjectMeta } from "./ObjectMeta.js";

const namedIndividuals = {
  Agreement: {
    description:
      "An episode seeking execution of a data-sharing or data-use agreement.",
  },
  Allocation: {
    description: "An episode seeking allocation of funding or resources.",
  },
  PolicyAdoption: {
    description:
      "An episode seeking adoption of a charter, policy, or governance structure.",
  },
  Product: {
    description:
      "An episode seeking delivery of an analytic product or output.",
  },
} as const;

export const GovernanceEpisodeType = z
  .object({
    "@id": namedIndividualIriEnum(namedIndividuals, "GovernanceEpisodeType"),
    "@type": z.literal("GovernanceEpisodeType"),
    description: Description,
    name: Name,
  })
  .meta(
    new ObjectMeta({
      "@type": "GovernanceEpisodeType",
      description:
        "A classification of governance episodes by the nature of the authorization attempt.",
      namedIndividuals,
    }),
  );

export type GovernanceEpisodeType = z.infer<typeof GovernanceEpisodeType>;
