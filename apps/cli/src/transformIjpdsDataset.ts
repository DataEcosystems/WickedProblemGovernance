import type { GovernanceArtifactType, Schema } from "@wpg/model";
import { z } from "zod/v4";

// =============================================================================
// IJPDS SOURCE SCHEMAS
// =============================================================================

const IjpdsEventLog = z
  .object({
    artifact_ref: z.string().nullable(),
    ecosystem_id: z.string(),
    episode_id: z.string(),
    event_date: z.string().nullable(),
    event_id: z.string(),
    event_type: z.string(),
    notes: z.string().nullable(),
  })
  .readonly();

const IjpdsEpisodeLog = z
  .object({
    Ce: z.number().nullable(),
    Edu_n: z.number().nullable(),
    H_Services_n: z.number().nullable(),
    Health_n: z.number().nullable(),
    Het_Dom: z.number().nullable(),
    Het_Layer: z.number().nullable(),
    Justice_n: z.number().nullable(),
    Local_n: z.number().nullable(),
    Other_n: z.number().nullable(),
    "STALL FLAG": z.boolean(),
    State_n: z.number().nullable(),
    T2b_Project: z.number().nullable(),
    "Total Actors (n_e)": z.number().nullable(),
    Workforce_n: z.number().nullable(),
    commit_date: z.string().nullable(),
    commitment_object_label: z.string().nullable(),
    ecosystem_id: z.string(),
    episode_id: z.string(),
    episode_title: z.string().nullable(),
    episode_type: z.string(),
    notes: z.string().nullable(),
    num_actors: z.number().nullable(),
    p1_type: z.string().nullable(),
    primary_artifacts: z.string().nullable(),
    project_id: z.string(),
    regional_n: z.number().nullable(),
    start_date: z.string().nullable(),
  })
  .readonly();

type IjpdsEpisodeLog = z.infer<typeof IjpdsEpisodeLog>;

const IjpdsProjectLog = z
  .object({
    Committed_Count: z.number(),
    "Episode Count": z.number(),
    Stalled_Count: z.number(),
    Stall_Fraction: z.number(),
    project_id: z.string(),
    project_label: z.string(),
  })
  .readonly();

const IjpdsAnalysis = z
  .object({
    Ave_partner_n: z.number().nullable(),
    "BP_New_t2/c2": z.union([z.number(), z.string()]).nullable(),
    "C*ep": z.number().nullable(),
    Committed_Count: z.number(),
    Episode_Count: z.number(),
    Federated_Arch: z.number(),
    Geo: z.string(),
    PET_architecture: z.number(),
    Project: z.string(),
    Project_ID: z.string(),
    Stalled_Count: z.number(),
    T2p: z.union([z.number(), z.string()]).nullable(),
    domain_Steward: z.number(),
    total_Population_analyzed: z.number().nullable(),
  })
  .readonly();

export const IjpdsDataset = z
  .object({
    analysis: z.array(IjpdsAnalysis).readonly(),
    episode_log: z.array(IjpdsEpisodeLog).readonly(),
    event_log: z.array(IjpdsEventLog).readonly(),
    project_log: z.array(IjpdsProjectLog).readonly(),
  })
  .readonly();

export type IjpdsDataset = z.infer<typeof IjpdsDataset>;

// =============================================================================
// IRI MINTING
// =============================================================================

const NS = "https://purl.dataecosystems.org/wpg/data/ijpds/";

function iri(type: string, id: string): string {
  return `${NS}${type}/${encodeURIComponent(id)}`;
}

// =============================================================================
// MAPPINGS
// =============================================================================

const EVENT_TYPE_MAP: Record<string, string> = {
  APPROVAL: "wpg:AgreementExecutedGovernanceEventType",
  ESCALATION: "wpg:EscalationGovernanceEventType",
  FORMAL_APPROVAL: "wpg:ApprovalIssuedGovernanceEventType",
  INITIATION: "wpg:RequestSubmittedGovernanceEventType",
  REVIEW: "wpg:ReviewGovernanceEventType",
  WITHDRAWAL: "wpg:WithdrawalGovernanceEventType",
};

