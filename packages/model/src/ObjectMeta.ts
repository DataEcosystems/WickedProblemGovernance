import { capitalCase } from "change-case";
import { NamedIndividual } from "./NamedIndividual.js";
import { WPG_CBOX } from "./namespaces.js";
import { ResourceType } from "./ResourceType.js";

export class ObjectMeta {
  readonly "@type": ResourceType;
  readonly description: string;
  readonly name: string;
  readonly namedIndividuals?: readonly NamedIndividual[];
  [key: string]: unknown;

  constructor({
    "@type": type,
    description,
    name,
    namedIndividuals,
  }: {
    readonly "@type": ResourceType;
    readonly description: string;
    readonly name?: string;
    readonly namedIndividuals?: Record<
      string,
      {
        readonly description: string;
        readonly name?: string;
      }
    >;
  }) {
    this["@type"] = type;
    this.description = description;
    this.name = name ?? capitalCase(type);

    if (namedIndividuals != null) {
      this.namedIndividuals = Object.entries(namedIndividuals).map(
        ([id, { description, name }]) => ({
          "@id": `${WPG_CBOX}${id}${type}`,
          description,
          name: name ?? capitalCase(id),
        }),
      );
    }
  }
}
