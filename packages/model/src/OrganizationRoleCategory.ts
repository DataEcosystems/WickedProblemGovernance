import { z } from "zod";
import { Description } from "./Description.js";
import { Name } from "./Name.js";
import { namedIndividualIriEnum } from "./namedIndividualIriEnum.js";
import { ObjectMeta } from "./ObjectMeta.js";

const namedIndividuals = {
  Coordination: {
    description:
      "An organization providing coordination, governance, or convening functions.",
  },
  DataContributor: {
    description: "An organization contributing data records to the IDS.",
  },
  TechnicalAssistance: {
    description:
      "An organization providing technical assistance or infrastructure support.",
  },
} as const;

export const OrganizationRoleCategory = z
  .object({
    "@id": namedIndividualIriEnum(namedIndividuals, "OrganizationRoleCategory"),
    "@type": z.literal("OrganizationRoleCategory"),
    description: Description,
    name: Name,
  })
  .meta(
    new ObjectMeta({
      "@type": "OrganizationRoleCategory",
      description:
        "A broad classification of the kind of role an organization plays in a project.",
      namedIndividuals,
    }),
  );

export type OrganizationRoleCategory = z.infer<typeof OrganizationRoleCategory>;
