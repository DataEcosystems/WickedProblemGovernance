---
title: IDS Governance Measurement Framework — Schema Reference
---

# IDS Governance Measurement Framework — Schema Reference

## Architecture

The data architecture governing how records are held and linked in an IDS project.

### Named Individuals

| IRI                         | Name      |
| :-------------------------- | :-------- |
| `wpg:CustodialArchitecture` | Custodial |
| `wpg:FederatedArchitecture` | Federated |

### Properties

| Property | Title | Type   | Required | Range | Description                                   |
| :------- | :---- | :----- | :------: | :---- | :-------------------------------------------- |
| `name`   | Name  | string |    Yes   | —     | Human-readable name of the architecture type. |

## Domain

The regulatory and institutional domain of a partner organization.

### Named Individuals

| IRI                       | Name           |
| :------------------------ | :------------- |
| `wpg:EducationDomain`     | Education      |
| `wpg:HealthDomain`        | Health         |
| `wpg:HumanServicesDomain` | Human Services |
| `wpg:JusticeDomain`       | Justice        |

### Properties

| Property | Title | Type   | Required | Range | Description                        |
| :------- | :---- | :----- | :------: | :---- | :--------------------------------- |
| `name`   | Name  | string |    Yes   | —     | Human-readable name of the domain. |

## Ecosystem

All projects within a shared geographic and institutional context.

### Properties

| Property               | Title                   | Type   | Required | Range | Description                                                                              |
| :--------------------- | :---------------------- | :----- | :------: | :---- | :--------------------------------------------------------------------------------------- |
| `meanNormalizedBurden` | Mean Normalized Burden  | number |    No    | —     | Average project normalized burden across projects in this ecosystem.                     |
| `meanTimeToValue`      | Mean Time to Value      | number |    No    | —     | Average project time to delivered value across projects in this ecosystem.               |
| `name`                 | Name                    | string |    Yes   | —     | Human-readable name of the ecosystem.                                                    |
| `stdTimeToValue`       | Std. Dev. Time to Value | number |    No    | —     | Standard deviation of project time to delivered value across projects in this ecosystem. |

## Governance Artifact

A durable source document from which a governance event was reconstructed.

### Properties

