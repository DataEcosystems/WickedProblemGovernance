import { z } from "zod";
import { WPG_CBOX } from "./namespaces.js";

export function namedIndividualIriEnum<
  NamedIndividualsT extends Record<string, unknown>,
  TypeT extends string,
>(namedIndividuals: NamedIndividualsT, type: TypeT) {
  type Prefixed =
    `${typeof WPG_CBOX}${keyof NamedIndividualsT & string}${TypeT}`;
  const keys = Object.keys(namedIndividuals).map(
    (k) => `${WPG_CBOX}${k}${type}` as Prefixed,
  ) as [Prefixed, ...Prefixed[]];
  return z.enum(keys);
}
