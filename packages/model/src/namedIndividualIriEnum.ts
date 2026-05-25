import { z } from "zod";
import { WPG_CBOX } from "./namespaces.js";

export function namedIndividualIriEnum<
  NamedIndividualsT extends Record<string, unknown>,
>(namedIndividuals: NamedIndividualsT) {
  type Prefixed = `${typeof WPG_CBOX}${keyof NamedIndividualsT & string}`;
  const keys = Object.keys(namedIndividuals).map(
    (k) => `${WPG_CBOX}${k}` as Prefixed,
  ) as [Prefixed, ...Prefixed[]];
  return z.enum(keys);
}