| Property                 | Title                    | Type   | Required | Range                                               | Description                                                                |
| :----------------------- | :----------------------- | :----- | :------: | :-------------------------------------------------- | :------------------------------------------------------------------------- |
| `governanceArtifactType` | Governance Artifact Type | string |    Yes   | [GovernanceArtifactType](#governance-artifact-type) | The type of durable source document from which an event was reconstructed. |

## Governance Artifact Type

A classification of governance artifacts by their documentary form.

### Named Individuals

| IRI                                          | Name              |
| :------------------------------------------- | :---------------- |
| `wpg:CommitteeMinutesGovernanceArtifactType` | Committee Minutes |
| `wpg:EmailGovernanceArtifactType`            | Email             |
| `wpg:SignedAgreementGovernanceArtifactType`  | Signed Agreement  |

### Properties

| Property | Title | Type   | Required | Range | Description                               |
| :------- | :---- | :----- | :------: | :---- | :---------------------------------------- |
| `name`   | Name  | string |    Yes   | —     | Human-readable name of the artifact type. |

## Governance Episode

A bounded governance authorization attempt aggregating a sequence of events.

### Properties

| Property                | Title                       | Type             | Required | Range                                             | Description                                                                                              |
| :---------------------- | :-------------------------- | :--------------- | :------: | :------------------------------------------------ | :------------------------------------------------------------------------------------------------------- |
| `couplingProxy`         | Coupling Proxy              | number           |    Yes   | —                                                 | Composite measure of scale and structural heterogeneity of governance coordination demands.              |
| `domainHeterogeneity`   | Domain Heterogeneity        | number           |    Yes   | —                                                 | Simpson-style diversity index measuring how evenly partners are distributed across domains.              |
| `governanceEpisodeType` | Governance Episode Type     | string           |    Yes   | [GovernanceEpisodeType](#governance-episode-type) | The type of governance authorization attempt.                                                            |
| `layerHeterogeneity`    | Layer Heterogeneity         | number           |    Yes   | —                                                 | Simpson-style diversity index measuring how evenly partners are distributed across institutional layers. |
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

| IRI                                       | Name            |
| :---------------------------------------- | :-------------- |
| `wpg:AgreementGovernanceEpisodeType`      | Agreement       |
| `wpg:AllocationGovernanceEpisodeType`     | Allocation      |
| `wpg:PolicyAdoptionGovernanceEpisodeType` | Policy Adoption |
| `wpg:ProductGovernanceEpisodeType`        | Product         |

### Properties

| Property | Title | Type   | Required | Range | Description                              |
| :------- | :---- | :----- | :------: | :---- | :--------------------------------------- |
| `name`   | Name  | string |    Yes   | —     | Human-readable name of the episode type. |

## Governance Event

A timestamped occurrence in a governance process corresponding to a durable artifact.

### Properties

| Property              | Title                 | Type             | Required | Range                                         | Description                                             |
| :-------------------- | :-------------------- | :--------------- | :------: | :-------------------------------------------- | :------------------------------------------------------ |
| `artifact`            | Artifact              | string           |    No    | [GovernanceArtifact](#governance-artifact)    | The durable source document associated with this event. |
| `episode`             | Episode               | string           |    Yes   | [GovernanceEpisode](#governance-episode)      | The governance episode this event belongs to.           |
| `governanceEventType` | Governance Event Type | string           |    Yes   | [GovernanceEventType](#governance-event-type) | The governance function this event performs.            |
| `partners`            | Partners              | array of string  |    Yes   | [Partner](#partner)                           | The institutional actors involved in this event.        |
| `timestamp`           | Timestamp             | date \| datetime |    No    | —                                             | The date or datetime on which this event occurred.      |

## Governance Event Type

A classification of governance events by their function in the authorization process.

### Named Individuals

| IRI                                            | Name                   |
| :--------------------------------------------- | :--------------------- |
| `wpg:AgreementExecutedGovernanceEventType`     | Agreement Executed     |
| `wpg:ApprovalIssuedGovernanceEventType`        | Approval Issued        |
| `wpg:EscalationGovernanceEventType`            | Escalation             |
| `wpg:OutputDeliveredGovernanceEventType`       | Output Delivered       |
| `wpg:ProvisioningCompletedGovernanceEventType` | Provisioning Completed |
| `wpg:RequestSubmittedGovernanceEventType`      | Request Submitted      |
| `wpg:ReviewGovernanceEventType`                | Review                 |
| `wpg:WithdrawalGovernanceEventType`            | Withdrawal             |

### Properties

| Property | Title | Type   | Required | Range | Description                            |
| :------- | :---- | :----- | :------: | :---- | :------------------------------------- |
| `name`   | Name  | string |    Yes   | —     | Human-readable name of the event type. |

## Institutional Layer

The jurisdictional level at which a partner organization operates.

### Named Individuals

| IRI                              | Name     |
| :------------------------------- | :------- |
| `wpg:LocalInstitutionalLayer`    | Local    |
| `wpg:RegionalInstitutionalLayer` | Regional |
| `wpg:StateInstitutionalLayer`    | State    |

### Properties

| Property | Title | Type   | Required | Range | Description                                     |
| :------- | :---- | :----- | :------: | :---- | :---------------------------------------------- |
| `name`   | Name  | string |    Yes   | —     | Human-readable name of the institutional layer. |

## Partner

An institutional actor whose participation in an episode requires governance authorization.

### Properties

| Property  | Title                | Type            | Required | Range                                      | Description                                               |
| :-------- | :------------------- | :-------------- | :------: | :----------------------------------------- | :-------------------------------------------------------- |
| `domains` | Domains              | array of string |    Yes   | [Domain](#domain)                          | The regulatory and institutional domains of this partner. |
| `layers`  | Institutional Layers | array of string |    Yes   | [InstitutionalLayer](#institutional-layer) | The jurisdictional levels at which this partner operates. |
| `name`    | Name                 | string          |    Yes   | —                                          | Human-readable name of the partner organization.          |

## Project

A group of episodes sharing a common governance boundary design and data architecture.

### Properties

| Property                | Title                   | Type             | Required | Range                                    | Description                                                                                        |
| :---------------------- | :---------------------- | :--------------- | :------: | :--------------------------------------- | :------------------------------------------------------------------------------------------------- |
| `architecture`          | Architecture            | string           |    Yes   | [Architecture](#architecture)            | The data architecture governing how records are held and linked.                                   |
| `deliveryCouplingProxy` | Delivery Coupling Proxy | number           |    No    | —                                        | The coupling proxy of the delivery episode.                                                        |
| `deliveryEpisode`       | Delivery Episode        | string           |    No    | [GovernanceEpisode](#governance-episode) | The episode whose delivered value corresponds to the first data product.                           |
| `ecosystem`             | Ecosystem               | string           |    Yes   | [Ecosystem](#ecosystem)                  | The ecosystem this project belongs to.                                                             |
| `episodeCount`          | Episode Count           | integer          |    Yes   | —                                        | Number of governance episodes in this project.                                                     |
| `normalizedBurden`      | Normalized Burden       | number           |    No    | —                                        | Project time to delivered value per unit of delivery-episode coupling load.                        |
| `partnerCount`          | Partner Count           | integer          |    Yes   | —                                        | Number of institutional actors contributing data in the delivery episode.                          |
| `stallFraction`         | Stall Fraction          | number           |    Yes   | —                                        | Proportion of episodes in the project that stalled.                                                |
| `stewardPresence`       | Steward Presence        | boolean          |    Yes   | —                                        | Whether the project includes an authorized domain representative who mediates governance requests. |
| `t0`                    | Project Start           | date \| datetime |    No    | —                                        | The earliest episode initiation timestamp across all episodes in the project.                      |
| `tau2`                  | Time to Delivered Value | number           |    No    | —                                        | Calendar days from the earliest episode initiation to delivery of the first analytic output.       |
