import ExcelJS from "@protobi/exceljs";
import { type Resource, schemasByName } from "@wpg/model";
import { z } from "zod";
import { deserializeExcelCellValue } from "../deserializeExcelCellValue.js";
import { ZodPropertyType } from "../ZodPropertyType.js";

export function* fromExcel(workbook: ExcelJS.Workbook): Iterable<Resource> {
  for (const worksheet of workbook.worksheets) {
    const typeName = worksheet.name as keyof typeof schemasByName;
    if (!(typeName in schemasByName)) {
      throw new Error(`Unknown worksheet: ${worksheet.name}`);
    }

    const zodPropertyTypes: Record<string, ZodPropertyType> = {};
    for (const [key, propSchema] of Object.entries(
      schemasByName[typeName].shape as Record<string, z.ZodType>,
    )) {
      zodPropertyTypes[key] = ZodPropertyType.fromZodPropertySchema(propSchema);
    }

    const headerRow = worksheet.getRow(1);
    const headers: string[] = [];
    headerRow.eachCell((cell, colNumber) => {
      headers[colNumber] = String(cell.value);
    });

    for (let rowNumber = 2; rowNumber <= worksheet.rowCount; rowNumber++) {
      const row = worksheet.getRow(rowNumber);
      const resource: Record<string, unknown> = {};

      for (const [colNumber, key] of headers.entries()) {
        if (key == null) {
          continue;
        }
        const zodPropertyType = zodPropertyTypes[key];
        if (zodPropertyType == null) {
          continue;
        }
        const value = row.getCell(colNumber).value;
        const deserialized = deserializeExcelCellValue(value, zodPropertyType);
        if (deserialized !== undefined) {
          resource[key] = deserialized;
        }
      }

      if (resource["@id"] != null && resource["@type"] != null) {
        yield resource as Resource;
      }
    }
  }
}
