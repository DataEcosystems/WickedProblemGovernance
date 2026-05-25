import { capitalCase } from "change-case";
import { NamedIndividual } from "./NamedIndividual.js";
import { WPG_CBOX } from "./namespaces.js";
import { ResourceType } from "./ResourceType.js";

export class ObjectMeta {
  readonly "@type": ResourceType;
  readonly description: string;
  readonly namedIndividuals?: readonly NamedIndividual[];
  readonly title: string;
  [key: string]: unknown;

  constructor({
    "@type": type,
    description,
    namedIndividuals,
    title,
  }: {
    readonly "@type": ResourceType;
    readonly description: string;
    readonly namedIndividuals?: Record<
      string,
      {
        readonly description: string;
        readonly name?: string;
      }
    >;
    readonly title?: string;
  }) {
    this["@type"] = type;
    this.description = description;
    this.title = title ?? capitalCase(type);

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