const EPISODE_TYPE_MAP: Record<string, string> = {
  AGREEMENT: "wpg:AgreementGovernanceEpisodeType",
  ALLOCATION: "wpg:AllocationGovernanceEpisodeType",
  POLICY_ADOPTION: "wpg:PolicyAdoptionGovernanceEpisodeType",
  PRODUCT: "wpg:ProductGovernanceEpisodeType",
};

const ARTIFACT_TYPE_MAP: Record<string, readonly GovernanceArtifactType[]> = {
  "Action item decision log": [
    {
      "@id": "wpg:CommitteeMinutesGovernanceArtifactType",
      "@type": "GovernanceArtifactType",
      name: "Committee Minutes",
    },
  ],
  Email: [
    {
      "@id": "wpg:EmailGovernanceArtifactType",
      "@type": "GovernanceArtifactType",
      name: "Email",
    },
  ],
  Emails: [
    {
      "@id": "wpg:EmailGovernanceArtifactType",
      "@type": "GovernanceArtifactType",
      name: "Email",
    },
  ],
  "Emails and SOW Draft": [
    {
      "@id": "wpg:EmailGovernanceArtifactType",
      "@type": "GovernanceArtifactType",
      name: "Email",
    },
    {
      "@id": "wpg:SignedAgreementGovernanceArtifactType",
      "@type": "GovernanceArtifactType",
      name: "Signed Agreement",
    },
  ],
  "Emails and sow/proposal": [
    {
      "@id": "wpg:EmailGovernanceArtifactType",
      "@type": "GovernanceArtifactType",
      name: "Email",
    },
    {
      "@id": "wpg:SignedAgreementGovernanceArtifactType",
      "@type": "GovernanceArtifactType",
      name: "Signed Agreement",
    },
  ],
  "Project sign-off and email charter approval.": [
    {
      "@id": "wpg:SignedAgreementGovernanceArtifactType",
      "@type": "GovernanceArtifactType",
      name: "Signed Agreement",
    },
    {
      "@id": "wpg:EmailGovernanceArtifactType",
      "@type": "GovernanceArtifactType",
      name: "Email",
    },
  ],
  "SOW Signed": [
    {
      "@id": "wpg:SignedAgreementGovernanceArtifactType",
      "@type": "GovernanceArtifactType",
      name: "Signed Agreement",
    },
  ],
  "Status report": [
    {
      "@id": "wpg:CommitteeMinutesGovernanceArtifactType",
      "@type": "GovernanceArtifactType",
      name: "Committee Minutes",
    },
  ],
  "Status report, signed agreement": [
    {
      "@id": "wpg:CommitteeMinutesGovernanceArtifactType",
      "@type": "GovernanceArtifactType",
      name: "Committee Minutes",
    },
    {
      "@id": "wpg:SignedAgreementGovernanceArtifactType",
      "@type": "GovernanceArtifactType",
      name: "Signed Agreement",
    },
  ],
};

const DOMAIN_SLOTS: readonly {
  readonly field: keyof IjpdsEpisodeLog;
  readonly domain: string;
  readonly domainIri: string;
}[] = [
  { field: "Edu_n", domain: "education", domainIri: "wpg:EducationDomain" },
  { field: "Health_n", domain: "health", domainIri: "wpg:HealthDomain" },
  {
    field: "H_Services_n",
    domain: "human_services",
    domainIri: "wpg:HumanServicesDomain",
  },
  { field: "Justice_n", domain: "justice", domainIri: "wpg:JusticeDomain" },
  { field: "Other_n", domain: "other", domainIri: iri("Domain", "other") },
  {
    field: "Workforce_n",
    domain: "workforce",
    domainIri: iri("Domain", "workforce"),
  },
];

const LAYER_SLOTS: readonly {
  readonly field: keyof IjpdsEpisodeLog;
  readonly layerIri: string;
}[] = [
  { field: "Local_n", layerIri: "wpg:LocalInstitutionalLayer" },
  { field: "regional_n", layerIri: "wpg:RegionalInstitutionalLayer" },
  { field: "State_n", layerIri: "wpg:StateInstitutionalLayer" },
];

// =============================================================================
// HELPERS
// =============================================================================

