## Ecosystem Type

`object` ([Ecosystem](ecosystem.md))

# Ecosystem Properties

| Property                                      | Type     | Required | Nullable       | Defined by                                                                                               |
| :-------------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------- |
| [@id](#id)                                    | `string` | Required | cannot be null | [Ecosystem](ecosystem-properties-id.md "Ecosystem#/properties/@id")                                      |
| [@type](#type)                                | `string` | Required | cannot be null | [Ecosystem](ecosystem-properties-type.md "Ecosystem#/properties/@type")                                  |
| [meanNormalizedBurden](#meannormalizedburden) | `number` | Optional | cannot be null | [Ecosystem](ecosystem-properties-mean-normalized-burden.md "Ecosystem#/properties/meanNormalizedBurden") |
| [meanTimeToValue](#meantimetovalue)           | `number` | Optional | cannot be null | [Ecosystem](ecosystem-properties-mean-time-to-value.md "Ecosystem#/properties/meanTimeToValue")          |
| [name](#name)                                 | `string` | Required | cannot be null | [Ecosystem](ecosystem-properties-name.md "Ecosystem#/properties/name")                                   |
| [stdTimeToValue](#stdtimetovalue)             | `number` | Optional | cannot be null | [Ecosystem](ecosystem-properties-std-dev-time-to-value.md "Ecosystem#/properties/stdTimeToValue")        |

## @id

An Internationalized Resource Identifier (IRI). May be a full IRI or a compact IRI (CURIE) resolved by the JSON-LD context.

`@id`

* is required

* Type: `string`

* cannot be null

* defined in: [Ecosystem](ecosystem-properties-id.md "Ecosystem#/properties/@id")

### @id Type

`string`

## @type



`@type`

* is required

* Type: `string`

* cannot be null

* defined in: [Ecosystem](ecosystem-properties-type.md "Ecosystem#/properties/@type")

### @type Type

`string`

### @type Constraints

**constant**: the value of this property must be equal to:

```json
"Ecosystem"
```

## meanNormalizedBurden

Average project normalized burden across projects in this ecosystem.

`meanNormalizedBurden`

* is optional

* Type: `number` ([Mean Normalized Burden](ecosystem-properties-mean-normalized-burden.md))

* cannot be null

* defined in: [Ecosystem](ecosystem-properties-mean-normalized-burden.md "Ecosystem#/properties/meanNormalizedBurden")

### meanNormalizedBurden Type

`number` ([Mean Normalized Burden](ecosystem-properties-mean-normalized-burden.md))

## meanTimeToValue

Average project time to delivered value across projects in this ecosystem.

`meanTimeToValue`

* is optional

* Type: `number` ([Mean Time to Value](ecosystem-properties-mean-time-to-value.md))

* cannot be null

* defined in: [Ecosystem](ecosystem-properties-mean-time-to-value.md "Ecosystem#/properties/meanTimeToValue")

### meanTimeToValue Type

`number` ([Mean Time to Value](ecosystem-properties-mean-time-to-value.md))

## name

Human-readable name of the ecosystem.

`name`

* is required

* Type: `string` ([Name](ecosystem-properties-name.md))

* cannot be null

* defined in: [Ecosystem](ecosystem-properties-name.md "Ecosystem#/properties/name")

### name Type

`string` ([Name](ecosystem-properties-name.md))

## stdTimeToValue

Standard deviation of project time to delivered value across projects in this ecosystem.

`stdTimeToValue`

* is optional

* Type: `number` ([Std. Dev. Time to Value](ecosystem-properties-std-dev-time-to-value.md))

* cannot be null

* defined in: [Ecosystem](ecosystem-properties-std-dev-time-to-value.md "Ecosystem#/properties/stdTimeToValue")

### stdTimeToValue Type

`number` ([Std. Dev. Time to Value](ecosystem-properties-std-dev-time-to-value.md))
