export type ObjectMeta = {
  readonly description?: string;
  readonly seedData?: readonly Record<string, unknown>[];
  readonly table?: { readonly name: string };
  readonly unique?: readonly (readonly string[])[];
};
