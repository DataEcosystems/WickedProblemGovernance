# Architecture Schema

```txt
undefined
```

The data architecture governing how records are held and linked in an IDS project.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                  |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | Read only           | [Architecture.schema.json](Architecture.schema.json "open original schema") |

## Architecture Type

`object` ([Architecture](architecture.md))

# Architecture Properties

| Property       | Type     | Required | Nullable       | Defined by                                                                    |
| :------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------- |
| [@id](#id)     | `string` | Required | cannot be null | [Architecture](architecture-properties-id.md "undefined#/properties/@id")     |
| [@type](#type) | `string` | Required | cannot be null | [Architecture](architecture-properties-type.md "undefined#/properties/@type") |
| [name](#name)  | `string` | Required | cannot be null | [Architecture](architecture-properties-name.md "undefined#/properties/name")  |

## @id

An Internationalized Resource Identifier (IRI). May be a full IRI or a compact IRI (CURIE) resolved by the JSON-LD context.

`@id`

* is required

* Type: `string`

* cannot be null

* defined in: [Architecture](architecture-properties-id.md "undefined#/properties/@id")

### @id Type

`string`

## @type



`@type`

* is required

* Type: `string`

* cannot be null

* defined in: [Architecture](architecture-properties-type.md "undefined#/properties/@type")

### @type Type

`string`

### @type Constraints

**constant**: the value of this property must be equal to:

```json
"Architecture"
```

## name

Human-readable name of the architecture type.

`name`

* is required

* Type: `string` ([Name](architecture-properties-name.md))

* cannot be null

* defined in: [Architecture](architecture-properties-name.md "undefined#/properties/name")

### name Type

`string` ([Name](architecture-properties-name.md))
