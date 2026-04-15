# Governance Artifact Type Schema

```txt
undefined
```

A classification of governance artifacts by their documentary form.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | Read only           | [GovernanceArtifactType.schema.json](../schema.json/GovernanceArtifactType.schema.json "open original schema") |

## Governance Artifact Type Type

`object` ([Governance Artifact Type](governanceartifacttype.md))

# Governance Artifact Type Properties

| Property       | Type     | Required | Nullable       | Defined by                                                                                          |
| :------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------- |
| [@id](#id)     | `string` | Required | cannot be null | [Governance Artifact Type](governanceartifacttype-properties-id.md "undefined#/properties/@id")     |
| [@type](#type) | `string` | Required | cannot be null | [Governance Artifact Type](governanceartifacttype-properties-type.md "undefined#/properties/@type") |
| [name](#name)  | `string` | Required | cannot be null | [Governance Artifact Type](governanceartifacttype-properties-name.md "undefined#/properties/name")  |

## @id

An Internationalized Resource Identifier (IRI). May be a full IRI or a compact IRI (CURIE) resolved by the JSON-LD context.

`@id`

* is required

* Type: `string`

* cannot be null

* defined in: [Governance Artifact Type](governanceartifacttype-properties-id.md "undefined#/properties/@id")

### @id Type

`string`

## @type



`@type`

* is required

* Type: `string`

* cannot be null

* defined in: [Governance Artifact Type](governanceartifacttype-properties-type.md "undefined#/properties/@type")

### @type Type

`string`

### @type Constraints

**constant**: the value of this property must be equal to:

```json
"GovernanceArtifactType"
```

## name

Human-readable name of the artifact type.

`name`

* is required

* Type: `string` ([Name](governanceartifacttype-properties-name.md))

* cannot be null

* defined in: [Governance Artifact Type](governanceartifacttype-properties-name.md "undefined#/properties/name")

### name Type

`string` ([Name](governanceartifacttype-properties-name.md))
