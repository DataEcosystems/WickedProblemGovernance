export type ObjectMeta = {
  readonly description?: string;
  readonly id: string;
  readonly namedIndividuals?: readonly Record<string, unknown>[];
};
