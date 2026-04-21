# Wicked Problem Governance

An open domain model and tooling for measuring governance friction in Integrated Data Systems (IDSs). Built by [Asemio](https://asemio.com/) for the [Institute for Data Ecosystem Advancement (IDEA)](https://dataecosystems.org/).

Wicked problems — chronic absenteeism, workforce gaps, poverty, substance abuse, public health — cannot be addressed by any single agency's data. They require blended data across domains, jurisdictions, and institutional layers. The binding constraint on IDS performance is rarely the technology; it's *governance adequacy*: whether authorization boundaries can sustain legitimate, structurally-appropriate decisions as partnerships expand.

This repository implements the episode-level measurement framework described in Aaron Bean's paper [*On the Redistribution of Governance Friction in Integrated Data Ecosystems*](./docs/2026-03-15%20IJPDS%20submission.pdf) (IJPDS, 2026). The model makes governance friction observable from routine operational artifacts, so that stalls and bottlenecks can be diagnosed before they become project failures.

## What's in here

The domain model is organized in four layers, matching the paper:

- **Event** — an atomic, timestamped authorization action tied to a durable artifact.
- **Episode** — a bounded authorization attempt, from entry into an approval workflow to a durable outcome (or stall).
- **Project** — an IDS implementation with a defined architecture (custodial or federated) and governance configuration.
- **Ecosystem** — a cross-project aggregation within a shared institutional context.

Supporting vocabularies cover institutional layers (local, regional, state), domains (education, health, human services, justice), partner roles, artifact types, and event types.

Models are defined in TypeScript using [Zod 4](https://zod.dev) and translate 1:1 to [JSON Schema](https://json-schema.org). The published codebook and JSON Schema are generated from the same source.

## Layout

- [`packages/model`](./packages/model) — domain models (Zod / TypeScript), JSON-LD context, and schema registry.
- [`apps/cli`](./apps/cli) — `wpg` CLI for generating JSON Schema, generating the codebook in Markdown, and transforming IJPDS-format datasets into conforming JSON.
- [`docs/`](./docs) — the IJPDS paper and generated schema reference.
- [`data/ijpds`](./data/ijpds) — sample datasets accompanying the paper.

## Development

Requires [Node.js 24 LTS](https://nodejs.org/).

    npm install
    npm run build
    npm run typecheck

### CLI

From `apps/cli` after building:

    wpg generate json-schema               # emit combined JSON Schema to stdout
    wpg generate json-schemas -o <dir>     # emit per-type JSON Schemas to a directory
    wpg generate schema-markdown           # emit a human-readable codebook
    wpg transform ijpds-dataset <file>     # convert an IJPDS dataset into conforming JSON

## Status

The model tracks the paper in phases:

1. Layers and their variables (Event, Episode, Project, Ecosystem) — in progress.
2. Formulas — how episode indicators (coupling proxy, heterogeneity indices, time-to-value) are computed from events.
3. Coding instructions used to populate the codebook.

## License and citation

Licensed under the [Apache License 2.0](./LICENSE).

If you use this framework in research, please cite Bean, A. (2026). *On the Redistribution of Governance Friction in Integrated Data Ecosystems.* International Journal of Population Data Science.
