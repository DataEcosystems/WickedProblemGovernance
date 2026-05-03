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
    namedIndividuals: [
      {
        additionalType: "wpg:CoordinationPersonRoleCategory",
        description:
          "A community member providing public input, advocacy, or lived-experience perspective.",
        id: "CommunityStakeholder",
        name: "Community Stakeholder",
      },
      {
        additionalType: "wpg:TechnicalAssistancePersonRoleCategory",
        description: "A person providing funding or sponsorship resources.",
        id: "Funder",
      },
      {
        additionalType: "wpg:TechnicalAssistancePersonRoleCategory",
        description:
          "A person providing governance expertise, facilitation, or process design.",
        id: "GovernanceProvider",
        name: "Governance Provider",
      },
      {
        additionalType: "wpg:DataContributorPersonRoleCategory",
        description:
          "A person representing governance interests within a data-contributing organization.",
        id: "GovernanceStakeholder",
        name: "Governance Stakeholder",
      },
      {
        additionalType: "wpg:CoordinationPersonRoleCategory",
        description:
          "A person championing or advocating for the IDS within their community or institution.",
        id: "IdsAdvocate",
        name: "IDS Advocate",
      },
      {
        additionalType: "wpg:CoordinationPersonRoleCategory",
        description:
          "A person providing executive leadership or decision-making authority for the IDS.",
        id: "IdsExecutive",
        name: "IDS Executive",
      },
      {
        additionalType: "wpg:CoordinationPersonRoleCategory",
        description:
          "A person providing sponsorship, institutional backing, or political support for the IDS.",
        id: "IdsSponsor",
        name: "IDS Sponsor",
      },
      {
        additionalType: "wpg:TechnicalAssistancePersonRoleCategory",
        description:
          "A person providing technical infrastructure or systems support.",
        id: "InfrastructureProvider",
        name: "Infrastructure Provider",
      },
      {
        additionalType: "wpg:DataContributorPersonRoleCategory",
        description:
          "A person representing infrastructure interests within a data-contributing organization.",
        id: "InfrastructureStakeholder",
        name: "Infrastructure Stakeholder",
      },
      {
        additionalType: "wpg:DataContributorPersonRoleCategory",
        description:
          "A person providing executive leadership within a data-contributing organization.",
        id: "ProgramExecutive",
        name: "Program Executive",
      },
      {
        additionalType: "wpg:DataContributorPersonRoleCategory",
        description:
          "A person conducting research or analysis on behalf of a data-contributing organization.",
        id: "Researcher",
      },
      {
        additionalType: "wpg:TechnicalAssistancePersonRoleCategory",
        description:
          "A person conducting research or analysis as technical assistance.",
        id: "TechnicalAssistanceResearcher",
        name: "Researcher (Technical Assistance)",
      },
      {
        additionalType: "wpg:DataContributorPersonRoleCategory",
        description:
          "A person providing domain-specific subject matter expertise within a data-contributing organization.",
        id: "SubjectMatterExpert",
        name: "Subject Matter Expert",
      },
    ],
    title: "Person Role Name",
  }),
);

export type PersonRoleName = z.infer<typeof PersonRoleName>;
