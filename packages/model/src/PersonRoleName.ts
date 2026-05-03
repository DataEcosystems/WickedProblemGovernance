import { z } from "zod";
import { Description } from "./Description.js";
import { Iri } from "./Iri.js";
import { Name } from "./Name.js";
import { ObjectMeta } from "./ObjectMeta.js";
import { PersonRoleCategory } from "./PersonRoleCategory.js";
import { PropertyMeta } from "./PropertyMeta.js";
import { ResourceBase } from "./ResourceBase.js";

export const PersonRoleName = ResourceBase.extend({
  "@type": z.literal("PersonRoleName"),
  additionalType: Iri.meta(
    new PropertyMeta({
      description: "The broad category this role name falls under.",
      range: PersonRoleCategory,
      title: "Additional Type",
    }),
  ),
  description: Description,
  name: Name,
}).meta(
  new ObjectMeta({
    description:
      "A classification of the role a person plays as a member of a project or organization.",
    id: "PersonRoleName",
    title: "Person Role Name",
  }),
);

export type PersonRoleName = z.infer<typeof PersonRoleName>;
