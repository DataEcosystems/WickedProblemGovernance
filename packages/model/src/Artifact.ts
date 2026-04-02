import { z } from "zod";
import { ArtifactType } from "./ArtifactType.js";
import { Id } from "./Id.js";
import { primaryKey } from "./primaryKey.js";
import { table } from "./table.js";

export const Artifact = z
  .object({
    id: Id.meta(primaryKey()),
    type: ArtifactType,
  })
  .meta(table("artifact"));

export type Artifact = z.infer<typeof Artifact>;
