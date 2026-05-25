import { z } from "zod";
import { Description } from "./Description.js";
import { Name } from "./Name.js";
import { namedIndividualIriEnum } from "./namedIndividualIriEnum.js";
import { ObjectMeta } from "./ObjectMeta.js";

const namedIndividuals = {
  Coordination: {
    description:
      "A person providing coordination, governance, or convening functions.",
    id: "Coordination",
  },
  DataContributor: {
    description: "A person contributing data records to the IDS.",
    name: "Data Contributor",
  },
  TechnicalAssistance: {
    description:
      "A person providing technical assistance or infrastructure support.",
    name: "Technical Assistance",
  },
} as const;

export const PersonRoleCategory = z
  .object({
    "@id": namedIndividualIriEnum(namedIndividuals),
    "@type": z.literal("PersonRoleCategory"),
    description: Description,
    name: Name,
  })
  .meta(
    new ObjectMeta({
      "@type": "PersonRoleCategory",
      description:
        "A broad classification of the kind of role a person plays in a project or organization.",
      namedIndividuals,
    }),
  );

export type PersonRoleCategory = z.infer<typeof PersonRoleCategory>;
