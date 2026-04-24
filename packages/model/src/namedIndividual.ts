export function namedIndividual({
  description,
  id,
  name,
}: {
  readonly description: string;
  readonly id: string;
  readonly name: string;
}) {
  return {
    "@id": `wpg:${id}`,
    description,
    name,
  };
}
