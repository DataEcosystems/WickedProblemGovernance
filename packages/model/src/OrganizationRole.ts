import { z } from "zod";
import { Domain } from "./Domain.js";
import { Iri } from "./Iri.js";
import { ObjectMeta } from "./ObjectMeta.js";
import { OrganizationRoleName } from "./OrganizationRoleName.js";
import { Project } from "./Project.js";
import { PropertyMeta } from "./PropertyMeta.js";
import { RoleBase } from "./RoleBase.js";

export const OrganizationRole = RoleBase.extend({
  "@type": z.literal("OrganizationRole"),
  domains: z.array(Iri).meta(
    new PropertyMeta({
      description:
        "The domains the organization is bringing to the project in this role.",
      range: Domain,
      title: "Domains",
    }),
  ),
  memberOf: Iri.meta(
    new PropertyMeta({
      description: "The project this organization role is a membership of.",
      range: Project,
      title: "Member Of",
    }),
  ),
  roleName: Iri.meta(
    new PropertyMeta({
      description: "The role this organization plays.",
      range: OrganizationRoleName,
      title: "Role Name",
    }),
  ),
}).meta(
  new ObjectMeta({
    description:
      "A role an organization plays as a member of a project. The organization points to this role via schema:memberOf. See https://blog.schema.org/2014/06/16/introducing-role/",
    id: "OrganizationRole",
    title: "Organization Role",
  }),
);

export type OrganizationRole = z.infer<typeof OrganizationRole>;
