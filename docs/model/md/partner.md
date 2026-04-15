## Partner Type

`object` ([Partner](partner.md))

# Partner Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                         |
| :------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------- |
| [@id](#id)          | `string` | Required | cannot be null | [Partner](partner-properties-id.md "Partner#/properties/@id")                      |
| [@type](#type)      | `string` | Required | cannot be null | [Partner](partner-properties-type.md "Partner#/properties/@type")                  |
| [domains](#domains) | `array`  | Required | cannot be null | [Partner](partner-properties-domains.md "Partner#/properties/domains")             |
| [layers](#layers)   | `array`  | Required | cannot be null | [Partner](partner-properties-institutional-layers.md "Partner#/properties/layers") |
| [name](#name)       | `string` | Required | cannot be null | [Partner](partner-properties-name.md "Partner#/properties/name")                   |

## @id

An Internationalized Resource Identifier (IRI). May be a full IRI or a compact IRI (CURIE) resolved by the JSON-LD context.

`@id`

* is required

* Type: `string`

* cannot be null

* defined in: [Partner](partner-properties-id.md "Partner#/properties/@id")

### @id Type

`string`

## @type



`@type`

* is required

* Type: `string`

* cannot be null

* defined in: [Partner](partner-properties-type.md "Partner#/properties/@type")

### @type Type

`string`

### @type Constraints

**constant**: the value of this property must be equal to:

```json
"Partner"
```

## domains

The regulatory and institutional domains of this partner.

`domains`

* is required

* Type: `string[]`

* cannot be null

* defined in: [Partner](partner-properties-domains.md "Partner#/properties/domains")

* range: Domain

### domains Type

`string[]`

### domains Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## layers

The jurisdictional levels at which this partner operates.

`layers`

* is required

* Type: `string[]`

* cannot be null

* defined in: [Partner](partner-properties-institutional-layers.md "Partner#/properties/layers")

* range: InstitutionalLayer

### layers Type

`string[]`

### layers Access Restrictions

The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority

## name

Human-readable name of the partner organization.

`name`

* is required

* Type: `string` ([Name](partner-properties-name.md))

* cannot be null

* defined in: [Partner](partner-properties-name.md "Partner#/properties/name")

### name Type

`string` ([Name](partner-properties-name.md))
