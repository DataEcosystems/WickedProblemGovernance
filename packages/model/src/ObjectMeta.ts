export type ObjectMeta = {
  readonly description?: string;
  readonly table?: { readonly name: string };
  readonly unique?: readonly (readonly string[])[];
};
