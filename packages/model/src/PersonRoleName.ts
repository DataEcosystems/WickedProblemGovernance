import { z } from "zod";
import { Description } from "./Description.js";
import { Iri } from "./Iri.js";
import { Name } from "./Name.js";
import { namedIndividualIriEnum } from "./namedIndividualIriEnum.js";
import { WPG_O } from "./namespaces.js";
import { ObjectMeta } from "./ObjectMeta.js";
import { PersonRoleCategory } from "./PersonRoleCategory.js";
import { PropertyMeta } from "./PropertyMeta.js";

const namedIndividuals = {
  CommunityStakeholder: {
    additionalType: `${WPG_O}CoordinationPersonRoleCategory`,
    description:
      "A community member providing public input, advocacy, or lived-experience perspective.",
  },
  Funder: {
    additionalType: `${WPG_O}TechnicalAssistancePersonRoleCategory`,
    description: "A person providing funding or sponsorship resources.",
  },
  GovernanceProvider: {
    additionalType: `${WPG_O}TechnicalAssistancePersonRoleCategory`,
    description:
      "A person providing governance expertise, facilitation, or process design.",
  },
  GovernanceStakeholder: {
    additionalType: `${WPG_O}DataContributorPersonRoleCategory`,
    description:
      "A person representing governance interests within a data-contributing organization.",
  },
  IdsAdvocate: {
    additionalType: `${WPG_O}CoordinationPersonRoleCategory`,
    description:
      "A person championing or advocating for the IDS within their community or institution.",
    name: "IDS Advocate",
  },
  IdsExecutive: {
    additionalType: `${WPG_O}CoordinationPersonRoleCategory`,
    description:
      "A person providing executive leadership or decision-making authority for the IDS.",
    name: "IDS Executive",
  },
  IdsSponsor: {
    additionalType: `${WPG_O}CoordinationPersonRoleCategory`,
    description:
      "A person providing sponsorship, institutional backing, or political support for the IDS.",
    name: "IDS Sponsor",
  },
  InfrastructureProvider: {
    additionalType: `${WPG_O}TechnicalAssistancePersonRoleCategory`,
    description:
      "A person providing technical infrastructure or systems support.",
  },
  InfrastructureStakeholder: {
    additionalType: `${WPG_O}DataContributorPersonRoleCategory`,
    description:
      "A person representing infrastructure interests within a data-contributing organization.",
  },
  ProgramExecutive: {
    additionalType: `${WPG_O}DataContributorPersonRoleCategory`,
    description:
      "A person providing executive leadership within a data-contributing organization.",
  },
  Researcher: {
    additionalType: `${WPG_O}DataContributorPersonRoleCategory`,
    description:
      "A person conducting research or analysis on behalf of a data-contributing organization.",
  },
  TechnicalAssistanceResearcher: {
    additionalType: `${WPG_O}TechnicalAssistancePersonRoleCategory`,
    description:
      "A person conducting research or analysis as technical assistance.",
    name: "Researcher (Technical Assistance)",
  },
  SubjectMatterExpert: {
    additionalType: `${WPG_O}DataContributorPersonRoleCategory`,
    description:
      "A person providing domain-specific subject matter expertise within a data-contributing organization.",
  },
};

export const PersonRoleName = z
  .object({
    "@id": namedIndividualIriEnum(namedIndividuals),
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
  })
  .meta(
    new ObjectMeta({
      "@type": "PersonRoleName",
      description:
        "A classification of the role a person plays as a member of a project or organization.",
      namedIndividuals,
    }),
  );

export type PersonRoleName = z.infer<typeof PersonRoleName>;
