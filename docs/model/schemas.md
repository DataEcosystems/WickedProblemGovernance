---
title: IDS Governance Measurement Framework — Schema Reference
---

# IDS Governance Measurement Framework — Schema Reference

## Architecture

The data architecture governing how records are held and linked in an IDS project.

### Named Individuals

| IRI                         | Name      | Description                                                                                  |
| :-------------------------- | :-------- | :------------------------------------------------------------------------------------------- |
| `wpg:CustodialArchitecture` | Custodial | Raw data from multiple partners is centralized at a single site for linkage and analysis.    |
| `wpg:FederatedArchitecture` | Federated | Data remains with custodians and is linked via PET-enabled protocols without centralization. |

### Properties

| Property      | Title       | Type   | Required | Range | Description                 |
| :------------ | :---------- | :----- | :------: | :---- | :-------------------------- |
| `description` | Description | string |    Yes   | —     | Human-readable description. |
| `name`        | Name        | string |    Yes   | —     | Human-readable name.        |

## Domain

The regulatory and institutional domain of a partner organization.

### Named Individuals

| IRI                       | Name           | Description                                                                                                                    |
| :------------------------ | :------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| `wpg:EducationDomain`     | Education      | Governed primarily under FERPA. Includes K-12, higher education, and early childhood education.                                |
| `wpg:HealthDomain`        | Health         | Governed primarily under HIPAA. Includes hospitals, clinics, health information exchanges, and public health agencies.         |
| `wpg:HumanServicesDomain` | Human Services | Governed under various state and federal statutes. Includes child welfare, social services, and community-based organizations. |
| `wpg:JusticeDomain`       | Justice        | Governed under state statute and court orders. Includes courts, corrections, and law enforcement agencies.                     |

### Properties

| Property      | Title       | Type   | Required | Range | Description                 |
| :------------ | :---------- | :----- | :------: | :---- | :-------------------------- |
| `description` | Description | string |    Yes   | —     | Human-readable description. |
| `name`        | Name        | string |    Yes   | —     | Human-readable name.        |

## Organization

An institutional actor such as an agency, department, university, or nonprofit.

### Properties

