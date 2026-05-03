import { z } from "zod";
import { Description } from "./Description.js";
import { Name } from "./Name.js";
import { ObjectMeta } from "./ObjectMeta.js";
import { ResourceBase } from "./ResourceBase.js";

export const PersonRoleCategory = ResourceBase.extend({
  "@type": z.literal("PersonRoleCategory"),
  description: Description,
  name: Name,
}).meta(
  new ObjectMeta({
    description:
      "A broad classification of the kind of role a person plays in a project or organization.",
    id: "PersonRoleCategory",
    namedIndividuals: [
      {
        description:
          "A person providing coordination, governance, or convening functions.",
        id: "Coordination",
      },
      {
        description: "A person contributing data records to the IDS.",
        id: "DataContributor",
        name: "Data Contributor",
      },
      {
        description:
          "A person providing technical assistance or infrastructure support.",
        id: "TechnicalAssistance",
        name: "Technical Assistance",
      },
    ],
    title: "Person Role Category",
  }),
);

export type PersonRoleCategory = z.infer<typeof PersonRoleCategory>;
