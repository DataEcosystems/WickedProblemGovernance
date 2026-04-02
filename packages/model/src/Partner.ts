import { z } from "zod";
import { Domain } from "./Domain.js";
import { foreignKey } from "./foreignKey.js";
import { InstitutionalLayer } from "./InstitutionalLayer.js";
import { Id } from "./index.js";
import { primaryKey } from "./primaryKey.js";
import { table } from "./table.js";

export const Partner = z
  .object({
    domainId: Id.meta(foreignKey(Domain, "id")),
    id: Id.meta(primaryKey()),
    layerId: Id.meta(foreignKey(InstitutionalLayer, "id")),
    name: z.string(),
  })
  .meta(table("partner"));

export type Partner = z.infer<typeof Partner>;
