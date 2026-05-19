import type { Worksheet } from "@protobi/exceljs";
import ExcelJS from "@protobi/exceljs";
import { type Resource, schemasByName } from "@wpg/model";

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

export async function loadExcel(
  resources: AsyncIterable<Resource>,
): Promise<ExcelJS.Workbook> {
  const workbook = new ExcelJS.Workbook();
  const worksheets = new Map<
    string,
    { readonly headers: readonly string[]; readonly worksheet: Worksheet }
  >();

  for await (const resource of resources) {
    const typeName = resource["@type"];

    if (!worksheets.has(typeName)) {
      const headers = Object.keys(schemasByName[typeName].shape).sort();
      const worksheet = workbook.addWorksheet(typeName);
      worksheet.columns = headers.map((key) => ({
        header: key,
        key,
        width: Math.max(key.length + 2, 15),
      }));

      const headerRow = worksheet.getRow(1);
      headerRow.font = { bold: true };
      headerRow.commit();

      worksheets.set(typeName, { headers, worksheet });
    }

    const { headers, worksheet } = worksheets.get(typeName)!;

    const row: Record<string, string | number | boolean | null> = {};
    for (const key of headers) {
      row[key] = serializeValue((resource as Record<string, unknown>)[key]);
    }

    worksheet.addRow(row).commit();
  }

  return workbook;
}
