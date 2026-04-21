import type { ObjectMeta, PropertyMeta } from "@wpg/model";
import { schemas } from "@wpg/model";
import type {
  Heading,
  InlineCode,
  Link,
  Paragraph,
  PhrasingContent,
  Root,
  RootContent,
  Table,
  TableCell,
  TableRow,
  Text,
  Yaml,
} from "mdast";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkStringify from "remark-stringify";
import { unified } from "unified";
import { z } from "zod/v4";

// =============================================================================
// MDAST HELPERS
// =============================================================================

function text(value: string): Text {
  return { type: "text", value };
}

function inlineCode(value: string): InlineCode {
  return { type: "inlineCode", value };
}

function link(url: string, children: PhrasingContent[]): Link {
  return { type: "link", url, children };
}

function paragraph(children: PhrasingContent[]): Paragraph {
  return { type: "paragraph", children };
}

function heading(depth: 1 | 2 | 3, children: PhrasingContent[]): Heading {
  return { type: "heading", depth, children };
}

function cell(children: PhrasingContent[]): TableCell {
  return { type: "tableCell", children };
}

function row(cells: TableCell[]): TableRow {
  return { type: "tableRow", children: cells };
}

function table(
  align: ("left" | "center" | "right" | null)[],
  rows: TableRow[],
): Table {
  return { type: "table", align, children: rows };
}

function yaml(value: string): Yaml {
  return { type: "yaml", value };
}

// =============================================================================
// SCHEMA INTROSPECTION
// =============================================================================

interface PropertyInfo {
  readonly description: string;
  readonly name: string;
  readonly optional: boolean;
  readonly range?: string;
  readonly title: string;
  readonly type: string;
}

function resolveType(schema: z.ZodType): { type: string; optional: boolean } {
  const def = (schema as any)._zod?.def;
  if (!def) {
    return { optional: false, type: "unknown" };
  }

  if (def.type === "optional") {
    const inner = resolveType(def.innerType);
    return { optional: true, type: inner.type };
  }

  if (def.type === "readonly") {
    return resolveType(def.innerType);
  }

  if (def.type === "array") {
    const inner = resolveType(def.element);
    return { optional: false, type: `array of ${inner.type}` };
  }

  if (def.type === "union") {
    const options = (def.options as z.ZodType[]).map(
      (o) => resolveType(o).type,
    );
    return { optional: false, type: options.join(" | ") };
  }

  if (def.type === "literal") {
    const val = def.values?.[0] ?? def.value;
    return { optional: false, type: `"${val}"` };
  }

  if (def.type === "number") {
    const isInt = def.checks?.some((c: any) => c?.def?.format === "safeint");
    return { optional: false, type: isInt ? "integer" : "number" };
  }

  if (def.type === "string") {
    if (def.format === "date") {
      return { optional: false, type: "date" };
    }
    if (def.format === "datetime") {
      return { optional: false, type: "datetime" };
    }
    return { optional: false, type: "string" };
  }

  if (def.type === "boolean") {
    return { optional: false, type: "boolean" };
  }

  return { optional: false, type: def.type ?? "unknown" };
}

function extractProperties(schema: z.ZodType): PropertyInfo[] {
  const def = (schema as any)._zod?.def;
  if (!def) {
    return [];
  }

  if (def.type === "readonly") {
    return extractProperties(def.innerType);
  }

  if (def.type !== "object" || !def.shape) {
    return [];
  }

  const properties: PropertyInfo[] = [];
  for (const [name, propSchema] of Object.entries(def.shape) as [
    string,
    z.ZodType,
  ][]) {
    if (name === "@id" || name === "@type") {
      continue;
    }

    const meta = propSchema.meta() as PropertyMeta | undefined;
    const { optional, type } = resolveType(propSchema);

    properties.push({
      description: meta?.description ?? "",
      name,
      optional,
      range: meta?.range,
      title: meta?.title ?? name,
      type,
    });
  }

  return properties.sort((a, b) => a.name.localeCompare(b.name));
}

// =============================================================================
// DOCUMENT GENERATION
// =============================================================================

function buildNamedIndividualsTable(
  individuals: readonly Record<string, unknown>[],
): RootContent[] {
  const headerRow = row([cell([text("IRI")]), cell([text("Name")])]);

  const dataRows = individuals.map((individual) =>
    row([
      cell([inlineCode(individual["@id"] as string)]),
      cell([text(individual["name"] as string)]),
    ]),
  );

  return [
    heading(3, [text("Named Individuals")]),
    table(["left", "left"], [headerRow, ...dataRows]),
  ];
}

function buildPropertiesTable(properties: PropertyInfo[]): RootContent[] {
  const headerRow = row([
    cell([text("Property")]),
    cell([text("Title")]),
    cell([text("Type")]),
    cell([text("Required")]),
    cell([text("Range")]),
    cell([text("Description")]),
  ]);

  const dataRows = properties.map((prop) => {
    const rangeContent: PhrasingContent[] = prop.range
      ? [link(`#${prop.range.toLowerCase()}`, [text(prop.range)])]
      : [text("—")];

    return row([
      cell([inlineCode(prop.name)]),
      cell([text(prop.title)]),
      cell([text(prop.type)]),
      cell([text(prop.optional ? "No" : "Yes")]),
      cell(rangeContent),
      cell([text(prop.description)]),
    ]);
  });

  return [
    heading(3, [text("Properties")]),
    table(
      ["left", "left", "left", "center", "left", "left"],
      [headerRow, ...dataRows],
    ),
  ];
}

function buildSchemaSection(name: string, schema: z.ZodType): RootContent[] {
  const meta = schema.meta() as ObjectMeta | undefined;
  const nodes: RootContent[] = [];

  nodes.push(heading(2, [text(meta?.title ?? name)]));

  if (meta?.description) {
    nodes.push(paragraph([text(meta.description)]));
  }

  if (meta?.namedIndividuals && meta.namedIndividuals.length > 0) {
    nodes.push(...buildNamedIndividualsTable(meta.namedIndividuals));
  }

  const properties = extractProperties(schema);
  if (properties.length > 0) {
    nodes.push(...buildPropertiesTable(properties));
  }

  return nodes;
}

// =============================================================================
// ENTRY POINT
// =============================================================================

export function generateCodebookMarkdown(): string {
  const children: RootContent[] = [];

  children.push(yaml("title: IDS Governance Measurement Framework — Codebook"));
  children.push(
    heading(1, [text("IDS Governance Measurement Framework — Codebook")]),
  );

  const sortedEntries = Object.entries(schemas).sort(([a], [b]) =>
    a.localeCompare(b),
  );

  for (const [name, schema] of sortedEntries) {
    children.push(...buildSchemaSection(name, schema as z.ZodType));
  }

  const tree: Root = { type: "root", children };

  return unified()
    .use(remarkFrontmatter)
    .use(remarkGfm)
    .use(remarkStringify)
    .stringify(tree);
}
