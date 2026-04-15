import { z } from "zod";
import { ObjectMeta } from "./ObjectMeta.js";
import { PropertyMeta } from "./PropertyMeta.js";

export function range(target: z.ZodType | string): PropertyMeta {
  if (typeof target === "string") {
    return { range: target };
  }
  const meta = target.meta() as ObjectMeta | undefined;
  const id = meta?.id;
  if (id == null) {
    throw new Error("range() target schema must have an id in its meta");
  }
  return { range: id };
}
