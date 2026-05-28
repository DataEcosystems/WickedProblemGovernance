import { namedIndividuals } from "./namedIndividuals.js";
import { WPG_CBOX } from "./namespaces.js";

export type NamedIndividualIri<TypeT extends keyof typeof namedIndividuals> =
  `${typeof WPG_CBOX}${keyof (typeof namedIndividuals)[TypeT] & string}${TypeT}`;
