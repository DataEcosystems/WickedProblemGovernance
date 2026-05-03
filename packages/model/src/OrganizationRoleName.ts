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
        additionalType: "wpg:DataContributorOrganizationRoleCategory",
        description:
          "An organization contributing data records to the IDS, typically domain-specific.",
        id: "DataContributor",
        name: "Data Contributor",
      },
      {
        additionalType: "wpg:CoordinationOrganizationRoleCategory",
        description:
          "An organization serving as the steward for a specific domain, mediating governance requests and translating domain-specific compliance requirements.",
        id: "DomainSteward",
        name: "Domain Steward",
      },
      {
        additionalType: "wpg:TechnicalAssistanceOrganizationRoleCategory",
        description:
          "An organization providing funding or institutional sponsorship for the IDS.",
        id: "Funder",
      },
      {
        additionalType: "wpg:TechnicalAssistanceOrganizationRoleCategory",
        description:
          "An organization providing governance expertise, facilitation, or process design.",
        id: "GovernancePartner",
        name: "Governance Partner",
      },
      {
        additionalType: "wpg:CoordinationOrganizationRoleCategory",
        description:
          "The organization serving as the central coordinating body for the IDS.",
        id: "IdsLocus",
        name: "IDS Locus",
      },
      {
        additionalType: "wpg:TechnicalAssistanceOrganizationRoleCategory",
        description:
          "An organization providing technical infrastructure for data linkage and analysis.",
        id: "InfrastructurePartner",
        name: "Infrastructure Partner",
      },
      {
        additionalType: "wpg:TechnicalAssistanceOrganizationRoleCategory",
        description:
          "An organization conducting research or analysis using the linked data.",
        id: "ResearchPartner",
        name: "Research Partner",
      },
      {
        additionalType: "wpg:CoordinationOrganizationRoleCategory",
        description:
          "An organization providing social license, community trust, or public legitimacy for the IDS.",
        id: "SocialLicense",
        name: "Social License",
      },
    ],
    title: "Organization Role Name",
  }),
);

export type OrganizationRoleName = z.infer<typeof OrganizationRoleName>;