function mapEventType(sourceType: string): string {
  const mapped = EVENT_TYPE_MAP[sourceType];
  if (mapped == null) {
    throw new Error(`Unknown event type: ${sourceType}`);
  }
  return mapped;
}

function mapEpisodeType(sourceType: string): string {
  const mapped = EPISODE_TYPE_MAP[sourceType];
  if (mapped == null) {
    throw new Error(`Unknown episode type: ${sourceType}`);
  }
  return mapped;
}

function daysBetween(a: string | null, b: string | null): number | undefined {
  if (a == null || b == null) {
    return undefined;
  }
  const msPerDay = 86_400_000;
  return Math.round((new Date(b).getTime() - new Date(a).getTime()) / msPerDay);
}

function mintPartnerIris(episode: IjpdsEpisodeLog): string[] {
  const partners: string[] = [];
  for (const { field, domain } of DOMAIN_SLOTS) {
    const count = episode[field] as number | null;
    if (count != null && count > 0) {
      for (let i = 1; i <= count; i++) {
        partners.push(iri("Partner", `${episode.episode_id}-${domain}-${i}`));
      }
    }
  }
  return partners;
}

function buildLayerAssignment(episode: IjpdsEpisodeLog): string[] {
  const layers: string[] = [];
  for (const { field, layerIri } of LAYER_SLOTS) {
    const count = episode[field] as number | null;
    if (count != null && count > 0) {
      for (let i = 0; i < count; i++) {
        layers.push(layerIri);
      }
    }
  }
  return layers;
}

// =============================================================================
// TRANSFORM
// =============================================================================

