import { z } from "zod";
import { Description } from "./Description.js";
import { Name } from "./Name.js";
import { ObjectMeta } from "./ObjectMeta.js";
import { ResourceBase } from "./ResourceBase.js";

export const OrganizationRoleCategory = ResourceBase.extend({
  "@type": z.literal("OrganizationRoleCategory"),
  description: Description,
  name: Name,
}).meta(
  new ObjectMeta({
    "@type": "OrganizationRoleCategory",
    description:
      "A broad classification of the kind of role an organization plays in a project.",
    namedIndividuals: [
      {
        description:
          "An organization providing coordination, governance, or convening functions.",
        id: "Coordination",
      },
      {
        description: "An organization contributing data records to the IDS.",
        id: "DataContributor",
        name: "Data Contributor",
      },
      {
        description:
          "An organization providing technical assistance or infrastructure support.",
        id: "TechnicalAssistance",
        name: "Technical Assistance",
      },
    ],
    title: "Organization Role Category",
  }),
);

export type OrganizationRoleCategory = z.infer<typeof OrganizationRoleCategory>;
