# Governance Episode Schema

```txt
undefined
```

A bounded governance authorization attempt aggregating a sequence of events.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | Read only           | [GovernanceEpisode.schema.json](../schema.json/GovernanceEpisode.schema.json "open original schema") |

## Governance Episode Type

`object` ([Governance Episode](governanceepisode.md))

# Governance Episode Properties

| Property                                        | Type      | Required | Nullable       | Defined by                                                                                                                  |
| :---------------------------------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| [@id](#id)                                      | `string`  | Required | cannot be null | [Governance Episode](governanceepisode-properties-id.md "undefined#/properties/@id")                                        |
| [@type](#type)                                  | `string`  | Required | cannot be null | [Governance Episode](governanceepisode-properties-type.md "undefined#/properties/@type")                                    |
| [couplingProxy](#couplingproxy)                 | `number`  | Required | cannot be null | [Governance Episode](governanceepisode-properties-coupling-proxy.md "undefined#/properties/couplingProxy")                  |
| [domainHeterogeneity](#domainheterogeneity)     | `number`  | Required | cannot be null | [Governance Episode](governanceepisode-properties-domain-heterogeneity.md "undefined#/properties/domainHeterogeneity")      |
| [governanceEpisodeType](#governanceepisodetype) | `string`  | Required | cannot be null | [Governance Episode](governanceepisode-properties-governance-episode-type.md "undefined#/properties/governanceEpisodeType") |
| [layerHeterogeneity](#layerheterogeneity)       | `number`  | Required | cannot be null | [Governance Episode](governanceepisode-properties-layer-heterogeneity.md "undefined#/properties/layerHeterogeneity")        |
| [normalizedBurden](#normalizedburden)           | `number`  | Optional | cannot be null | [Governance Episode](governanceepisode-properties-normalized-burden.md "undefined#/properties/normalizedBurden")            |
| [partnerCount](#partnercount)                   | `integer` | Required | cannot be null | [Governance Episode](governanceepisode-properties-partner-count.md "undefined#/properties/partnerCount")                    |
| [project](#project)                             | `string`  | Required | cannot be null | [Governance Episode](governanceepisode-properties-project.md "undefined#/properties/project")                               |
| [stall](#stall)                                 | `boolean` | Required | cannot be null | [Governance Episode](governanceepisode-properties-stall.md "undefined#/properties/stall")                                   |
| [t0](#t0)                                       | Merged    | Optional | cannot be null | [Governance Episode](governanceepisode-properties-episode-start.md "undefined#/properties/t0")                              |
| [t1](#t1)                                       | Merged    | Optional | cannot be null | [Governance Episode](governanceepisode-properties-first-durable-authorization.md "undefined#/properties/t1")                |
| [t2](#t2)                                       | Merged    | Optional | cannot be null | [Governance Episode](governanceepisode-properties-first-delivered-value.md "undefined#/properties/t2")                      |
| [tau1](#tau1)                                   | `number`  | Optional | cannot be null | [Governance Episode](governanceepisode-properties-authorization-latency.md "undefined#/properties/tau1")                    |
| [tau2](#tau2)                                   | `number`  | Optional | cannot be null | [Governance Episode](governanceepisode-properties-time-to-delivered-value.md "undefined#/properties/tau2")                  |

## @id

An Internationalized Resource Identifier (IRI). May be a full IRI or a compact IRI (CURIE) resolved by the JSON-LD context.

`@id`

* is required

* Type: `string`

* cannot be null

* defined in: [Governance Episode](governanceepisode-properties-id.md "undefined#/properties/@id")

### @id Type

`string`

## @type



`@type`

* is required

* Type: `string`

* cannot be null

* defined in: [Governance Episode](governanceepisode-properties-type.md "undefined#/properties/@type")

### @type Type

`string`

### @type Constraints

**constant**: the value of this property must be equal to:

```json
"GovernanceEpisode"
```

## couplingProxy

Composite measure of scale and structural heterogeneity of governance coordination demands.

`couplingProxy`

* is required

* Type: `number` ([Coupling Proxy](governanceepisode-properties-coupling-proxy.md))

* cannot be null

* defined in: [Governance Episode](governanceepisode-properties-coupling-proxy.md "undefined#/properties/couplingProxy")

### couplingProxy Type

`number` ([Coupling Proxy](governanceepisode-properties-coupling-proxy.md))

## domainHeterogeneity

Simpson-style diversity index measuring how evenly partners are distributed across domains.

`domainHeterogeneity`

* is required

* Type: `number` ([Domain Heterogeneity](governanceepisode-properties-domain-heterogeneity.md))

* cannot be null

* defined in: [Governance Episode](governanceepisode-properties-domain-heterogeneity.md "undefined#/properties/domainHeterogeneity")

### domainHeterogeneity Type

`number` ([Domain Heterogeneity](governanceepisode-properties-domain-heterogeneity.md))

## governanceEpisodeType

The type of governance authorization attempt.

`governanceEpisodeType`

* is required

* Type: `string` ([Governance Episode Type](governanceepisode-properties-governance-episode-type.md))

* cannot be null

* defined in: [Governance Episode](governanceepisode-properties-governance-episode-type.md "undefined#/properties/governanceEpisodeType")

### governanceEpisodeType Type

`string` ([Governance Episode Type](governanceepisode-properties-governance-episode-type.md))

## layerHeterogeneity

Simpson-style diversity index measuring how evenly partners are distributed across institutional layers.

`layerHeterogeneity`

* is required

* Type: `number` ([Layer Heterogeneity](governanceepisode-properties-layer-heterogeneity.md))

* cannot be null

* defined in: [Governance Episode](governanceepisode-properties-layer-heterogeneity.md "undefined#/properties/layerHeterogeneity")

### layerHeterogeneity Type

`number` ([Layer Heterogeneity](governanceepisode-properties-layer-heterogeneity.md))

## normalizedBurden

Time to delivered value per unit of coupling load.

`normalizedBurden`

* is optional

* Type: `number` ([Normalized Burden](governanceepisode-properties-normalized-burden.md))

* cannot be null

* defined in: [Governance Episode](governanceepisode-properties-normalized-burden.md "undefined#/properties/normalizedBurden")

### normalizedBurden Type

`number` ([Normalized Burden](governanceepisode-properties-normalized-burden.md))

## partnerCount

Number of governance-relevant institutional actors in this episode.

`partnerCount`

* is required

* Type: `integer` ([Partner Count](governanceepisode-properties-partner-count.md))

* cannot be null

* defined in: [Governance Episode](governanceepisode-properties-partner-count.md "undefined#/properties/partnerCount")

### partnerCount Type

`integer` ([Partner Count](governanceepisode-properties-partner-count.md))

### partnerCount Constraints

**maximum**: the value of this number must smaller than or equal to: `9007199254740991`

**minimum**: the value of this number must greater than or equal to: `-9007199254740991`

## project

The project this episode belongs to.

`project`

* is required

* Type: `string` ([Project](governanceepisode-properties-project.md))

* cannot be null

* defined in: [Governance Episode](governanceepisode-properties-project.md "undefined#/properties/project")

### project Type

`string` ([Project](governanceepisode-properties-project.md))

## stall

Whether the episode shows sustained governance engagement but no qualifying durable authorization.

`stall`

* is required

* Type: `boolean` ([Stall](governanceepisode-properties-stall.md))

* cannot be null

* defined in: [Governance Episode](governanceepisode-properties-stall.md "undefined#/properties/stall")

### stall Type

`boolean` ([Stall](governanceepisode-properties-stall.md))

## t0

Timestamp of earliest event indicating entry into an approval workflow.

`t0`

* is optional

* Type: merged type ([Episode Start](governanceepisode-properties-episode-start.md))

* cannot be null

* defined in: [Governance Episode](governanceepisode-properties-episode-start.md "undefined#/properties/t0")

### t0 Type

merged type ([Episode Start](governanceepisode-properties-episode-start.md))

any of

* [Untitled string in Governance Episode](governanceepisode-properties-episode-start-anyof-0.md "check type definition")

* [Untitled string in Governance Episode](governanceepisode-properties-episode-start-anyof-1.md "check type definition")

## t1

Timestamp of earliest qualifying authorization event for core scope.

`t1`

* is optional

* Type: merged type ([First Durable Authorization](governanceepisode-properties-first-durable-authorization.md))

* cannot be null

* defined in: [Governance Episode](governanceepisode-properties-first-durable-authorization.md "undefined#/properties/t1")

### t1 Type

merged type ([First Durable Authorization](governanceepisode-properties-first-durable-authorization.md))

any of

* [Untitled string in Governance Episode](governanceepisode-properties-first-durable-authorization-anyof-0.md "check type definition")

* [Untitled string in Governance Episode](governanceepisode-properties-first-durable-authorization-anyof-1.md "check type definition")

## t2

Timestamp of earliest analytic output answering a stakeholder question.

`t2`

* is optional

* Type: merged type ([First Delivered Value](governanceepisode-properties-first-delivered-value.md))

* cannot be null

* defined in: [Governance Episode](governanceepisode-properties-first-delivered-value.md "undefined#/properties/t2")

### t2 Type

merged type ([First Delivered Value](governanceepisode-properties-first-delivered-value.md))

any of

* [Untitled string in Governance Episode](governanceepisode-properties-first-delivered-value-anyof-0.md "check type definition")

* [Untitled string in Governance Episode](governanceepisode-properties-first-delivered-value-anyof-1.md "check type definition")

## tau1

Calendar days from episode initiation to first durable authorization.

`tau1`

* is optional

* Type: `number` ([Authorization Latency](governanceepisode-properties-authorization-latency.md))

* cannot be null

* defined in: [Governance Episode](governanceepisode-properties-authorization-latency.md "undefined#/properties/tau1")

### tau1 Type

`number` ([Authorization Latency](governanceepisode-properties-authorization-latency.md))

## tau2

Calendar days from episode initiation to first delivered analytic output.

`tau2`

* is optional

* Type: `number` ([Time to Delivered Value](governanceepisode-properties-time-to-delivered-value.md))

* cannot be null

* defined in: [Governance Episode](governanceepisode-properties-time-to-delivered-value.md "undefined#/properties/tau2")

### tau2 Type

`number` ([Time to Delivered Value](governanceepisode-properties-time-to-delivered-value.md))
