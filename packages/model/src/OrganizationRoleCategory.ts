import { z } from "zod";
import { Description } from "./Description.js";
import { Name } from "./Name.js";
import { namedIndividualIriEnum } from "./namedIndividualIriEnum.js";
import { ObjectMeta } from "./ObjectMeta.js";

export const OrganizationRoleCategory = z
  .object({
    "@id": namedIndividualIriEnum("OrganizationRoleCategory"),
    "@type": z.literal("OrganizationRoleCategory"),
    description: Description,
    name: Name,
  })
  .meta(
    new ObjectMeta({
      "@type": "OrganizationRoleCategory",
      description:
        "A broad classification of the kind of role an organization plays in a project.",
    }),
  );

export type OrganizationRoleCategory = z.infer<typeof OrganizationRoleCategory>;
