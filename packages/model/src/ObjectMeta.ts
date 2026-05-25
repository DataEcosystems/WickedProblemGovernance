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
    readonly namedIndividuals?: readonly {
      readonly [key: string]: string | undefined;
      readonly description: string;
      readonly id: string;
      readonly name?: string;
    }[];
    readonly title?: string;
  }) {
    this["@type"] = type;
    this.description = description;
    this.title = title ?? type;

    if (namedIndividuals != null) {
      this.namedIndividuals = namedIndividuals.map(
        ({ description, id: individualId, name, ...rest }) => ({
          "@id": `${WPG_CBOX}${individualId}${type}`,
          description,
          name: name ?? individualId,
          ...rest,
        }),
      );
    }
  }
}
