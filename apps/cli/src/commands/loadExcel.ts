import { Workbook, type Worksheet } from "@protobi/exceljs";
import {
  ObjectMeta,
  PropertyMeta,
  type Resource,
  schemasByName,
} from "@wpg/model";
import { z } from "zod/v4";

// =============================================================================
// SCHEMA INTROSPECTION
// =============================================================================

interface ColumnDef {
  readonly header: string;
  readonly key: string;
}

function columnDefs(typeName: keyof typeof schemasByName): ColumnDef[] {
  const schema = schemasByName[typeName];

  const columns: ColumnDef[] = [];
  for (const [key, propSchema] of Object.entries(schema.shape) as [
    string,
    z.ZodType,
  ][]) {
    const meta = propSchema.meta() as PropertyMeta | undefined;
    columns.push({
      header: meta?.title ?? key,
      key,
    });
  }

  return columns.sort((a, b) => a.key.localeCompare(b.key));
}

function serializeValue(value: unknown): string | number | boolean | null {
  if (value == null) {
    return null;
  }
  if (Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return value;
  }
  return String(value);
}

function worksheetTitle(typeName: keyof typeof schemasByName): string {
  const schema = schemasByName[typeName];
  const meta = schema.meta() as ObjectMeta | undefined;
  return meta?.title ?? typeName;
}

// =============================================================================
// LOAD EXCEL
// =============================================================================

export async function loadExcel(
  resources: AsyncIterable<Resource>,
): Promise<Workbook> {
  const workbook = new Workbook();
  const worksheets = new Map<
    string,
    { columns: ColumnDef[]; worksheet: Worksheet }
  >();

  for await (const resource of resources) {
    const typeName = resource["@type"];

    if (!worksheets.has(typeName)) {
      const columns = columnDefs(typeName);
      const title = worksheetTitle(typeName);
      const worksheet = workbook.addWorksheet(title);
      worksheet.columns = columns.map((col) => ({
        header: col.header,
        key: col.key,
        width: Math.max(col.header.length + 2, 15),
      }));

      const headerRow = worksheet.getRow(1);
      headerRow.font = { bold: true };
      headerRow.commit();

      worksheets.set(typeName, { columns, worksheet });
    }

    const { columns, worksheet } = worksheets.get(typeName)!;

    const row: Record<string, string | number | boolean | null> = {};
    for (const col of columns) {
      row[col.key] = serializeValue(
        (resource as Record<string, unknown>)[col.key],
      );
    }

    worksheet.addRow(row).commit();
  }

  return workbook;
}
