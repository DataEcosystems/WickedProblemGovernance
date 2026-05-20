# @wpg/model

Data model for the Wicked Problem Governance (WPG) interchange format. Defines resource types, their properties, and named individuals as [Zod 4](https://zod.dev) schemas with [JSON-LD](https://json-ld.org) semantics, following the [Linked Open Usable Data (LOUD)](https://linked.art/loud/) approach.

## Building/Installation

See the [root README](https://github.com/DataEcosystems/WickedProblemGovernance).

## Documentation

See the [generated documentation](./doc/schemas.md).

## Usage

### Validation

```typescript
import { Project } from "@wpg/model";

const result = Project.safeParse(data);
if (result.success) {
  console.log(result.data);
}
```

### Types

```typescript
import type { Project } from "@wpg/model";

const project: Project = {
  "@id": "https://example.com/project/1",
  "@type": "Project",
  name: "My Project",
  // ...
};
```

### The Resource union

```typescript
import { Resource } from "@wpg/model";

// Parses any valid resource type, discriminated by @type
const resource = Resource.parse(data);
```

### Schema metadata

```typescript
import { schemasByName, ObjectMeta, PropertyMeta } from "@wpg/model";

// Object metadata
const projectSchema = schemasByName.Project;
const objectMeta = projectSchema.meta() as ObjectMeta;
console.log(objectMeta);

// Property metadata
const propertyMeta = projectSchema.shape.architecture.meta() as PropertyMeta;
console.log(meta.range); // "Architecture"
```

### Extending schemas

Schemas are plain Zod objects (not wrapped in `.readonly()`), so they expose `.shape` for extension:

```typescript
import { z } from "zod";
import { Project } from "@wpg/model";

const ExtendedProject = z.object({
  ...Project.shape,
  customField: z.string(),
});
```

### Converting a resource to [RDF](https://www.w3.org/TR/rdf11-concepts/)

```typescript
import { context } from "@wpg/model";

import jsonld from "jsonld";
const nquads = await jsonld.toRDF(
  { "@context": context["@context"], ...resource },
  { format: "application/n-quads" },
);
```

## Encoding

WPG interchange resources are encoded a stream of JSON-LD resources in [JSONL](https://jsonlines.org).

Each resource has:

* `@id`: an IRI identifying the resource
* `@type`: a type name resolved by the JSON-LD context

The JSON-LD `@context` is not embedded in the data. It is supplied externally when the data is passed to a JSON-LD processor.
