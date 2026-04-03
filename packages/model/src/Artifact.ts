import { z } from "zod";
import { ArtifactType } from "./ArtifactType.js";
import { foreignKey } from "./foreignKey.js";
import { Id } from "./Id.js";
import { Partner } from "./Partner.js";
import { primaryKey } from "./primaryKey.js";
import { table } from "./table.js";

export const Artifact = z
  .object({
    id: Id.meta(primaryKey()),
    partnerIds: z.array(Id).meta(foreignKey(Partner, "id")).readonly(),
    type: ArtifactType,
  })
  .readonly()
  .meta(table("artifact"));

export type Artifact = z.infer<typeof Artifact>;
