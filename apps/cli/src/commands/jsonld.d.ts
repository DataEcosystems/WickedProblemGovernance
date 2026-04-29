declare module "jsonld" {
  export function toRDF(
    doc: Record<string, unknown>,
    options: { readonly format: "application/n-quads" },
  ): Promise<string>;
}
