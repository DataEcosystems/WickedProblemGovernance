import type {
  Ecosystem,
  GovernanceArtifact,
  GovernanceEpisode,
  GovernanceEvent,
  Organization,
  OrganizationRole,
  Project,
} from "@wpg/model";

const NS = "https://example.com/test/";

function iri(type: string, id: string): string {
  return `${NS}${type}/${id}`;
}

export const ecosystem: Ecosystem = {
  "@id": iri("Ecosystem", "ecosystem-1"),
  "@type": "Ecosystem",
  name: "Test Ecosystem",
};

export const project: Project = {
  "@id": iri("Project", "project-1"),
  "@type": "Project",
  architecture:
    "https://purl.dataecosystems.org/wpg/cbox#FederatedArchitecture",
  ecosystem: ecosystem["@id"],
  episodeCount: 2,
  name: "Test Project",
  partnerCount: 3,
  stallFraction: 0.5,
  stewardPresence: true,
};

export const organizationRole1: OrganizationRole = {
  "@id": iri("OrganizationRole", "organization-role-1"),
  "@type": "OrganizationRole",
  domain: "https://purl.dataecosystems.org/wpg/cbox#EducationDomain",
  memberOf: project["@id"],
  roleName:
    "https://purl.dataecosystems.org/wpg/cbox#DataContributorOrganizationRoleName",
};

export const organizationRole2: OrganizationRole = {
  "@id": iri("OrganizationRole", "organization-role-2"),
  "@type": "OrganizationRole",
  domain: "https://purl.dataecosystems.org/wpg/cbox#HealthDomain",
  memberOf: project["@id"],
  roleName:
    "https://purl.dataecosystems.org/wpg/cbox#DataContributorOrganizationRoleName",
};

export const organizationRole3: OrganizationRole = {
  "@id": iri("OrganizationRole", "organization-role-3"),
  "@type": "OrganizationRole",
  domain: "https://purl.dataecosystems.org/wpg/cbox#HumanServicesDomain",
  memberOf: project["@id"],
  roleName:
    "https://purl.dataecosystems.org/wpg/cbox#InfrastructurePartnerOrganizationRoleName",
};

export const organization1: Organization = {
  "@id": iri("Organization", "organization-1"),
  "@type": "Organization",
  domains: ["https://purl.dataecosystems.org/wpg/cbox#EducationDomain"],
  institutionalLayer:
    "https://purl.dataecosystems.org/wpg/cbox#LocalInstitutionalLayer",
  memberOf: [organizationRole1["@id"]],
  name: "Local School District",
};

export const organization2: Organization = {
  "@id": iri("Organization", "organization-2"),
  "@type": "Organization",
  domains: ["https://purl.dataecosystems.org/wpg/cbox#HealthDomain"],
  institutionalLayer:
    "https://purl.dataecosystems.org/wpg/cbox#RegionalInstitutionalLayer",
  memberOf: [organizationRole2["@id"]],
  name: "Regional Health Authority",
};

export const organization3: Organization = {
  "@id": iri("Organization", "organization-3"),
  "@type": "Organization",
  domains: ["https://purl.dataecosystems.org/wpg/cbox#HumanServicesDomain"],
  institutionalLayer:
    "https://purl.dataecosystems.org/wpg/cbox#LocalInstitutionalLayer",
  memberOf: [organizationRole3["@id"]],
  name: "Community Services Agency",
};

export const governanceArtifact1: GovernanceArtifact = {
  "@id": iri("GovernanceArtifact", "governance-artifact-1"),
  "@type": "GovernanceArtifact",
  governanceArtifactType:
    "https://purl.dataecosystems.org/wpg/cbox#EmailGovernanceArtifactType",
  name: "Initial request email",
};

export const governanceArtifact2: GovernanceArtifact = {
  "@id": iri("GovernanceArtifact", "governance-artifact-2"),
  "@type": "GovernanceArtifact",
  governanceArtifactType:
    "https://purl.dataecosystems.org/wpg/cbox#SignedAgreementGovernanceArtifactType",
  name: "Executed DSA",
};

