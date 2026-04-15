## Governance Event Type Type

`object` ([Governance Event Type](governanceeventtype.md))

# Governance Event Type Properties

| Property       | Type     | Required | Nullable       | Defined by                                                                                              |
| :------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------ |
| [@id](#id)     | `string` | Required | cannot be null | [Governance Event Type](governanceeventtype-properties-id.md "GovernanceEventType#/properties/@id")     |
| [@type](#type) | `string` | Required | cannot be null | [Governance Event Type](governanceeventtype-properties-type.md "GovernanceEventType#/properties/@type") |
| [name](#name)  | `string` | Required | cannot be null | [Governance Event Type](governanceeventtype-properties-name.md "GovernanceEventType#/properties/name")  |

## @id

An Internationalized Resource Identifier (IRI). May be a full IRI or a compact IRI (CURIE) resolved by the JSON-LD context.

`@id`

* is required

* Type: `string`

* cannot be null

* defined in: [Governance Event Type](governanceeventtype-properties-id.md "GovernanceEventType#/properties/@id")

### @id Type

`string`

## @type



`@type`

* is required

* Type: `string`

* cannot be null

* defined in: [Governance Event Type](governanceeventtype-properties-type.md "GovernanceEventType#/properties/@type")

### @type Type

`string`

### @type Constraints

**constant**: the value of this property must be equal to:

```json
"GovernanceEventType"
```

## name

Human-readable name of the event type.

`name`

* is required

* Type: `string` ([Name](governanceeventtype-properties-name.md))

* cannot be null

* defined in: [Governance Event Type](governanceeventtype-properties-name.md "GovernanceEventType#/properties/name")

### name Type

`string` ([Name](governanceeventtype-properties-name.md))
