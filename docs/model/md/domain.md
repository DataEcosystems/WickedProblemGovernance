# Domain Schema

```txt
undefined
```

The regulatory and institutional domain of a partner organization.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | Read only           | [Domain.schema.json](Domain.schema.json "open original schema") |

## Domain Type

`object` ([Domain](domain.md))

# Domain Properties

| Property       | Type     | Required | Nullable       | Defined by                                                        |
| :------------- | :------- | :------- | :------------- | :---------------------------------------------------------------- |
| [@id](#id)     | `string` | Required | cannot be null | [Domain](domain-properties-id.md "undefined#/properties/@id")     |
| [@type](#type) | `string` | Required | cannot be null | [Domain](domain-properties-type.md "undefined#/properties/@type") |
| [name](#name)  | `string` | Required | cannot be null | [Domain](domain-properties-name.md "undefined#/properties/name")  |

## @id

An Internationalized Resource Identifier (IRI). May be a full IRI or a compact IRI (CURIE) resolved by the JSON-LD context.

`@id`

* is required

* Type: `string`

* cannot be null

* defined in: [Domain](domain-properties-id.md "undefined#/properties/@id")

### @id Type

`string`

## @type



`@type`

* is required

* Type: `string`

* cannot be null

* defined in: [Domain](domain-properties-type.md "undefined#/properties/@type")

### @type Type

`string`

### @type Constraints

**constant**: the value of this property must be equal to:

```json
"Domain"
```

## name

Human-readable name of the domain.

`name`

* is required

* Type: `string` ([Name](domain-properties-name.md))

* cannot be null

* defined in: [Domain](domain-properties-name.md "undefined#/properties/name")

### name Type

`string` ([Name](domain-properties-name.md))
