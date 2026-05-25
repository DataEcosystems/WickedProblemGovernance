import { z } from "zod";
import { Iri } from "./Iri.js";
import { ObjectMeta } from "./ObjectMeta.js";
import { Organization } from "./Organization.js";
import { PersonRoleName } from "./PersonRoleName.js";
import { Project } from "./Project.js";
import { PropertyMeta } from "./PropertyMeta.js";
import { RoleBase } from "./RoleBase.js";

export const PersonRole = RoleBase.extend({
  "@type": z.literal("PersonRole"),
  memberOf: Iri.meta(
    new PropertyMeta({
      description:
        "The organization or project this person role is a membership of.",
      range: [Organization, Project],
      title: "Member Of",
    }),
  ),
  roleName: PersonRoleName.shape["@id"].optional().meta(
    new PropertyMeta({
      description: "The role this person plays.",
      range: PersonRoleName,
      title: "Role Name",
    }),
  ),
}).meta(
  new ObjectMeta({
    "@type": "PersonRole",
    description:
      "A role a person plays as a member of a project or organization. The person points to this role via schema:memberOf. See https://blog.schema.org/2014/06/16/introducing-role/",
  }),
);

export type PersonRole = z.infer<typeof PersonRole>;