export const governanceArtifact3: GovernanceArtifact = {
  "@id": iri("GovernanceArtifact", "governance-artifact-3"),
  "@type": "GovernanceArtifact",
  governanceArtifactType:
    "https://purl.dataecosystems.org/wpg/cbox#EmailGovernanceArtifactType",
  name: "Charter review email",
};

export const committedGovernanceEpisode: GovernanceEpisode = {
  "@id": iri("GovernanceEpisode", "governance-episode-1"),
  "@type": "GovernanceEpisode",
  couplingProxy: 6.75,
  domainHeterogeneity: 0.667,
  governanceEpisodeType:
    "https://purl.dataecosystems.org/wpg/cbox#AgreementGovernanceEpisodeType",
  layerHeterogeneity: 0.5,
  name: "DSA Negotiation",
  partnerCount: 3,
  project: project["@id"],
  stall: false,
  t0: "2023-01-15",
  t1: "2023-04-20",
  tau1: 95,
};

export const stalledGovernanceEpisode: GovernanceEpisode = {
  "@id": iri("GovernanceEpisode", "governance-episode-2"),
  "@type": "GovernanceEpisode",
  couplingProxy: 4.5,
  domainHeterogeneity: 0.5,
  governanceEpisodeType:
    "https://purl.dataecosystems.org/wpg/cbox#PolicyAdoptionGovernanceEpisodeType",
  layerHeterogeneity: 0.5,
  name: "Charter Approval",
  partnerCount: 2,
  project: project["@id"],
  stall: true,
  t0: "2022-06-01",
};

export const committedGovernanceEpisodeEvents: GovernanceEvent[] = [
  {
    "@id": iri("GovernanceEvent", "governance-event-1"),
    "@type": "GovernanceEvent",
    artifact: governanceArtifact1["@id"],
    episode: committedGovernanceEpisode["@id"],
    governanceEventType:
      "https://purl.dataecosystems.org/wpg/cbox#RequestSubmittedGovernanceEventType",
    timestamp: "2023-01-15",
  },
  {
    "@id": iri("GovernanceEvent", "governance-event-2"),
    "@type": "GovernanceEvent",
    episode: committedGovernanceEpisode["@id"],
    governanceEventType:
      "https://purl.dataecosystems.org/wpg/cbox#ReviewGovernanceEventType",
    timestamp: "2023-03-01",
  },
  {
    "@id": iri("GovernanceEvent", "governance-event-3"),
    "@type": "GovernanceEvent",
    artifact: governanceArtifact2["@id"],
    episode: committedGovernanceEpisode["@id"],
    governanceEventType:
      "https://purl.dataecosystems.org/wpg/cbox#AgreementExecutedGovernanceEventType",
    timestamp: "2023-04-20",
  },
];

export const stalledGovernanceEpisodeEvents: GovernanceEvent[] = [
  {
    "@id": iri("GovernanceEvent", "governance-event-4"),
    "@type": "GovernanceEvent",
    artifact: governanceArtifact3["@id"],
    episode: stalledGovernanceEpisode["@id"],
    governanceEventType:
      "https://purl.dataecosystems.org/wpg/cbox#RequestSubmittedGovernanceEventType",
    timestamp: "2022-06-01",
  },
  {
    "@id": iri("GovernanceEvent", "governance-event-5"),
    "@type": "GovernanceEvent",
    episode: stalledGovernanceEpisode["@id"],
    governanceEventType:
      "https://purl.dataecosystems.org/wpg/cbox#ReviewGovernanceEventType",
    timestamp: "2022-09-15",
  },
  {
    "@id": iri("GovernanceEvent", "governance-event-6"),
    "@type": "GovernanceEvent",
    episode: stalledGovernanceEpisode["@id"],
    governanceEventType:
      "https://purl.dataecosystems.org/wpg/cbox#ReviewGovernanceEventType",
    timestamp: "2023-01-10",
  },
];

export const allGovernanceEvents: GovernanceEvent[] = [
  ...committedGovernanceEpisodeEvents,
  ...stalledGovernanceEpisodeEvents,
];
