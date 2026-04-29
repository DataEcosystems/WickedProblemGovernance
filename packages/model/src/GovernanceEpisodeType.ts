import { z } from "zod";
import { Description } from "./Description.js";
import { Name } from "./Name.js";
import { ObjectMeta } from "./ObjectMeta.js";
import { ResourceBase } from "./ResourceBase.js";

export const GovernanceEpisodeType = ResourceBase.extend({
  "@type": z.literal("GovernanceEpisodeType"),
  description: Description,
  name: Name,
}).meta(
  new ObjectMeta({
    description:
      "A classification of governance episodes by the nature of the authorization attempt.",
    id: "GovernanceEpisodeType",
    namedIndividuals: [
      {
        description:
          "An episode seeking execution of a data-sharing or data-use agreement.",
        id: "Agreement",
      },
      {
        description: "An episode seeking allocation of funding or resources.",
        id: "Allocation",
      },
      {
        description:
          "An episode seeking adoption of a charter, policy, or governance structure.",
        id: "PolicyAdoption",
        name: "Policy Adoption",
      },
      {
        description:
          "An episode seeking delivery of an analytic product or output.",
        id: "Product",
      },
    ],
    title: "Governance Episode Type",
  }),
);

export type GovernanceEpisodeType = z.infer<typeof GovernanceEpisodeType>;
