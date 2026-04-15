# Governance Artifact Schema

```txt
undefined
```

A durable source document from which a governance event was reconstructed.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | Read only           | [GovernanceArtifact.schema.json](GovernanceArtifact.schema.json "open original schema") |

## Governance Artifact Type

`object` ([Governance Artifact](governanceartifact.md))

# Governance Artifact Properties

| Property                                          | Type     | Required | Nullable       | Defined by                                                                                                                      |
| :------------------------------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| [@id](#id)                                        | `string` | Required | cannot be null | [Governance Artifact](governanceartifact-properties-id.md "undefined#/properties/@id")                                          |
| [@type](#type)                                    | `string` | Required | cannot be null | [Governance Artifact](governanceartifact-properties-type.md "undefined#/properties/@type")                                      |
| [governanceArtifactType](#governanceartifacttype) | `string` | Required | cannot be null | [Governance Artifact](governanceartifact-properties-governance-artifact-type.md "undefined#/properties/governanceArtifactType") |

## @id

An Internationalized Resource Identifier (IRI). May be a full IRI or a compact IRI (CURIE) resolved by the JSON-LD context.

`@id`

* is required

* Type: `string`

* cannot be null

* defined in: [Governance Artifact](governanceartifact-properties-id.md "undefined#/properties/@id")

### @id Type

`string`

## @type



`@type`

* is required

* Type: `string`

* cannot be null

* defined in: [Governance Artifact](governanceartifact-properties-type.md "undefined#/properties/@type")

### @type Type

`string`

### @type Constraints

**constant**: the value of this property must be equal to:

```json
"GovernanceArtifact"
```

## governanceArtifactType

The type of durable source document from which an event was reconstructed.

`governanceArtifactType`

* is required

* Type: `string` ([Governance Artifact Type](governanceartifact-properties-governance-artifact-type.md))

* cannot be null

* defined in: [Governance Artifact](governanceartifact-properties-governance-artifact-type.md "undefined#/properties/governanceArtifactType")

### governanceArtifactType Type

`string` ([Governance Artifact Type](governanceartifact-properties-governance-artifact-type.md))
