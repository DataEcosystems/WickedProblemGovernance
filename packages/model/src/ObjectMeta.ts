export class ObjectMeta {
  readonly description: string;
  readonly id: string;
  readonly namedIndividuals?: readonly {
    readonly "@id": string;
    readonly description: string;
    readonly name: string;
  }[];
  readonly title: string;

  constructor({
    description,
    id,
    namedIndividuals,
    title,
  }: {
    readonly description: string;
    readonly id: string;
    readonly namedIndividuals?: readonly {
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
        ({ description, id: individualId, name }) => ({
          "@id": `wpg:${individualId}${id}`,
          description,
          name: name ?? individualId,
        }),
      );
    }
  }
}
