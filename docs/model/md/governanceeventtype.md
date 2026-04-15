# Governance Event Type Schema

```txt
undefined
```

A classification of governance events by their function in the authorization process.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | Read only           | [GovernanceEventType.schema.json](../schema.json/GovernanceEventType.schema.json "open original schema") |

## Governance Event Type Type

`object` ([Governance Event Type](governanceeventtype.md))

# Governance Event Type Properties

| Property       | Type     | Required | Nullable       | Defined by                                                                                    |
| :------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------- |
| [@id](#id)     | `string` | Required | cannot be null | [Governance Event Type](governanceeventtype-properties-id.md "undefined#/properties/@id")     |
| [@type](#type) | `string` | Required | cannot be null | [Governance Event Type](governanceeventtype-properties-type.md "undefined#/properties/@type") |
| [name](#name)  | `string` | Required | cannot be null | [Governance Event Type](governanceeventtype-properties-name.md "undefined#/properties/name")  |

## @id

An Internationalized Resource Identifier (IRI). May be a full IRI or a compact IRI (CURIE) resolved by the JSON-LD context.

`@id`

* is required

* Type: `string`

* cannot be null

* defined in: [Governance Event Type](governanceeventtype-properties-id.md "undefined#/properties/@id")

### @id Type

`string`

## @type



`@type`

* is required

* Type: `string`

* cannot be null

* defined in: [Governance Event Type](governanceeventtype-properties-type.md "undefined#/properties/@type")

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

* defined in: [Governance Event Type](governanceeventtype-properties-name.md "undefined#/properties/name")

### name Type

`string` ([Name](governanceeventtype-properties-name.md))
