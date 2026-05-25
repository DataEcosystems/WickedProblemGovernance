import { z } from "zod";
import { Description } from "./Description.js";
import { Iri } from "./Iri.js";
import { Name } from "./Name.js";
import { namedIndividualIriEnum } from "./namedIndividualIriEnum.js";
import { WPG_O } from "./namespaces.js";
import { ObjectMeta } from "./ObjectMeta.js";
import { OrganizationRoleCategory } from "./OrganizationRoleCategory.js";
import { PropertyMeta } from "./PropertyMeta.js";

const namedIndividuals = {
  DataContributor: {
    additionalType: `${WPG_O}DataContributorOrganizationRoleCategory`,
    description:
      "An organization contributing data records to the IDS, typically domain-specific.",
  },
  DomainSteward: {
    additionalType: `${WPG_O}CoordinationOrganizationRoleCategory`,
    description:
      "An organization serving as the steward for a specific domain, mediating governance requests and translating domain-specific compliance requirements.",
  },
  Funder: {
    additionalType: `${WPG_O}TechnicalAssistanceOrganizationRoleCategory`,
    description:
      "An organization providing funding or institutional sponsorship for the IDS.",
  },
  GovernancePartner: {
    additionalType: `${WPG_O}TechnicalAssistanceOrganizationRoleCategory`,
    description:
      "An organization providing governance expertise, facilitation, or process design.",
  },
  IdsLocus: {
    additionalType: `${WPG_O}CoordinationOrganizationRoleCategory`,
    description:
      "The organization serving as the central coordinating body for the IDS.",
    name: "IDS Locus",
  },
  InfrastructurePartner: {
    additionalType: `${WPG_O}TechnicalAssistanceOrganizationRoleCategory`,
    description:
      "An organization providing technical infrastructure for data linkage and analysis.",
  },
  ResearchPartner: {
    additionalType: `${WPG_O}TechnicalAssistanceOrganizationRoleCategory`,
    description:
      "An organization conducting research or analysis using the linked data.",
  },
  SocialLicense: {
    additionalType: `${WPG_O}CoordinationOrganizationRoleCategory`,
    description:
      "An organization providing social license, community trust, or public legitimacy for the IDS.",
  },
} as const;

export const OrganizationRoleName = z
  .object({
    "@id": namedIndividualIriEnum(namedIndividuals, "OrganizationRoleName"),
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
      namedIndividuals,
    }),
  );

export type OrganizationRoleName = z.infer<typeof OrganizationRoleName>;
