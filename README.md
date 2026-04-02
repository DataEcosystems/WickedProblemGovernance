# WickedProblemGovernance

## One-time setup

### Development environment

* [Node.js](https://nodejs.org/) 24 LTS

### Dependencies

    npm install

## Building

    npm run build

## Structure of this repository

* `packages/`
    * `model`: domain models such as `Event` and `Episode`, defined in TypeScript using [Zod 4](https://zod.dev) (which can be translated automatically and 1:1 to [JSON Schema](https://json-schema.org))
    * `tsconfig`: reusable `tsconfig.json` files 
    
## Plan

### Modeling

* Translate the domain models from the [IJPDS paper](./docs/2026-03-15%20IJPDS%20submission.pdf) into TypeScript and Zod
  * Phase 1: layers (e.g., Event) and their variables (e.g., timestamp)
  * Phase 2: formulas (e.g., how episode indicators are calculated from events)

### Codebook

* Generate a human-readable [codebook](https://en.wikipedia.org/wiki/Codebook#Social_sciences) as a PDF
  * Use the domain models in `model` as input to the generator rather than redefining the model in human-readable text

### Demo web application

* Develop a demo web application that:
    * Lets user enter data that conforms to the model.
        * Use the domain models in `model` to drive data entry screens ([model-driven engineering](https://en.wikipedia.org/wiki/Model-driven_engineering)) rather than redefining the model in the web application.
        * Future: let the user upload a document, give the document and the model to an LLM, and ask it to extract model-conformant data.
    * Uses the formulas defined in the model to produce reports from user-entered data.
