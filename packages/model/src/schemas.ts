import { Architecture } from "./Architecture.js";
import { Domain } from "./Domain.js";
import { Ecosystem } from "./Ecosystem.js";
import { GovernanceArtifact } from "./GovernanceArtifact.js";
import { GovernanceArtifactType } from "./GovernanceArtifactType.js";
import { GovernanceEpisode } from "./GovernanceEpisode.js";
import { GovernanceEpisodeType } from "./GovernanceEpisodeType.js";
import { GovernanceEvent } from "./GovernanceEvent.js";
import { GovernanceEventType } from "./GovernanceEventType.js";
import { InstitutionalLayer } from "./InstitutionalLayer.js";
import { Organization } from "./Organization.js";
import { Project } from "./Project.js";
import { ProjectPartner } from "./ProjectPartner.js";
import { ProjectPartnerRole } from "./ProjectPartnerRole.js";

export const schemas = [
  Architecture,
  Domain,
  Ecosystem,
  GovernanceArtifact,
  GovernanceArtifactType,
  GovernanceEpisode,
  GovernanceEpisodeType,
  GovernanceEvent,
  GovernanceEventType,
  InstitutionalLayer,
  Organization,
  Project,
  ProjectPartner,
  ProjectPartnerRole,
] as const;
