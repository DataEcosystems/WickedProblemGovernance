import ExcelJS from "@protobi/exceljs";
import { type Resource, schemasByName } from "@wpg/model";
import { z } from "zod";

type ScalarType = "boolean" | "number" | "string" | "timestamp";

interface PropertyType {
  readonly isArray: boolean;
  readonly isOptional: boolean;
  readonly scalarType: ScalarType;
}

function propertyType(schema: z.ZodType): PropertyType {
  let current = schema;
  let isOptional = false;
  let isArray = false;

  // Unwrap optional
  const outerDef = (current as any)._zod?.def;
  if (outerDef?.type === "optional") {
    isOptional = true;
    current = outerDef.innerType;
  }

  // Unwrap array
  const midDef = (current as any)._zod?.def;
  if (midDef?.type === "array") {
    isArray = true;
    current = midDef.element;
  }

  // Resolve scalar type
  const innerDef = (current as any)._zod?.def;
  const innerType = innerDef?.type;

  if (innerType === "boolean") {
    return { isArray, isOptional, scalarType: "boolean" };
  }
  if (innerType === "number") {
    return { isArray, isOptional, scalarType: "number" };
  }
  if (innerType === "union") {
    // Timestamp is a union of date and datetime strings
    return { isArray, isOptional, scalarType: "timestamp" };
  }
  if (innerType === "literal") {
    return { isArray, isOptional, scalarType: "string" };
  }
  return { isArray, isOptional, scalarType: "string" };
}

function propertyTypes(
  typeName: keyof typeof schemasByName,
): Record<string, PropertyType> {
  const shape = schemasByName[typeName].shape as Record<string, z.ZodType>;
  const result: Record<string, PropertyType> = {};
  for (const [key, propSchema] of Object.entries(shape)) {
    result[key] = propertyType(propSchema);
  }
  return result;
}

function deserializeValue(
  propType: PropertyType,
  value: ExcelJS.CellValue,
): unknown {
  if (value == null || value === "") {
    return undefined;
  }

  if (propType.isArray) {
    if (typeof value === "string") {
      try {
        return JSON.parse(value);
      } catch {
        return [value];
      }
    }
    return Array.isArray(value) ? value : [value];
  }

  switch (propType.scalarType) {
    case "boolean": {
      if (typeof value === "boolean") {
        return value;
      }
      if (typeof value === "number") {
        return value !== 0;
      }
      if (typeof value === "string") {
        return value.toLowerCase() === "true";
      }
      return Boolean(value);
    }
    case "number": {
      if (typeof value === "number") {
        return value;
      }
      if (typeof value === "string") {
        const parsed = Number(value);
        return Number.isNaN(parsed) ? undefined : parsed;
      }
      return undefined;
    }
    case "string": {
      if (typeof value === "string") {
        return value;
      }
      if (typeof value === "number" || typeof value === "boolean") {
        return String(value);
      }
      return String(value);
    }
    case "timestamp": {
      if (value instanceof Date) {
        return value.toISOString().split("T")[0];
      }
      if (typeof value === "string") {
        return value;
      }
      return undefined;
    }
  }
}

export function* fromExcel(workbook: ExcelJS.Workbook): Iterable<Resource> {
  for (const worksheet of workbook.worksheets) {
    const typeName = worksheet.name as keyof typeof schemasByName;
    if (!(typeName in schemasByName)) {
      throw new Error(`Unknown worksheet: ${worksheet.name}`);
    }

    const propTypes = propertyTypes(typeName);

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
        const propType = propTypes[key];
        if (propType == null) {
          continue;
        }
        const value = row.getCell(colNumber).value;
        const deserialized = deserializeValue(propType, value);
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
