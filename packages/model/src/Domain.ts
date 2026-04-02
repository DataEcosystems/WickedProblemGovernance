import { z } from "zod";
import { Id } from "./Id.js";
import { primaryKey } from "./primaryKey.js";
import { table } from "./table.js";

export const Domain = z
  .object({
    id: Id.meta(primaryKey()),
    name: z.string(),
  })
  .meta(table("domain"));

export type Domain = z.infer<typeof Domain>;
