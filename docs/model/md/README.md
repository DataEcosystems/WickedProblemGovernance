# README

## Top-level Schemas

* [Architecture](./architecture.md "The data architecture governing how records are held and linked in an IDS project") – `Architecture`

* [Domain](./domain.md "The regulatory and institutional domain of a partner organization") – `Domain`

* [Ecosystem](./ecosystem.md "All projects within a shared geographic and institutional context") – `Ecosystem`

* [Governance Artifact](./governanceartifact.md "A durable source document from which a governance event was reconstructed") – `GovernanceArtifact`

* [Governance Artifact Type](./governanceartifacttype.md "A classification of governance artifacts by their documentary form") – `GovernanceArtifactType`

* [Governance Episode](./governanceepisode.md "A bounded governance authorization attempt aggregating a sequence of events") – `GovernanceEpisode`

* [Governance Event](./governanceevent.md "A timestamped occurrence in a governance process corresponding to a durable artifact") – `GovernanceEvent`

* [Governance Event Type](./governanceeventtype.md "A classification of governance events by their function in the authorization process") – `GovernanceEventType`

* [Institutional Layer](./institutionallayer.md "The jurisdictional level at which a partner organization operates") – `InstitutionalLayer`

* [Partner](./partner.md "An institutional actor whose participation in an episode requires governance authorization") – `Partner`

* [Project](./project.md "A group of episodes sharing a common governance boundary design and data architecture") – `Project`

## Other Schemas

### Objects



### Arrays

* [Domains](./partner-properties-domains.md "The regulatory and institutional domains of this partner") – `Partner#/properties/domains`

* [Institutional Layers](./partner-properties-institutional-layers.md "The jurisdictional levels at which this partner operates") – `Partner#/properties/layers`

* [Partners](./governanceevent-properties-partners.md "The institutional actors involved in this event") – `GovernanceEvent#/properties/partners`

## Version Note

The schemas linked above follow the JSON Schema Spec version: `http://json-schema.org/draft-07/schema#`
