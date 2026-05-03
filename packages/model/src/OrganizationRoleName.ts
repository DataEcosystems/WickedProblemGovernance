import { z } from "zod";
import { Description } from "./Description.js";
import { Iri } from "./Iri.js";
import { Name } from "./Name.js";
import { ObjectMeta } from "./ObjectMeta.js";
import { OrganizationRoleCategory } from "./OrganizationRoleCategory.js";
import { PropertyMeta } from "./PropertyMeta.js";
import { ResourceBase } from "./ResourceBase.js";

export const OrganizationRoleName = ResourceBase.extend({
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
}).meta(
  new ObjectMeta({
    description:
      "A classification of the role an organization plays as a member of a project.",
    id: "OrganizationRoleName",
    namedIndividuals: [
      {
        description:
          "An organization providing centralized IT services for the project.",
        id: "CentralizedIt",
        name: "Centralized IT",
      },
      {
        description: "An organization contributing data records to the IDS.",
        id: "DataContributor",
        name: "Data Contributor",
      },
      {
        description:
          "An organization providing funding or institutional sponsorship for the IDS.",
        id: "IdsSponsor",
        name: "IDS Sponsor",
      },
      {
        description:
          "An organization providing technical infrastructure for data linkage and analysis.",
        id: "InfrastructureProvider",
        name: "Infrastructure Provider",
      },
      {
        description:
          "An organization providing executive or program leadership for the project.",
        id: "ProgramLeadership",
        name: "Program Leadership",
      },
      {
        description:
          "An organization providing subject matter expertise on the program or domain.",
        id: "ProgramSme",
        name: "Program SME",
      },
      {
        description:
          "An organization conducting research or analysis using the linked data.",
        id: "Researcher",
      },
    ],
    title: "Organization Role Name",
  }),
);

export type OrganizationRoleName = z.infer<typeof OrganizationRoleName>;
