import * as math from "mathjs";
import { PropertyMeta } from "./PropertyMeta.js";

export function evaluateFormula(
  schema: z.ZodObject<any>,
  property: string,
  scope: Record<string, unknown>,
): any {
  const meta = schema.shape[property].meta() as PropertyMeta | undefined;
  if (meta?.formula == null) {
    throw new Error(`No formula on ${property}`);
  }
  return math.evaluate(meta.formula, scope);
}
