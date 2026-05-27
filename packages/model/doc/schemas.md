---
title: Wicked Problem Governance — Model Reference
---

# Wicked Problem Governance — Model Reference

## Architecture

The data architecture governing how records are held and linked in an IDS project.

### Named Individuals

| IRI                                                              | Name      | Description                                                                                  |
| :--------------------------------------------------------------- | :-------- | :------------------------------------------------------------------------------------------- |
| `https://purl.dataecosystems.org/wpg/cbox#CustodialArchitecture` | Custodial | Raw data from multiple partners is centralized at a single site for linkage and analysis.    |
| `https://purl.dataecosystems.org/wpg/cbox#FederatedArchitecture` | Federated | Data remains with custodians and is linked via PET-enabled protocols without centralization. |

### Properties

| Property      | Title       | Type   | Required | Range | Formula | Description                 |
| :------------ | :---------- | :----- | :------: | :---- | :------ | :-------------------------- |
| `description` | Description | string |    Yes   | —     | —       | Human-readable description. |
| `name`        | Name        | string |    Yes   | —     | —       | Human-readable name.        |

## Domain

The regulatory and institutional domain of a partner organization.

### Named Individuals

| IRI                                                                                 | Name                                   | Description                                                                                                                    |
| :---------------------------------------------------------------------------------- | :------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| `https://purl.dataecosystems.org/wpg/cbox#EducationDomain`                          | Education                              | Governed primarily under FERPA. Includes K-12, higher education, and early childhood education.                                |
| `https://purl.dataecosystems.org/wpg/cbox#HealthDomain`                             | Health                                 | Governed primarily under HIPAA. Includes hospitals, clinics, health information exchanges, and public health agencies.         |
| `https://purl.dataecosystems.org/wpg/cbox#HumanServicesDomain`                      | Human Services                         | Governed under various state and federal statutes. Includes child welfare, social services, and community-based organizations. |
| `https://purl.dataecosystems.org/wpg/cbox#JobCreationAndWorkforceDevelopmentDomain` | Job Creation And Workforce Development | Includes workforce development programs, job training, and employment services.                                                |
| `https://purl.dataecosystems.org/wpg/cbox#JusticeDomain`                            | Justice                                | Governed under state statute and court orders. Includes courts, corrections, and law enforcement agencies.                     |
| `https://purl.dataecosystems.org/wpg/cbox#OtherDomain`                              | Other                                  | A domain not covered by the other categories.                                                                                  |

### Properties

| Property      | Title       | Type   | Required | Range | Formula | Description                 |
| :------------ | :---------- | :----- | :------: | :---- | :------ | :-------------------------- |
| `description` | Description | string |    Yes   | —     | —       | Human-readable description. |
| `name`        | Name        | string |    Yes   | —     | —       | Human-readable name.        |

## Ecosystem

All projects within a shared geographic and institutional context.

### Properties

