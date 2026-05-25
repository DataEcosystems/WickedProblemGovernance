import { Iri } from "./Iri.js";

export type NamedIndividual = {
  readonly "@id": Iri;
  readonly description: string;
  readonly name: string;
};
