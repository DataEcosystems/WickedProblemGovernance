import { z } from "zod";
import { Domain } from "./Domain.js";
import { foreignKey } from "./foreignKey.js";
import { Id } from "./Id.js";
import { InstitutionalLayer } from "./InstitutionalLayer.js";
import { primaryKey } from "./primaryKey.js";
import { table } from "./table.js";

export const Partner = z
  .object({
    domainIds: z.array(Id).readonly().meta(foreignKey(Domain, "id")),
    id: Id.meta(primaryKey()),
    layerIds: z.array(Id).readonly().meta(foreignKey(InstitutionalLayer, "id")),
    name: z.string(),
  })
  .readonly()
  .meta(table("partner"));

export type Partner = z.infer<typeof Partner>;
