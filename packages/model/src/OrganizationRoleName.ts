import { z } from "zod";
import { Description } from "./Description.js";
import { Iri } from "./Iri.js";
import { Name } from "./Name.js";
import { namedIndividualIriEnum } from "./namedIndividualIriEnum.js";
import { ObjectMeta } from "./ObjectMeta.js";
import { OrganizationRoleCategory } from "./OrganizationRoleCategory.js";
import { PropertyMeta } from "./PropertyMeta.js";

export const OrganizationRoleName = z
  .object({
    "@id": namedIndividualIriEnum("OrganizationRoleName"),
    "@type": z.literal("OrganizationRoleName"),
    additionalType: Iri.meta(
      new PropertyMeta({
        description: "The broad category this role name falls under.",
        range: OrganizationRoleCategory,
        title: "Additional Type",
      }),
    ),
    description: Description,
    name: Name,
  })
  .meta(
    new ObjectMeta({
      "@type": "OrganizationRoleName",
      description:
        "A classification of the role an organization plays as a member of a project.",
    }),
  );

export type OrganizationRoleName = z.infer<typeof OrganizationRoleName>;
