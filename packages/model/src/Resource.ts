import { z } from "zod";
import { schemas } from "./schemas.js";

export const Resource = z.discriminatedUnion(
  "@type",
  Object.values(schemas) as [z.ZodObject<any>, ...z.ZodObject<any>[]],
);

export type Resource = z.infer<typeof Resource>;
