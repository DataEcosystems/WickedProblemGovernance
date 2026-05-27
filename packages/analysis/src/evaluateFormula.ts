import { PropertyMeta } from "@wpg/model";
import * as math from "mathjs";
import { z } from "zod";

export function evaluateFormula(
  schema: z.ZodObject<any>,
  property: string,
  scope: Record<string, unknown>,
): any {
  const math_ = math.create(math.all);
  math_.import({ values: (obj: object) => Object.values(obj) });

  const meta = schema.shape[property].meta() as PropertyMeta | undefined;
  if (meta?.formula == null) {
    throw new Error(`No formula on ${property}`);
  }

  return math_.evaluate(meta.formula, scope);
}