export function* transformIjpdsDataset(data: IjpdsDataset): Iterable<Schema> {
  const emittedIds = new Set<string>();

  // ---------------------------------------------------------------------------
  // Ecosystems
  // ---------------------------------------------------------------------------
  const ecosystemIds = new Set(data.episode_log.map((e) => e.ecosystem_id));
  for (const ecoId of ecosystemIds) {
    const id = iri("Ecosystem", ecoId);
    if (emittedIds.has(id)) {
      continue;
    }
    emittedIds.add(id);
    yield {
      "@id": id,
      "@type": "Ecosystem" as const,
      name: ecoId,
    };
  }

  // ---------------------------------------------------------------------------
  // Projects
  // ---------------------------------------------------------------------------
  const projectLogMap = new Map(data.project_log.map((p) => [p.project_id, p]));
  const projectEcosystemMap = new Map<string, string>();
  for (const ep of data.episode_log) {
    if (!projectEcosystemMap.has(ep.project_id)) {
      projectEcosystemMap.set(ep.project_id, ep.ecosystem_id);
    }
  }

  for (const a of data.analysis) {
    const pLog = projectLogMap.get(a.Project);
    const ecoId = projectEcosystemMap.get(a.Project);
    const t2p = typeof a.T2p === "number" ? a.T2p : undefined;
    const bp =
      typeof a["BP_New_t2/c2"] === "number" ? a["BP_New_t2/c2"] : undefined;
    const cep = a["C*ep"] ?? undefined;

    // Find earliest episode start date for t0
    const episodeStarts = data.episode_log
      .filter((e) => e.project_id === a.Project && e.start_date != null)
      .map((e) => e.start_date!);
    const t0 = episodeStarts.length > 0 ? episodeStarts.sort()[0] : undefined;

    const id = iri("Project", a.Project);
    emittedIds.add(id);
    yield {
      "@id": id,
      "@type": "Project" as const,
      architecture:
        a.Federated_Arch === 1
          ? "wpg:FederatedArchitecture"
          : "wpg:CustodialArchitecture",
      ...(cep != null ? { deliveryCouplingProxy: cep } : {}),
      ecosystem: iri("Ecosystem", ecoId!),
      episodeCount: a.Episode_Count,
      ...(bp != null ? { normalizedBurden: bp } : {}),
      partnerCount: Math.round(a.Ave_partner_n ?? 0),
      stallFraction: pLog?.Stall_Fraction ?? a.Stalled_Count / a.Episode_Count,
      stewardPresence: a.domain_Steward === 1,
      ...(t0 != null ? { t0 } : {}),
      ...(t2p != null ? { tau2: t2p } : {}),
    };
  }

  // ---------------------------------------------------------------------------
  // Episodes
  // ---------------------------------------------------------------------------
  for (const ep of data.episode_log) {
    const tau1 = daysBetween(ep.start_date, ep.commit_date);

    const id = iri("GovernanceEpisode", ep.episode_id);
    emittedIds.add(id);
    yield {
      "@id": id,
      "@type": "GovernanceEpisode" as const,
      couplingProxy: ep.Ce ?? 0,
      domainHeterogeneity: ep.Het_Dom ?? 0,
      governanceEpisodeType: mapEpisodeType(ep.episode_type),
      layerHeterogeneity: ep.Het_Layer ?? 0,
      ...(ep.Ce != null && ep.T2b_Project != null
        ? { normalizedBurden: ep.T2b_Project / ep.Ce }
        : {}),
      partnerCount: ep["Total Actors (n_e)"] ?? 0,
      project: iri("Project", ep.project_id),
      stall: ep["STALL FLAG"],
      ...(ep.start_date != null ? { t0: ep.start_date } : {}),
      ...(ep.commit_date != null ? { t1: ep.commit_date } : {}),
      ...(tau1 != null ? { tau1 } : {}),
      ...(ep.T2b_Project != null ? { tau2: ep.T2b_Project } : {}),
    };
  }

  // ---------------------------------------------------------------------------
  // Events and Artifacts
  // ---------------------------------------------------------------------------
  for (const ev of data.event_log) {
    // Emit artifact
    if (ev.artifact_ref != null) {
      const artifactId = iri("GovernanceArtifact", ev.event_id);
      if (!emittedIds.has(artifactId)) {
        emittedIds.add(artifactId);

        // Look up the episode to find primary_artifacts for type mapping
        const sourceEpisode = data.episode_log.find(
          (e) => e.episode_id === ev.episode_id,
        );
        const artifactTypes =
          sourceEpisode?.primary_artifacts != null
            ? ARTIFACT_TYPE_MAP[sourceEpisode.primary_artifacts]
            : undefined;
        const artifactTypeIri =
          artifactTypes?.[0]?.["@id"] ?? "wpg:EmailGovernanceArtifactType";

        yield {
          "@id": artifactId,
          "@type": "GovernanceArtifact" as const,
          governanceArtifactType: artifactTypeIri,
        };
      }
    }

    // Emit event
    const sourceEpisode = data.episode_log.find(
      (e) => e.episode_id === ev.episode_id,
    );
    const partnerIris = sourceEpisode ? mintPartnerIris(sourceEpisode) : [];

    const eventId = iri("GovernanceEvent", ev.event_id);
    emittedIds.add(eventId);
    yield {
      "@id": eventId,
      "@type": "GovernanceEvent" as const,
      ...(ev.artifact_ref != null
        ? { artifact: iri("GovernanceArtifact", ev.event_id) }
        : {}),
      episode: iri("GovernanceEpisode", ev.episode_id),
      governanceEventType: mapEventType(ev.event_type),
      partners: partnerIris,
      ...(ev.event_date != null ? { timestamp: ev.event_date } : {}),
    };
  }

  // ---------------------------------------------------------------------------
  // Synthetic Partners
  // ---------------------------------------------------------------------------
  const emittedPartners = new Set<string>();

  for (const ep of data.episode_log) {
    const layerAssignment = buildLayerAssignment(ep);
    let partnerIndex = 0;

    for (const { field, domain, domainIri } of DOMAIN_SLOTS) {
      const count = ep[field] as number | null;
      if (count != null && count > 0) {
        for (let i = 1; i <= count; i++) {
          const partnerId = iri("Partner", `${ep.episode_id}-${domain}-${i}`);
          if (!emittedPartners.has(partnerId)) {
            emittedPartners.add(partnerId);
            const layer =
              layerAssignment[partnerIndex] ?? "wpg:LocalInstitutionalLayer";
            yield {
              "@id": partnerId,
              "@type": "Partner" as const,
              domains: [domainIri],
              layers: [layer],
              name: `${domain}-partner-${i} (${ep.episode_id})`,
            };
          }
          partnerIndex++;
        }
      }
    }
  }
}
