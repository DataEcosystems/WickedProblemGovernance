# Institutional Layer Schema

```txt
undefined
```

The jurisdictional level at which a partner organization operates.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | Read only           | [InstitutionalLayer.schema.json](InstitutionalLayer.schema.json "open original schema") |

## Institutional Layer Type

`object` ([Institutional Layer](institutionallayer.md))

# Institutional Layer Properties

| Property       | Type     | Required | Nullable       | Defined by                                                                                 |
| :------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------- |
| [@id](#id)     | `string` | Required | cannot be null | [Institutional Layer](institutionallayer-properties-id.md "undefined#/properties/@id")     |
| [@type](#type) | `string` | Required | cannot be null | [Institutional Layer](institutionallayer-properties-type.md "undefined#/properties/@type") |
| [name](#name)  | `string` | Required | cannot be null | [Institutional Layer](institutionallayer-properties-name.md "undefined#/properties/name")  |

## @id

An Internationalized Resource Identifier (IRI). May be a full IRI or a compact IRI (CURIE) resolved by the JSON-LD context.

`@id`

* is required

* Type: `string`

* cannot be null

* defined in: [Institutional Layer](institutionallayer-properties-id.md "undefined#/properties/@id")

### @id Type

`string`

## @type



`@type`

* is required

* Type: `string`

* cannot be null

* defined in: [Institutional Layer](institutionallayer-properties-type.md "undefined#/properties/@type")

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

* defined in: [Institutional Layer](institutionallayer-properties-name.md "undefined#/properties/name")

### name Type

`string` ([Name](institutionallayer-properties-name.md))
