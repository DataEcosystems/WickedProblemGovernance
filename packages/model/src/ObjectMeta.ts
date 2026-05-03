export class ObjectMeta {
  readonly description: string;
  readonly id: string;
  readonly namedIndividuals?: readonly {
    readonly [key: string]: string | undefined;
    readonly "@id": string;
    readonly description: string;
    readonly name: string;
  }[];
  readonly title: string;
  [key: string]: unknown;

  constructor({
    description,
    id,
    namedIndividuals,
    title,
  }: {
    readonly description: string;
    readonly id: string;
    readonly namedIndividuals?: readonly {
      readonly [key: string]: string | undefined;
      readonly description: string;
      readonly id: string;
      readonly name?: string;
    }[];
    readonly title?: string;
  }) {
    this.description = description;
    this.id = id;
    this.title = title ?? id;

    if (namedIndividuals != null) {
      this.namedIndividuals = namedIndividuals.map(
        ({ description, id: individualId, name, ...rest }) => ({
          "@id": `wpg:${individualId}${id}`,
          description,
          name: name ?? individualId,
          ...rest,
        }),
      );
    }
  }
}
