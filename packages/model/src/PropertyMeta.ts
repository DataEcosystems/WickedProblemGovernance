export interface PropertyMeta {
  readonly description?: string;
  readonly foreignKey?: {
    readonly column: string;
    readonly table: { readonly name: string };
  };
  readonly primaryKey?: boolean;
}
