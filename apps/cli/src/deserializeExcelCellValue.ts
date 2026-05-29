import ExcelJS from "@protobi/exceljs";
import { ZodPropertyType } from "./ZodPropertyType.js";

export function deserializeExcelCellValue(
  value: ExcelJS.CellValue,
  zodPropertyType: ZodPropertyType,
): unknown {
  if (value == null || value === "") {
    return undefined;
  }

  if (zodPropertyType.isArray) {
    if (typeof value === "string") {
      try {
        return JSON.parse(value);
      } catch {
        return [value];
      }
    }
    return Array.isArray(value) ? value : [value];
  }

  switch (zodPropertyType.scalarType) {
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
