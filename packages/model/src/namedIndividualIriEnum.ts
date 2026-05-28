import { iriEnum } from "./iriEnum.js";
import { NamedIndividualIri } from "./NamedIndividualIri.js";
import { namedIndividuals } from "./namedIndividuals.js";
import { WPG_CBOX } from "./namespaces.js";

export function namedIndividualIriEnum<
  TypeT extends keyof typeof namedIndividuals,
>(type: TypeT) {
  const keys = Object.keys(namedIndividuals[type]).map(
    (k) => `${WPG_CBOX}${k}${type}` as NamedIndividualIri<TypeT>,
  ) as [NamedIndividualIri<TypeT>, ...NamedIndividualIri<TypeT>[]];
  return iriEnum(keys);
}
