# Wicked Problem Governance

An open domain model and tooling for measuring governance friction in Integrated Data Systems (IDSs). Built by [Asemio](https://asemio.com/) for the [Institute for Data Ecosystem Advancement (IDEA)](https://dataecosystems.org/).

This repository supports episode-level measurement framework described in Aaron Bean's paper *On the Redistribution of Governance Friction in Integrated Data Ecosystems* (under review). The framework makes governance friction observable from routine operational artifacts, so that stalls and bottlenecks can be diagnosed before they become project failures.

## Structure of this repository

- [`apps/cli`](./apps/cli) — `wpg` command line interface for generating documentation and transforming data
- [`packages/analysis`](./packages/analysis/): utilities for analyzing domain models
- [`packages/model`](./packages/model) — domain model, including documentation

## Development

### Prerequisites

* [Node.js 24 LTS](https://nodejs.org/)

### Install dependencies

    npm install

### Build

    npm run build

## License

Licensed under the [Apache License 2.0](./LICENSE).
