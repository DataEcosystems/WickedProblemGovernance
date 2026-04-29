import { z } from "zod";
import { schemas } from "./schemas.js";

export const Schema = z.discriminatedUnion(
  "@type",
  Object.values(schemas) as [z.ZodObject<any>, ...z.ZodObject<any>[]],
);

export type Schema = z.infer<typeof Schema>;
