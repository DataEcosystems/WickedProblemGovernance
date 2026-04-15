## Governance Event Type

`object` ([Governance Event](governanceevent.md))

# Governance Event Properties

| Property                                    | Type     | Required | Nullable       | Defined by                                                                                                          |
| :------------------------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------ |
| [@id](#id)                                  | `string` | Required | cannot be null | [Governance Event](governanceevent-properties-id.md "undefined#/properties/@id")                                    |
| [@type](#type)                              | `string` | Required | cannot be null | [Governance Event](governanceevent-properties-type.md "undefined#/properties/@type")                                |
| [artifact](#artifact)                       | `string` | Optional | cannot be null | [Governance Event](governanceevent-properties-artifact.md "undefined#/properties/artifact")                         |
| [episode](#episode)                         | `string` | Required | cannot be null | [Governance Event](governanceevent-properties-episode.md "undefined#/properties/episode")                           |
| [governanceEventType](#governanceeventtype) | `string` | Required | cannot be null | [Governance Event](governanceevent-properties-governance-event-type.md "undefined#/properties/governanceEventType") |
| [partners](#partners)                       | `array`  | Required | cannot be null | [Governance Event](governanceevent-properties-partners.md "undefined#/properties/partners")                         |
| [timestamp](#timestamp)                     | Merged   | Optional | cannot be null | [Governance Event](governanceevent-properties-timestamp.md "undefined#/properties/timestamp")                       |

## @id

An Internationalized Resource Identifier (IRI). May be a full IRI or a compact IRI (CURIE) resolved by the JSON-LD context.

`@id`

* is required

* Type: `string`

* cannot be null

* defined in: [Governance Event](governanceevent-properties-id.md "undefined#/properties/@id")

### @id Type

`string`

## @type



`@type`

* is required

* Type: `string`

* cannot be null

* defined in: [Governance Event](governanceevent-properties-type.md "undefined#/properties/@type")

### @type Type

`string`

### @type Constraints

**constant**: the value of this property must be equal to:

```json
"GovernanceEvent"
```

## artifact

The durable source document associated with this event.

`artifact`

* is optional

* Type: `string` ([Artifact](governanceevent-properties-artifact.md))

* cannot be null

* defined in: [Governance Event](governanceevent-properties-artifact.md "undefined#/properties/artifact")

* range: GovernanceArtifact

### artifact Type

`string` ([Artifact](governanceevent-properties-artifact.md))

## episode

The governance episode this event belongs to.

`episode`

* is required

* Type: `string` ([Episode](governanceevent-properties-episode.md))

* cannot be null

* defined in: [Governance Event](governanceevent-properties-episode.md "undefined#/properties/episode")

* range: GovernanceEpisode

### episode Type

`string` ([Episode](governanceevent-properties-episode.md))

## governanceEventType

The governance function this event performs.

`governanceEventType`

* is required

* Type: `string` ([Governance Event Type](governanceevent-properties-governance-event-type.md))

* cannot be null

* defined in: [Governance Event](governanceevent-properties-governance-event-type.md "undefined#/properties/governanceEventType")

* range: GovernanceEventType

### governanceEventType Type

`string` ([Governance Event Type](governanceevent-properties-governance-event-type.md))

## partners

The institutional actors involved in this event.

`partners`

* is required

* Type: `string[]`

* cannot be null

* defined in: [Governance Event](governanceevent-properties-partners.md "undefined#/properties/partners")

* range: Partner

### partners Type

`string[]`

### partners Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## timestamp

The date or datetime on which this event occurred.

`timestamp`

* is optional

* Type: merged type ([Timestamp](governanceevent-properties-timestamp.md))

* cannot be null

* defined in: [Governance Event](governanceevent-properties-timestamp.md "undefined#/properties/timestamp")

### timestamp Type

merged type ([Timestamp](governanceevent-properties-timestamp.md))

any of

* [Untitled string in Governance Event](governanceevent-properties-timestamp-anyof-0.md "check type definition")

* [Untitled string in Governance Event](governanceevent-properties-timestamp-anyof-1.md "check type definition")
