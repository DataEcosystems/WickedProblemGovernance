import { z } from "zod";

type ScalarType = "boolean" | "number" | "string" | "timestamp";

export interface ZodPropertyType {
  readonly isArray: boolean;
  readonly isOptional: boolean;
  readonly scalarType: ScalarType;
}

export namespace ZodPropertyType {
  export function fromZodPropertySchema(schema: z.ZodType): ZodPropertyType {
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
}
