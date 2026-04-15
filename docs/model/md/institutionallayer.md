## Institutional Layer Type

`object` ([Institutional Layer](institutionallayer.md))

# Institutional Layer Properties

| Property       | Type     | Required | Nullable       | Defined by                                                                                          |
| :------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------- |
| [@id](#id)     | `string` | Required | cannot be null | [Institutional Layer](institutionallayer-properties-id.md "InstitutionalLayer#/properties/@id")     |
| [@type](#type) | `string` | Required | cannot be null | [Institutional Layer](institutionallayer-properties-type.md "InstitutionalLayer#/properties/@type") |
| [name](#name)  | `string` | Required | cannot be null | [Institutional Layer](institutionallayer-properties-name.md "InstitutionalLayer#/properties/name")  |

## @id

An Internationalized Resource Identifier (IRI). May be a full IRI or a compact IRI (CURIE) resolved by the JSON-LD context.

`@id`

* is required

* Type: `string`

* cannot be null

* defined in: [Institutional Layer](institutionallayer-properties-id.md "InstitutionalLayer#/properties/@id")

### @id Type

`string`

## @type



`@type`

* is required

* Type: `string`

* cannot be null

* defined in: [Institutional Layer](institutionallayer-properties-type.md "InstitutionalLayer#/properties/@type")

### @type Type

`string`

### @type Constraints

**constant**: the value of this property must be equal to:

```json
"InstitutionalLayer"
```

## name

Human-readable name of the institutional layer.

`name`

* is required

* Type: `string` ([Name](institutionallayer-properties-name.md))

* cannot be null

* defined in: [Institutional Layer](institutionallayer-properties-name.md "InstitutionalLayer#/properties/name")

### name Type

`string` ([Name](institutionallayer-properties-name.md))