| Property               | Title                   | Type   | Required | Range           | Formula | Description                                                                              |
| :--------------------- | :---------------------- | :----- | :------: | :-------------- | :------ | :--------------------------------------------------------------------------------------- |
| `description`          | description             | string |    No    | —               | —       |                                                                                          |
| `location`             | Location                | string |    No    | [Place](#place) | —       | The geographic location associated with this ecosystem.                                  |
| `meanNormalizedBurden` | Mean Normalized Burden  | number |    No    | —               | —       | Average project normalized burden across projects in this ecosystem.                     |
| `meanTimeToValue`      | Mean Time to Value      | number |    No    | —               | —       | Average project time to delivered value across projects in this ecosystem.               |
| `name`                 | Name                    | string |    Yes   | —               | —       | Human-readable name.                                                                     |
| `stdTimeToValue`       | Std. Dev. Time to Value | number |    No    | —               | —       | Standard deviation of project time to delivered value across projects in this ecosystem. |

## Governance Artifact

A durable source document from which a governance event was reconstructed.

### Properties

| Property                 | Title                    | Type   | Required | Range                                               | Formula | Description                                                                |
| :----------------------- | :----------------------- | :----- | :------: | :-------------------------------------------------- | :------ | :------------------------------------------------------------------------- |
| `description`            | description              | string |    No    | —                                                   | —       |                                                                            |
| `governanceArtifactType` | Governance Artifact Type | enum   |    Yes   | [GovernanceArtifactType](#governance-artifact-type) | —       | The type of durable source document from which an event was reconstructed. |
| `name`                   | name                     | string |    No    | —                                                   | —       |                                                                            |

## Governance Artifact Type

A classification of governance artifacts by their documentary form.

### Named Individuals

| IRI                                                                               | Name              | Description                                                                    |
| :-------------------------------------------------------------------------------- | :---------------- | :----------------------------------------------------------------------------- |
| `https://purl.dataecosystems.org/wpg/cbox#CommitteeMinutesGovernanceArtifactType` | Committee Minutes | Minutes, agendas, or decision logs from governance committee meetings.         |
| `https://purl.dataecosystems.org/wpg/cbox#EmailGovernanceArtifactType`            | Email             | Email correspondence documenting governance requests, approvals, or decisions. |
| `https://purl.dataecosystems.org/wpg/cbox#SignedAgreementGovernanceArtifactType`  | Signed Agreement  | A signed legal instrument such as a DSA, DUA, MOU, or SOW.                     |

### Properties

| Property      | Title       | Type   | Required | Range | Formula | Description                 |
| :------------ | :---------- | :----- | :------: | :---- | :------ | :-------------------------- |
| `description` | Description | string |    Yes   | —     | —       | Human-readable description. |
| `name`        | Name        | string |    Yes   | —     | —       | Human-readable name.        |

## Governance Episode

A bounded governance authorization attempt aggregating a sequence of events.

### Properties

| Property                | Title                       | Type             | Required | Range                                             | Formula                                                                                                                                                                                                                                                                               | Description                                                                                              |
| :---------------------- | :-------------------------- | :--------------- | :------: | :------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------- |
| `couplingLoad`          | Coupling Load               | number           |    Yes   | —                                                 | `n * (1 + h_d) * (1 + h_l)`                                                                                                                                                                                                                                                           | Composite measure of scale and structural heterogeneity of governance coordination demands.              |
| `description`           | description                 | string           |    No    | —                                                 | —                                                                                                                                                                                                                                                                                     |                                                                                                          |
| `domainHeterogeneity`   | Domain Heterogeneity        | number           |    Yes   | —                                                 | `1 - sum(values(D) .^ 2) / sum(values(D)) ^ 2`                                                                                                                                                                                                                                        | Simpson-style diversity index measuring how evenly partners are distributed across domains.              |
| `governanceEpisodeType` | Governance Episode Type     | enum             |    Yes   | [GovernanceEpisodeType](#governance-episode-type) | —                                                                                                                                                                                                                                                                                     | The type of governance authorization attempt.                                                            |
| `layerHeterogeneity`    | Layer Heterogeneity         | number           |    Yes   | —                                                 | `1 - sum(values(L) .^ 2) / sum(values(L)) ^ 2`                                                                                                                                                                                                                                        | Simpson-style diversity index measuring how evenly partners are distributed across institutional layers. |
| `name`                  | name                        | string           |    No    | —                                                 | —                                                                                                                                                                                                                                                                                     |                                                                                                          |
| `normalizedBurden`      | Normalized Burden           | number           |    No    | —                                                 | `tau_2 / c`                                                                                                                                                                                                                                                                           | Time to delivered value per unit of coupling load.                                                       |
| `partnerCount`          | Partner Count               | integer          |    Yes   | —                                                 | —                                                                                                                                                                                                                                                                                     | Number of governance-relevant institutional actors in this episode.                                      |
| `project`               | Project                     | string           |    Yes   | [Project](#project)                               | —                                                                                                                                                                                                                                                                                     | The project this episode belongs to.                                                                     |
| `stall`                 | Stall                       | boolean          |    Yes   | —                                                 | —                                                                                                                                                                                                                                                                                     | Whether the episode shows sustained governance engagement but no qualifying durable authorization.       |
| `t0`                    | Episode Start               | date \| datetime |    No    | —                                                 | `min(map(E, f(e) = e.timestamp))`                                                                                                                                                                                                                                                     | Timestamp of earliest event indicating entry into an approval workflow.                                  |
| `t1`                    | First Durable Authorization | date \| datetime |    No    | —                                                 | `min(map(filter(E, f(e) = equalText(e.governanceEventType, "https://purl.dataecosystems.org/wpg/cbox#AgreementExecutedGovernanceEventType") or equalText(e.governanceEventType, "https://purl.dataecosystems.org/wpg/cbox#ApprovalIssuedGovernanceEventType")), f(e) = e.timestamp))` | Timestamp of earliest qualifying authorization event for core scope.                                     |
| `t2`                    | First Delivered Value       | date \| datetime |    No    | —                                                 | `min(map(filter(E, f(e) = equalText(e.governanceEventType, "https://purl.dataecosystems.org/wpg/cbox#OutputDeliveredGovernanceEventType")), f(e) = e.timestamp))`                                                                                                                     | Timestamp of earliest analytic output answering a stakeholder question.                                  |
| `tau1`                  | Authorization Latency       | number           |    No    | —                                                 | `t_1 - t_0`                                                                                                                                                                                                                                                                           | Calendar days from episode initiation to first durable authorization.                                    |
| `tau2`                  | Time to Delivered Value     | number           |    No    | —                                                 | `t_2 - t_0`                                                                                                                                                                                                                                                                           | Calendar days from episode initiation to first delivered analytic output.                                |

## Governance Episode Type

A classification of governance episodes by the nature of the authorization attempt.

### Named Individuals

| IRI                                                                            | Name            | Description                                                                |
| :----------------------------------------------------------------------------- | :-------------- | :------------------------------------------------------------------------- |
| `https://purl.dataecosystems.org/wpg/cbox#AgreementGovernanceEpisodeType`      | Agreement       | An episode seeking execution of a data-sharing or data-use agreement.      |
| `https://purl.dataecosystems.org/wpg/cbox#AllocationGovernanceEpisodeType`     | Allocation      | An episode seeking allocation of funding or resources.                     |
| `https://purl.dataecosystems.org/wpg/cbox#PolicyAdoptionGovernanceEpisodeType` | Policy Adoption | An episode seeking adoption of a charter, policy, or governance structure. |
| `https://purl.dataecosystems.org/wpg/cbox#ProductGovernanceEpisodeType`        | Product         | An episode seeking delivery of an analytic product or output.              |

### Properties

| Property      | Title       | Type   | Required | Range | Formula | Description                 |
| :------------ | :---------- | :----- | :------: | :---- | :------ | :-------------------------- |
| `description` | Description | string |    Yes   | —     | —       | Human-readable description. |
| `name`        | Name        | string |    Yes   | —     | —       | Human-readable name.        |

## Governance Event

A timestamped occurrence in a governance process corresponding to a durable artifact.

### Properties

| Property              | Title                 | Type             | Required | Range                                         | Formula | Description                                             |
| :-------------------- | :-------------------- | :--------------- | :------: | :-------------------------------------------- | :------ | :------------------------------------------------------ |
| `artifact`            | Artifact              | string           |    No    | [GovernanceArtifact](#governance-artifact)    | —       | The durable source document associated with this event. |
| `description`         | description           | string           |    No    | —                                             | —       |                                                         |
| `episode`             | Episode               | string           |    Yes   | [GovernanceEpisode](#governance-episode)      | —       | The governance episode this event belongs to.           |
| `governanceEventType` | Governance Event Type | enum             |    Yes   | [GovernanceEventType](#governance-event-type) | —       | The governance function this event performs.            |
| `name`                | name                  | string           |    No    | —                                             | —       |                                                         |
| `timestamp`           | Timestamp             | date \| datetime |    No    | —                                             | —       | The date or datetime on which this event occurred.      |

## Governance Event Type

A classification of governance events by their function in the authorization process.

### Named Individuals

| IRI                                                                                 | Name                   | Description                                                                                               |
| :---------------------------------------------------------------------------------- | :--------------------- | :-------------------------------------------------------------------------------------------------------- |
| `https://purl.dataecosystems.org/wpg/cbox#AgreementExecutedGovernanceEventType`     | Agreement Executed     | A data-sharing or data-use agreement becomes legally effective through execution by all required parties. |
| `https://purl.dataecosystems.org/wpg/cbox#ApprovalIssuedGovernanceEventType`        | Approval Issued        | A governance boundary issues a positive authorization decision.                                           |
| `https://purl.dataecosystems.org/wpg/cbox#EscalationGovernanceEventType`            | Escalation             | A governance issue is escalated to a higher authority or broader audience.                                |
| `https://purl.dataecosystems.org/wpg/cbox#OutputDeliveredGovernanceEventType`       | Output Delivered       | An analytic product answering a stakeholder question is delivered.                                        |
| `https://purl.dataecosystems.org/wpg/cbox#ProvisioningCompletedGovernanceEventType` | Provisioning Completed | Data access has been technically provisioned (accounts created, data transferred, query access granted).  |
| `https://purl.dataecosystems.org/wpg/cbox#RequestSubmittedGovernanceEventType`      | Request Submitted      | An institutional actor formally initiates a governance authorization process.                             |
| `https://purl.dataecosystems.org/wpg/cbox#ReviewGovernanceEventType`                | Review                 | A governance boundary reviews a request or artifact without issuing a final decision.                     |
| `https://purl.dataecosystems.org/wpg/cbox#WithdrawalGovernanceEventType`            | Withdrawal             | A partner formally or informally withdraws from a governance process.                                     |

### Properties

| Property      | Title       | Type   | Required | Range | Formula | Description                 |
| :------------ | :---------- | :----- | :------: | :---- | :------ | :-------------------------- |
| `description` | Description | string |    Yes   | —     | —       | Human-readable description. |
| `name`        | Name        | string |    Yes   | —     | —       | Human-readable name.        |

## Institutional Layer

The jurisdictional level at which a partner organization operates.

### Named Individuals

| IRI                                                                   | Name     | Description                                                               |
| :-------------------------------------------------------------------- | :------- | :------------------------------------------------------------------------ |
| `https://purl.dataecosystems.org/wpg/cbox#LocalInstitutionalLayer`    | Local    | City, county, or municipal-level organizations.                           |
| `https://purl.dataecosystems.org/wpg/cbox#OtherInstitutionalLayer`    | Other    | An institutional layer not covered by the other categories.               |
| `https://purl.dataecosystems.org/wpg/cbox#RegionalInstitutionalLayer` | Regional | Multi-county, regional service area, or intermediate-level organizations. |
| `https://purl.dataecosystems.org/wpg/cbox#StateInstitutionalLayer`    | State    | State-level agencies, departments, or organizations.                      |

### Properties

| Property      | Title       | Type   | Required | Range | Formula | Description                 |
| :------------ | :---------- | :----- | :------: | :---- | :------ | :-------------------------- |
| `description` | Description | string |    Yes   | —     | —       | Human-readable description. |
| `name`        | Name        | string |    Yes   | —     | —       | Human-readable name.        |

## Organization

An institutional actor such as an agency, department, university, or nonprofit.

### Properties

| Property             | Title               | Type            | Required | Range                                      | Formula | Description                                                           |
| :------------------- | :------------------ | :-------------- | :------: | :----------------------------------------- | :------ | :-------------------------------------------------------------------- |
| `description`        | description         | string          |    No    | —                                          | —       |                                                                       |
| `domains`            | Domains             | array of enum   |    Yes   | [Domain](#domain)                          | —       | The regulatory and institutional domains of this organization.        |
| `foundingLocation`   | Founding Location   | string          |    No    | [Place](#place)                            | —       | The location where this organization was founded or is headquartered. |
| `institutionalLayer` | Institutional Layer | enum            |    Yes   | [InstitutionalLayer](#institutional-layer) | —       | The jurisdictional level at which this organization operates.         |
| `memberOf`           | Member Of           | array of string |    Yes   | [OrganizationRole](#organization-role)     | —       | The organization roles this organization fills.                       |
| `name`               | Name                | string          |    Yes   | —                                          | —       | Human-readable name.                                                  |

## Organization Role

A role an organization plays as a member of a project. The organization points to this role via schema:memberOf. See https\://blog.schema.org/2014/06/16/introducing-role/

### Properties

| Property                        | Title                            | Type             | Required | Range                                           | Formula | Description                                                                                                     |
| :------------------------------ | :------------------------------- | :--------------- | :------: | :---------------------------------------------- | :------ | :-------------------------------------------------------------------------------------------------------------- |
| `contributesDataTo`             | Contributes Data To              | array of string  |    No    | [OrganizationRole](#organization-role)          | —       | Organization roles this role contributes data to.                                                               |
| `coordinates`                   | Coordinates                      | array of string  |    No    | [OrganizationRole](#organization-role)          | —       | Organization roles this role coordinates.                                                                       |
| `description`                   | description                      | string           |    No    | —                                               | —       |                                                                                                                 |
| `domain`                        | Domain                           | enum             |    Yes   | [Domain](#domain)                               | —       | The domain the organization is bringing to the project in this role. Must be one of the organization's domains. |
| `endDate`                       | End Date                         | date \| datetime |    No    | —                                               | —       | The date the role ended.                                                                                        |
| `memberOf`                      | Member Of                        | string           |    Yes   | [Project](#project)                             | —       | The project this organization role is a membership of.                                                          |
| `name`                          | name                             | string           |    No    | —                                               | —       |                                                                                                                 |
| `providesTechnicalAssistanceTo` | Provides Technical Assistance To | array of string  |    No    | [OrganizationRole](#organization-role)          | —       | Organization roles this role provides technical assistance to.                                                  |
| `roleName`                      | Role Name                        | enum             |    Yes   | [OrganizationRoleName](#organization-role-name) | —       | The role this organization plays.                                                                               |
| `startDate`                     | Start Date                       | date \| datetime |    No    | —                                               | —       | The date the role began.                                                                                        |

## Organization Role Category

A broad classification of the kind of role an organization plays in a project.

### Named Individuals

| IRI                                                                                    | Name                 | Description                                                                 |
| :------------------------------------------------------------------------------------- | :------------------- | :-------------------------------------------------------------------------- |
| `https://purl.dataecosystems.org/wpg/cbox#CoordinationOrganizationRoleCategory`        | Coordination         | An organization providing coordination, governance, or convening functions. |
| `https://purl.dataecosystems.org/wpg/cbox#DataContributorOrganizationRoleCategory`     | Data Contributor     | An organization contributing data records to the IDS.                       |
| `https://purl.dataecosystems.org/wpg/cbox#TechnicalAssistanceOrganizationRoleCategory` | Technical Assistance | An organization providing technical assistance or infrastructure support.   |

### Properties

| Property      | Title       | Type   | Required | Range | Formula | Description                 |
| :------------ | :---------- | :----- | :------: | :---- | :------ | :-------------------------- |
| `description` | Description | string |    Yes   | —     | —       | Human-readable description. |
| `name`        | Name        | string |    Yes   | —     | —       | Human-readable name.        |

## Organization Role Name

A classification of the role an organization plays as a member of a project.

### Named Individuals

| IRI                                                                                  | Name                   | Description                                                                                                                                          |
| :----------------------------------------------------------------------------------- | :--------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| `https://purl.dataecosystems.org/wpg/cbox#DataContributorOrganizationRoleName`       | Data Contributor       | An organization contributing data records to the IDS, typically domain-specific.                                                                     |
| `https://purl.dataecosystems.org/wpg/cbox#DomainStewardOrganizationRoleName`         | Domain Steward         | An organization serving as the steward for a specific domain, mediating governance requests and translating domain-specific compliance requirements. |
| `https://purl.dataecosystems.org/wpg/cbox#FunderOrganizationRoleName`                | Funder                 | An organization providing funding or institutional sponsorship for the IDS.                                                                          |
| `https://purl.dataecosystems.org/wpg/cbox#GovernancePartnerOrganizationRoleName`     | Governance Partner     | An organization providing governance expertise, facilitation, or process design.                                                                     |
| `https://purl.dataecosystems.org/wpg/cbox#IdsLocusOrganizationRoleName`              | IDS Locus              | The organization serving as the central coordinating body for the IDS.                                                                               |
| `https://purl.dataecosystems.org/wpg/cbox#InfrastructurePartnerOrganizationRoleName` | Infrastructure Partner | An organization providing technical infrastructure for data linkage and analysis.                                                                    |
| `https://purl.dataecosystems.org/wpg/cbox#ResearchPartnerOrganizationRoleName`       | Research Partner       | An organization conducting research or analysis using the linked data.                                                                               |
| `https://purl.dataecosystems.org/wpg/cbox#SocialLicenseOrganizationRoleName`         | Social License         | An organization providing social license, community trust, or public legitimacy for the IDS.                                                         |

### Properties

| Property         | Title           | Type   | Required | Range                                                   | Formula | Description                                    |
| :--------------- | :-------------- | :----- | :------: | :------------------------------------------------------ | :------ | :--------------------------------------------- |
| `additionalType` | Additional Type | string |    Yes   | [OrganizationRoleCategory](#organization-role-category) | —       | The broad category this role name falls under. |
| `description`    | Description     | string |    Yes   | —                                                       | —       | Human-readable description.                    |
| `name`           | Name            | string |    Yes   | —                                                       | —       | Human-readable name.                           |

## Person

An individual person.

### Properties

| Property      | Title       | Type            | Required | Range                      | Formula | Description                         |
| :------------ | :---------- | :-------------- | :------: | :------------------------- | :------ | :---------------------------------- |
| `description` | description | string          |    No    | —                          | —       |                                     |
| `memberOf`    | Member Of   | array of string |    Yes   | [PersonRole](#person-role) | —       | The person roles this person fills. |
| `name`        | Name        | string          |    Yes   | —                          | —       | Human-readable name.                |

## Person Role

A role a person plays as a member of a project or organization. The person points to this role via schema:memberOf. See https\://blog.schema.org/2014/06/16/introducing-role/

### Properties

| Property      | Title       | Type             | Required | Range                                                | Formula | Description                                                      |
| :------------ | :---------- | :--------------- | :------: | :--------------------------------------------------- | :------ | :--------------------------------------------------------------- |
| `description` | description | string           |    No    | —                                                    | —       |                                                                  |
| `endDate`     | End Date    | date \| datetime |    No    | —                                                    | —       | The date the role ended.                                         |
| `memberOf`    | Member Of   | string           |    Yes   | [Organization](#organization) \| [Project](#project) | —       | The organization or project this person role is a membership of. |
| `name`        | name        | string           |    No    | —                                                    | —       |                                                                  |
| `roleName`    | Role Name   | enum             |    No    | [PersonRoleName](#person-role-name)                  | —       | The role this person plays.                                      |
| `startDate`   | Start Date  | date \| datetime |    No    | —                                                    | —       | The date the role began.                                         |

## Person Role Category

A broad classification of the kind of role a person plays in a project or organization.

### Named Individuals

| IRI                                                                              | Name                 | Description                                                          |
| :------------------------------------------------------------------------------- | :------------------- | :------------------------------------------------------------------- |
| `https://purl.dataecosystems.org/wpg/cbox#CoordinationPersonRoleCategory`        | Coordination         | A person providing coordination, governance, or convening functions. |
| `https://purl.dataecosystems.org/wpg/cbox#DataContributorPersonRoleCategory`     | Data Contributor     | A person contributing data records to the IDS.                       |
| `https://purl.dataecosystems.org/wpg/cbox#TechnicalAssistancePersonRoleCategory` | Technical Assistance | A person providing technical assistance or infrastructure support.   |

### Properties

| Property      | Title       | Type   | Required | Range | Formula | Description                 |
| :------------ | :---------- | :----- | :------: | :---- | :------ | :-------------------------- |
| `description` | Description | string |    Yes   | —     | —       | Human-readable description. |
| `name`        | Name        | string |    Yes   | —     | —       | Human-readable name.        |

## Person Role Name

A classification of the role a person plays as a member of a project or organization.

### Named Individuals

| IRI                                                                                    | Name                              | Description                                                                                          |
| :------------------------------------------------------------------------------------- | :-------------------------------- | :--------------------------------------------------------------------------------------------------- |
| `https://purl.dataecosystems.org/wpg/cbox#CommunityStakeholderPersonRoleName`          | Community Stakeholder             | A community member providing public input, advocacy, or lived-experience perspective.                |
| `https://purl.dataecosystems.org/wpg/cbox#FunderPersonRoleName`                        | Funder                            | A person providing funding or sponsorship resources.                                                 |
| `https://purl.dataecosystems.org/wpg/cbox#GovernanceProviderPersonRoleName`            | Governance Provider               | A person providing governance expertise, facilitation, or process design.                            |
| `https://purl.dataecosystems.org/wpg/cbox#GovernanceStakeholderPersonRoleName`         | Governance Stakeholder            | A person representing governance interests within a data-contributing organization.                  |
| `https://purl.dataecosystems.org/wpg/cbox#IdsAdvocatePersonRoleName`                   | IDS Advocate                      | A person championing or advocating for the IDS within their community or institution.                |
| `https://purl.dataecosystems.org/wpg/cbox#IdsExecutivePersonRoleName`                  | IDS Executive                     | A person providing executive leadership or decision-making authority for the IDS.                    |
| `https://purl.dataecosystems.org/wpg/cbox#IdsSponsorPersonRoleName`                    | IDS Sponsor                       | A person providing sponsorship, institutional backing, or political support for the IDS.             |
| `https://purl.dataecosystems.org/wpg/cbox#InfrastructureProviderPersonRoleName`        | Infrastructure Provider           | A person providing technical infrastructure or systems support.                                      |
| `https://purl.dataecosystems.org/wpg/cbox#InfrastructureStakeholderPersonRoleName`     | Infrastructure Stakeholder        | A person representing infrastructure interests within a data-contributing organization.              |
| `https://purl.dataecosystems.org/wpg/cbox#ProgramExecutivePersonRoleName`              | Program Executive                 | A person providing executive leadership within a data-contributing organization.                     |
| `https://purl.dataecosystems.org/wpg/cbox#ResearcherPersonRoleName`                    | Researcher                        | A person conducting research or analysis on behalf of a data-contributing organization.              |
| `https://purl.dataecosystems.org/wpg/cbox#TechnicalAssistanceResearcherPersonRoleName` | Researcher (Technical Assistance) | A person conducting research or analysis as technical assistance.                                    |
| `https://purl.dataecosystems.org/wpg/cbox#SubjectMatterExpertPersonRoleName`           | Subject Matter Expert             | A person providing domain-specific subject matter expertise within a data-contributing organization. |

### Properties

| Property         | Title           | Type   | Required | Range                                       | Formula | Description                                    |
| :--------------- | :-------------- | :----- | :------: | :------------------------------------------ | :------ | :--------------------------------------------- |
| `additionalType` | Additional Type | string |    Yes   | [PersonRoleCategory](#person-role-category) | —       | The broad category this role name falls under. |
| `description`    | Description     | string |    Yes   | —                                           | —       | Human-readable description.                    |
| `name`           | Name            | string |    Yes   | —                                           | —       | Human-readable name.                           |

## Place

A geographic or administrative location.

### Properties

| Property           | Title              | Type            | Required | Range           | Formula | Description                     |
| :----------------- | :----------------- | :-------------- | :------: | :-------------- | :------ | :------------------------------ |
| `containedInPlace` | Contained In Place | array of string |    No    | [Place](#place) | —       | Places that contain this place. |
| `name`             | Name               | string          |    Yes   | —               | —       | Human-readable name.            |

## Project

A group of episodes sharing a common governance boundary design and data architecture.

### Properties

| Property               | Title                   | Type             | Required | Range                                    | Formula | Description                                                                                        |
| :--------------------- | :---------------------- | :--------------- | :------: | :--------------------------------------- | :------ | :------------------------------------------------------------------------------------------------- |
| `architecture`         | Architecture            | enum             |    Yes   | [Architecture](#architecture)            | —       | The data architecture governing how records are held and linked.                                   |
| `areaServed`           | Area Served             | string           |    No    | [Place](#place)                          | —       | The geographic area served by this project.                                                        |
| `deliveryCouplingLoad` | Delivery Coupling Load  | number           |    No    | —                                        | —       | The coupling load of the delivery episode.                                                         |
| `deliveryEpisode`      | Delivery Episode        | string           |    No    | [GovernanceEpisode](#governance-episode) | —       | The episode whose delivered value corresponds to the first data product.                           |
| `description`          | description             | string           |    No    | —                                        | —       |                                                                                                    |
| `ecosystem`            | Ecosystem               | string           |    No    | [Ecosystem](#ecosystem)                  | —       | The ecosystem this project belongs to.                                                             |
| `episodeCount`         | Episode Count           | integer          |    Yes   | —                                        | —       | Number of governance episodes in this project.                                                     |
| `name`                 | Name                    | string           |    Yes   | —                                        | —       | Human-readable name.                                                                               |
| `normalizedBurden`     | Normalized Burden       | number           |    No    | —                                        | —       | Project time to delivered value per unit of delivery-episode coupling load.                        |
| `partnerCount`         | Partner Count           | integer          |    Yes   | —                                        | —       | Number of institutional actors contributing data in the delivery episode.                          |
| `stallFraction`        | Stall Fraction          | number           |    Yes   | —                                        | —       | Proportion of episodes in the project that stalled.                                                |
| `stewardPresence`      | Steward Presence        | boolean          |    Yes   | —                                        | —       | Whether the project includes an authorized domain representative who mediates governance requests. |
| `t0`                   | Project Start           | date \| datetime |    No    | —                                        | —       | The earliest episode initiation timestamp across all episodes in the project.                      |
| `tau2`                 | Time to Delivered Value | number           |    No    | —                                        | —       | Calendar days from the earliest episode initiation to delivery of the first analytic output.       |
