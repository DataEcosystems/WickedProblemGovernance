## Project Type

`object` ([Project](project.md))

# Project Properties

| Property                                        | Type      | Required | Nullable       | Defined by                                                                                           |
| :---------------------------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------- |
| [@id](#id)                                      | `string`  | Required | cannot be null | [Project](project-properties-id.md "Project#/properties/@id")                                        |
| [@type](#type)                                  | `string`  | Required | cannot be null | [Project](project-properties-type.md "Project#/properties/@type")                                    |
| [architecture](#architecture)                   | `string`  | Required | cannot be null | [Project](project-properties-architecture.md "Project#/properties/architecture")                     |
| [deliveryCouplingProxy](#deliverycouplingproxy) | `number`  | Optional | cannot be null | [Project](project-properties-delivery-coupling-proxy.md "Project#/properties/deliveryCouplingProxy") |
| [deliveryEpisode](#deliveryepisode)             | `string`  | Optional | cannot be null | [Project](project-properties-delivery-episode.md "Project#/properties/deliveryEpisode")              |
| [ecosystem](#ecosystem)                         | `string`  | Required | cannot be null | [Project](project-properties-ecosystem.md "Project#/properties/ecosystem")                           |
| [episodeCount](#episodecount)                   | `integer` | Required | cannot be null | [Project](project-properties-episode-count.md "Project#/properties/episodeCount")                    |
| [normalizedBurden](#normalizedburden)           | `number`  | Optional | cannot be null | [Project](project-properties-normalized-burden.md "Project#/properties/normalizedBurden")            |
| [partnerCount](#partnercount)                   | `integer` | Required | cannot be null | [Project](project-properties-partner-count.md "Project#/properties/partnerCount")                    |
| [stallFraction](#stallfraction)                 | `number`  | Required | cannot be null | [Project](project-properties-stall-fraction.md "Project#/properties/stallFraction")                  |
| [stewardPresence](#stewardpresence)             | `boolean` | Required | cannot be null | [Project](project-properties-steward-presence.md "Project#/properties/stewardPresence")              |
| [t0](#t0)                                       | Merged    | Optional | cannot be null | [Project](project-properties-project-start.md "Project#/properties/t0")                              |
| [tau2](#tau2)                                   | `number`  | Optional | cannot be null | [Project](project-properties-time-to-delivered-value.md "Project#/properties/tau2")                  |

## @id

An Internationalized Resource Identifier (IRI). May be a full IRI or a compact IRI (CURIE) resolved by the JSON-LD context.

`@id`

* is required

* Type: `string`

* cannot be null

* defined in: [Project](project-properties-id.md "Project#/properties/@id")

### @id Type

`string`

## @type



`@type`

* is required

* Type: `string`

* cannot be null

* defined in: [Project](project-properties-type.md "Project#/properties/@type")

### @type Type

`string`

### @type Constraints

**constant**: the value of this property must be equal to:

```json
"Project"
```

## architecture

The data architecture governing how records are held and linked.

`architecture`

* is required

* Type: `string` ([Architecture](project-properties-architecture.md))

* cannot be null

* defined in: [Project](project-properties-architecture.md "Project#/properties/architecture")

* range: Architecture

### architecture Type

`string` ([Architecture](project-properties-architecture.md))

## deliveryCouplingProxy

The coupling proxy of the delivery episode.

`deliveryCouplingProxy`

* is optional

* Type: `number` ([Delivery Coupling Proxy](project-properties-delivery-coupling-proxy.md))

* cannot be null

* defined in: [Project](project-properties-delivery-coupling-proxy.md "Project#/properties/deliveryCouplingProxy")

### deliveryCouplingProxy Type

`number` ([Delivery Coupling Proxy](project-properties-delivery-coupling-proxy.md))

## deliveryEpisode

The episode whose delivered value corresponds to the first data product.

`deliveryEpisode`

* is optional

* Type: `string` ([Delivery Episode](project-properties-delivery-episode.md))

* cannot be null

* defined in: [Project](project-properties-delivery-episode.md "Project#/properties/deliveryEpisode")

* range: GovernanceEpisode

### deliveryEpisode Type

`string` ([Delivery Episode](project-properties-delivery-episode.md))

## ecosystem

The ecosystem this project belongs to.

`ecosystem`

* is required

* Type: `string` ([Ecosystem](project-properties-ecosystem.md))

* cannot be null

* defined in: [Project](project-properties-ecosystem.md "Project#/properties/ecosystem")

* range: Ecosystem

### ecosystem Type

`string` ([Ecosystem](project-properties-ecosystem.md))

## episodeCount

Number of governance episodes in this project.

`episodeCount`

* is required

* Type: `integer` ([Episode Count](project-properties-episode-count.md))

* cannot be null

* defined in: [Project](project-properties-episode-count.md "Project#/properties/episodeCount")

### episodeCount Type

`integer` ([Episode Count](project-properties-episode-count.md))

### episodeCount Constraints

**maximum**: the value of this number must smaller than or equal to: `9007199254740991`

**minimum**: the value of this number must greater than or equal to: `-9007199254740991`

## normalizedBurden

Project time to delivered value per unit of delivery-episode coupling load.

`normalizedBurden`

* is optional

* Type: `number` ([Normalized Burden](project-properties-normalized-burden.md))

* cannot be null

* defined in: [Project](project-properties-normalized-burden.md "Project#/properties/normalizedBurden")

### normalizedBurden Type

`number` ([Normalized Burden](project-properties-normalized-burden.md))

## partnerCount

Number of institutional actors contributing data in the delivery episode.

`partnerCount`

* is required

* Type: `integer` ([Partner Count](project-properties-partner-count.md))

* cannot be null

* defined in: [Project](project-properties-partner-count.md "Project#/properties/partnerCount")

### partnerCount Type

`integer` ([Partner Count](project-properties-partner-count.md))

### partnerCount Constraints

**maximum**: the value of this number must smaller than or equal to: `9007199254740991`

**minimum**: the value of this number must greater than or equal to: `-9007199254740991`

## stallFraction

Proportion of episodes in the project that stalled.

`stallFraction`

* is required

* Type: `number` ([Stall Fraction](project-properties-stall-fraction.md))

* cannot be null

* defined in: [Project](project-properties-stall-fraction.md "Project#/properties/stallFraction")

### stallFraction Type

`number` ([Stall Fraction](project-properties-stall-fraction.md))

## stewardPresence

Whether the project includes an authorized domain representative who mediates governance requests.

`stewardPresence`

* is required

* Type: `boolean` ([Steward Presence](project-properties-steward-presence.md))

* cannot be null

* defined in: [Project](project-properties-steward-presence.md "Project#/properties/stewardPresence")

### stewardPresence Type

`boolean` ([Steward Presence](project-properties-steward-presence.md))

## t0

The earliest episode initiation timestamp across all episodes in the project.

`t0`

* is optional

* Type: merged type ([Project Start](project-properties-project-start.md))

* cannot be null

* defined in: [Project](project-properties-project-start.md "Project#/properties/t0")

### t0 Type

merged type ([Project Start](project-properties-project-start.md))

any of

* [Untitled string in Project](project-properties-project-start-anyof-0.md "check type definition")

* [Untitled string in Project](project-properties-project-start-anyof-1.md "check type definition")

## tau2

Calendar days from the earliest episode initiation to delivery of the first analytic output.

`tau2`

* is optional

* Type: `number` ([Time to Delivered Value](project-properties-time-to-delivered-value.md))

* cannot be null

* defined in: [Project](project-properties-time-to-delivered-value.md "Project#/properties/tau2")

### tau2 Type

`number` ([Time to Delivered Value](project-properties-time-to-delivered-value.md))