| Property      | Title                | Type            | Required | Range                                      | Description                                                    |
| :------------ | :------------------- | :-------------- | :------: | :----------------------------------------- | :------------------------------------------------------------- |
| `description` | description          | string          |    No    | —                                          |                                                                |
| `domains`     | Domains              | array of string |    Yes   | [Domain](#domain)                          | The regulatory and institutional domains of this organization. |
| `layers`      | Institutional Layers | array of string |    Yes   | [InstitutionalLayer](#institutional-layer) | The jurisdictional levels at which this organization operates. |
| `name`        | Name                 | string          |    Yes   | —                                          | Human-readable name.                                           |

## Project

A group of episodes sharing a common governance boundary design and data architecture.

### Properties

| Property                | Title                   | Type             | Required | Range                                    | Description                                                                                        |
| :---------------------- | :---------------------- | :--------------- | :------: | :--------------------------------------- | :------------------------------------------------------------------------------------------------- |
| `architecture`          | Architecture            | string           |    Yes   | [Architecture](#architecture)            | The data architecture governing how records are held and linked.                                   |
| `deliveryCouplingProxy` | Delivery Coupling Proxy | number           |    No    | —                                        | The coupling proxy of the delivery episode.                                                        |
| `deliveryEpisode`       | Delivery Episode        | string           |    No    | [GovernanceEpisode](#governance-episode) | The episode whose delivered value corresponds to the first data product.                           |
| `description`           | description             | string           |    No    | —                                        |                                                                                                    |
| `ecosystem`             | Ecosystem               | string           |    Yes   | [Ecosystem](#ecosystem)                  | The ecosystem this project belongs to.                                                             |
| `episodeCount`          | Episode Count           | integer          |    Yes   | —                                        | Number of governance episodes in this project.                                                     |
| `name`                  | Name                    | string           |    Yes   | —                                        | Human-readable name.                                                                               |
| `normalizedBurden`      | Normalized Burden       | number           |    No    | —                                        | Project time to delivered value per unit of delivery-episode coupling load.                        |
| `partnerCount`          | Partner Count           | integer          |    Yes   | —                                        | Number of institutional actors contributing data in the delivery episode.                          |
| `stallFraction`         | Stall Fraction          | number           |    Yes   | —                                        | Proportion of episodes in the project that stalled.                                                |
| `stewardPresence`       | Steward Presence        | boolean          |    Yes   | —                                        | Whether the project includes an authorized domain representative who mediates governance requests. |
| `t0`                    | Project Start           | date \| datetime |    No    | —                                        | The earliest episode initiation timestamp across all episodes in the project.                      |
| `tau2`                  | Time to Delivered Value | number           |    No    | —                                        | Calendar days from the earliest episode initiation to delivery of the first analytic output.       |

## Project Partner

An n-ary relation linking an organization to a project in a specific role.

### Properties

| Property       | Title        | Type   | Required | Range                                       | Description                                     |
| :------------- | :----------- | :----- | :------: | :------------------------------------------ | :---------------------------------------------- |
| `description`  | description  | string |    No    | —                                           |                                                 |
| `name`         | Name         | string |    Yes   | —                                           | Human-readable name.                            |
| `organization` | Organization | string |    Yes   | [Organization](#organization)               | The organization fulfilling this partner role.  |
| `project`      | Project      | string |    Yes   | [Project](#project)                         | The project in which this partner participates. |
| `role`         | Role         | string |    Yes   | [ProjectPartnerRole](#project-partner-role) | The role this partner plays in the project.     |

## Project Partner Role

A classification of the role a partner organization plays in a project.

### Named Individuals

| IRI                                            | Name                    | Description                                                                       |
| :--------------------------------------------- | :---------------------- | :-------------------------------------------------------------------------------- |
| `wpg:CentralizedItProjectPartnerRole`          | Centralized IT          | An organization providing centralized IT services for the project.                |
| `wpg:DataContributorProjectPartnerRole`        | Data Contributor        | An organization contributing data records to the IDS.                             |
| `wpg:IdsSponsorProjectPartnerRole`             | IDS Sponsor             | An organization providing funding or institutional sponsorship for the IDS.       |
| `wpg:InfrastructureProviderProjectPartnerRole` | Infrastructure Provider | An organization providing technical infrastructure for data linkage and analysis. |
| `wpg:ProgramLeadershipProjectPartnerRole`      | Program Leadership      | An organization providing executive or program leadership for the project.        |
| `wpg:ProgramSmeProjectPartnerRole`             | Program SME             | An organization providing subject matter expertise on the program or domain.      |
| `wpg:ResearcherProjectPartnerRole`             | Researcher              | An organization conducting research or analysis using the linked data.            |

### Properties

| Property      | Title       | Type   | Required | Range | Description                 |
| :------------ | :---------- | :----- | :------: | :---- | :-------------------------- |
| `description` | Description | string |    Yes   | —     | Human-readable description. |
| `name`        | Name        | string |    Yes   | —     | Human-readable name.        |

## Ecosystem

All projects within a shared geographic and institutional context.

### Properties

| Property               | Title                   | Type   | Required | Range | Description                                                                              |
| :--------------------- | :---------------------- | :----- | :------: | :---- | :--------------------------------------------------------------------------------------- |
| `description`          | description             | string |    No    | —     |                                                                                          |
| `meanNormalizedBurden` | Mean Normalized Burden  | number |    No    | —     | Average project normalized burden across projects in this ecosystem.                     |
| `meanTimeToValue`      | Mean Time to Value      | number |    No    | —     | Average project time to delivered value across projects in this ecosystem.               |
| `name`                 | Name                    | string |    Yes   | —     | Human-readable name.                                                                     |
| `stdTimeToValue`       | Std. Dev. Time to Value | number |    No    | —     | Standard deviation of project time to delivered value across projects in this ecosystem. |

## Governance Artifact

A durable source document from which a governance event was reconstructed.

### Properties

| Property                 | Title                    | Type   | Required | Range                                               | Description                                                                |
| :----------------------- | :----------------------- | :----- | :------: | :-------------------------------------------------- | :------------------------------------------------------------------------- |
| `description`            | description              | string |    No    | —                                                   |                                                                            |
| `governanceArtifactType` | Governance Artifact Type | string |    Yes   | [GovernanceArtifactType](#governance-artifact-type) | The type of durable source document from which an event was reconstructed. |
| `name`                   | name                     | string |    No    | —                                                   |                                                                            |

## Governance Artifact Type

A classification of governance artifacts by their documentary form.

### Named Individuals

| IRI                                          | Name              | Description                                                                    |
| :------------------------------------------- | :---------------- | :----------------------------------------------------------------------------- |
| `wpg:CommitteeMinutesGovernanceArtifactType` | Committee Minutes | Minutes, agendas, or decision logs from governance committee meetings.         |
| `wpg:EmailGovernanceArtifactType`            | Email             | Email correspondence documenting governance requests, approvals, or decisions. |
| `wpg:SignedAgreementGovernanceArtifactType`  | Signed Agreement  | A signed legal instrument such as a DSA, DUA, MOU, or SOW.                     |

### Properties

| Property      | Title       | Type   | Required | Range | Description                 |
| :------------ | :---------- | :----- | :------: | :---- | :-------------------------- |
| `description` | Description | string |    Yes   | —     | Human-readable description. |
| `name`        | Name        | string |    Yes   | —     | Human-readable name.        |

## Governance Episode

A bounded governance authorization attempt aggregating a sequence of events.

### Properties

| Property                | Title                       | Type             | Required | Range                                             | Description                                                                                              |
| :---------------------- | :-------------------------- | :--------------- | :------: | :------------------------------------------------ | :------------------------------------------------------------------------------------------------------- |
| `couplingProxy`         | Coupling Proxy              | number           |    Yes   | —                                                 | Composite measure of scale and structural heterogeneity of governance coordination demands.              |
| `description`           | description                 | string           |    No    | —                                                 |                                                                                                          |
| `domainHeterogeneity`   | Domain Heterogeneity        | number           |    Yes   | —                                                 | Simpson-style diversity index measuring how evenly partners are distributed across domains.              |
| `governanceEpisodeType` | Governance Episode Type     | string           |    Yes   | [GovernanceEpisodeType](#governance-episode-type) | The type of governance authorization attempt.                                                            |
| `layerHeterogeneity`    | Layer Heterogeneity         | number           |    Yes   | —                                                 | Simpson-style diversity index measuring how evenly partners are distributed across institutional layers. |
| `name`                  | name                        | string           |    No    | —                                                 |                                                                                                          |
| `normalizedBurden`      | Normalized Burden           | number           |    No    | —                                                 | Time to delivered value per unit of coupling load.                                                       |
| `partnerCount`          | Partner Count               | integer          |    Yes   | —                                                 | Number of governance-relevant institutional actors in this episode.                                      |
| `project`               | Project                     | string           |    Yes   | [Project](#project)                               | The project this episode belongs to.                                                                     |
| `stall`                 | Stall                       | boolean          |    Yes   | —                                                 | Whether the episode shows sustained governance engagement but no qualifying durable authorization.       |
| `t0`                    | Episode Start               | date \| datetime |    No    | —                                                 | Timestamp of earliest event indicating entry into an approval workflow.                                  |
| `t1`                    | First Durable Authorization | date \| datetime |    No    | —                                                 | Timestamp of earliest qualifying authorization event for core scope.                                     |
| `t2`                    | First Delivered Value       | date \| datetime |    No    | —                                                 | Timestamp of earliest analytic output answering a stakeholder question.                                  |
| `tau1`                  | Authorization Latency       | number           |    No    | —                                                 | Calendar days from episode initiation to first durable authorization.                                    |
| `tau2`                  | Time to Delivered Value     | number           |    No    | —                                                 | Calendar days from episode initiation to first delivered analytic output.                                |

## Governance Episode Type

A classification of governance episodes by the nature of the authorization attempt.

### Named Individuals

| IRI                                       | Name            | Description                                                                |
| :---------------------------------------- | :-------------- | :------------------------------------------------------------------------- |
| `wpg:AgreementGovernanceEpisodeType`      | Agreement       | An episode seeking execution of a data-sharing or data-use agreement.      |
| `wpg:AllocationGovernanceEpisodeType`     | Allocation      | An episode seeking allocation of funding or resources.                     |
| `wpg:PolicyAdoptionGovernanceEpisodeType` | Policy Adoption | An episode seeking adoption of a charter, policy, or governance structure. |
| `wpg:ProductGovernanceEpisodeType`        | Product         | An episode seeking delivery of an analytic product or output.              |

### Properties

| Property      | Title       | Type   | Required | Range | Description                 |
| :------------ | :---------- | :----- | :------: | :---- | :-------------------------- |
| `description` | Description | string |    Yes   | —     | Human-readable description. |
| `name`        | Name        | string |    Yes   | —     | Human-readable name.        |

## Governance Event

A timestamped occurrence in a governance process corresponding to a durable artifact.

### Properties

| Property              | Title                 | Type             | Required | Range                                         | Description                                             |
| :-------------------- | :-------------------- | :--------------- | :------: | :-------------------------------------------- | :------------------------------------------------------ |
| `artifact`            | Artifact              | string           |    No    | [GovernanceArtifact](#governance-artifact)    | The durable source document associated with this event. |
| `description`         | description           | string           |    No    | —                                             |                                                         |
| `episode`             | Episode               | string           |    Yes   | [GovernanceEpisode](#governance-episode)      | The governance episode this event belongs to.           |
| `governanceEventType` | Governance Event Type | string           |    Yes   | [GovernanceEventType](#governance-event-type) | The governance function this event performs.            |
| `name`                | name                  | string           |    No    | —                                             |                                                         |
| `partners`            | Partners              | array of string  |    Yes   | [ProjectPartner](#project-partner)            | The project partners involved in this event.            |
| `timestamp`           | Timestamp             | date \| datetime |    No    | —                                             | The date or datetime on which this event occurred.      |

## Governance Event Type

A classification of governance events by their function in the authorization process.

### Named Individuals

| IRI                                            | Name                   | Description                                                                                               |
| :--------------------------------------------- | :--------------------- | :-------------------------------------------------------------------------------------------------------- |
| `wpg:AgreementExecutedGovernanceEventType`     | Agreement Executed     | A data-sharing or data-use agreement becomes legally effective through execution by all required parties. |
| `wpg:ApprovalIssuedGovernanceEventType`        | Approval Issued        | A governance boundary issues a positive authorization decision.                                           |
| `wpg:EscalationGovernanceEventType`            | Escalation             | A governance issue is escalated to a higher authority or broader audience.                                |
| `wpg:OutputDeliveredGovernanceEventType`       | Output Delivered       | An analytic product answering a stakeholder question is delivered.                                        |
| `wpg:ProvisioningCompletedGovernanceEventType` | Provisioning Completed | Data access has been technically provisioned (accounts created, data transferred, query access granted).  |
| `wpg:RequestSubmittedGovernanceEventType`      | Request Submitted      | An institutional actor formally initiates a governance authorization process.                             |
| `wpg:ReviewGovernanceEventType`                | Review                 | A governance boundary reviews a request or artifact without issuing a final decision.                     |
| `wpg:WithdrawalGovernanceEventType`            | Withdrawal             | A partner formally or informally withdraws from a governance process.                                     |

### Properties

| Property      | Title       | Type   | Required | Range | Description                 |
| :------------ | :---------- | :----- | :------: | :---- | :-------------------------- |
| `description` | Description | string |    Yes   | —     | Human-readable description. |
| `name`        | Name        | string |    Yes   | —     | Human-readable name.        |

## Institutional Layer

The jurisdictional level at which a partner organization operates.

### Named Individuals

| IRI                              | Name     | Description                                                               |
| :------------------------------- | :------- | :------------------------------------------------------------------------ |
| `wpg:LocalInstitutionalLayer`    | Local    | City, county, or municipal-level organizations.                           |
| `wpg:RegionalInstitutionalLayer` | Regional | Multi-county, regional service area, or intermediate-level organizations. |
| `wpg:StateInstitutionalLayer`    | State    | State-level agencies, departments, or organizations.                      |

### Properties

| Property      | Title       | Type   | Required | Range | Description                 |
| :------------ | :---------- | :----- | :------: | :---- | :-------------------------- |
| `description` | Description | string |    Yes   | —     | Human-readable description. |
| `name`        | Name        | string |    Yes   | —     | Human-readable name.        |
