import { WPG_O } from "./namespaces.js";

export const namedIndividuals = {
  Architecture: {
    Custodial: {
      description:
        "Raw data from multiple partners is centralized at a single site for linkage and analysis.",
    },
    Federated: {
      description:
        "Data remains with custodians and is linked via PET-enabled protocols without centralization.",
    },
  },

  Domain: {
    Education: {
      description:
        "Governed primarily under FERPA. Includes K-12, higher education, and early childhood education.",
    },
    Health: {
      description:
        "Governed primarily under HIPAA. Includes hospitals, clinics, health information exchanges, and public health agencies.",
    },
    HumanServices: {
      description:
        "Governed under various state and federal statutes. Includes child welfare, social services, and community-based organizations.",
    },
    JobCreationAndWorkforceDevelopment: {
      description:
        "Includes workforce development programs, job training, and employment services.",
    },
    Justice: {
      description:
        "Governed under state statute and court orders. Includes courts, corrections, and law enforcement agencies.",
    },
    Other: {
      description: "A domain not covered by the other categories.",
    },
  },

  GovernanceArtifactType: {
    CommitteeMinutes: {
      description:
        "Minutes, agendas, or decision logs from governance committee meetings.",
    },
    Email: {
      description:
        "Email correspondence documenting governance requests, approvals, or decisions.",
    },
    SignedAgreement: {
      description: "A signed legal instrument such as a DSA, DUA, MOU, or SOW.",
    },
  },

  GovernanceEpisodeType: {
    Agreement: {
      description:
        "An episode seeking execution of a data-sharing or data-use agreement.",
    },
    Allocation: {
      description: "An episode seeking allocation of funding or resources.",
    },
    PolicyAdoption: {
      description:
        "An episode seeking adoption of a charter, policy, or governance structure.",
    },
    Product: {
      description:
        "An episode seeking delivery of an analytic product or output.",
    },
  },

  GovernanceEventType: {
    AgreementExecuted: {
      description:
        "A data-sharing or data-use agreement becomes legally effective through execution by all required parties.",
    },
    ApprovalIssued: {
      description:
        "A governance boundary issues a positive authorization decision.",
    },
    Escalation: {
      description:
        "A governance issue is escalated to a higher authority or broader audience.",
    },
    OutputDelivered: {
      description:
        "An analytic product answering a stakeholder question is delivered.",
    },
    ProvisioningCompleted: {
      description:
        "Data access has been technically provisioned (accounts created, data transferred, query access granted).",
    },
    RequestSubmitted: {
      description:
        "An institutional actor formally initiates a governance authorization process.",
    },
    Review: {
      description:
        "A governance boundary reviews a request or artifact without issuing a final decision.",
    },
    Withdrawal: {
      description:
        "A partner formally or informally withdraws from a governance process.",
    },
  },

  InstitutionalLayer: {
    Local: {
      description: "City, county, or municipal-level organizations.",
    },
    Other: {
      description:
        "An institutional layer not covered by the other categories.",
    },
    Regional: {
      description:
        "Multi-county, regional service area, or intermediate-level organizations.",
    },
    State: {
      description: "State-level agencies, departments, or organizations.",
    },
  },

  OrganizationRoleCategory: {
    Coordination: {
      description:
        "An organization providing coordination, governance, or convening functions.",
    },
    DataContributor: {
      description: "An organization contributing data records to the IDS.",
    },
    TechnicalAssistance: {
      description:
        "An organization providing technical assistance or infrastructure support.",
    },
  },

  OrganizationRoleName: {
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
  },

  PersonRoleCategory: {
    Coordination: {
      description:
        "A person providing coordination, governance, or convening functions.",
      id: "Coordination",
    },
    DataContributor: {
      description: "A person contributing data records to the IDS.",
      name: "Data Contributor",
    },
    TechnicalAssistance: {
      description:
        "A person providing technical assistance or infrastructure support.",
      name: "Technical Assistance",
    },
  },

  PersonRoleName: {
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
  },
} as const;
