import { z } from "zod";
import { namedIndividuals } from "./namedIndividuals.js";
import { WPG_CBOX } from "./namespaces.js";

export function namedIndividualIriEnum<
  TypeT extends keyof typeof namedIndividuals,
>(type: TypeT) {
  type Individual = keyof (typeof namedIndividuals)[TypeT];
  type Prefixed = `${typeof WPG_CBOX}${Individual & string}${TypeT}`;

  const keys = Object.keys(namedIndividuals[type]).map(
    (k) => `${WPG_CBOX}${k}${type}` as Prefixed,
  ) as [Prefixed, ...Prefixed[]];

  return z.enum(keys);
}
