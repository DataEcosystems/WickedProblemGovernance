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
import { OrganizationRole } from "./OrganizationRole.js";
import { OrganizationRoleCategory } from "./OrganizationRoleCategory.js";
import { OrganizationRoleName } from "./OrganizationRoleName.js";
import { Person } from "./Person.js";
import { PersonRole } from "./PersonRole.js";
import { PersonRoleCategory } from "./PersonRoleCategory.js";
import { PersonRoleName } from "./PersonRoleName.js";
import { Place } from "./Place.js";
import { Project } from "./Project.js";

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
  OrganizationRole,
  OrganizationRoleCategory,
  OrganizationRoleName,
  Person,
  PersonRole,
  PersonRoleCategory,
  PersonRoleName,
  Place,
  Project,
] as const;
