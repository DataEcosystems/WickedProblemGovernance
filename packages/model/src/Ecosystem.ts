import { z } from "zod";
import { foreignKey } from "./foreignKey.js";
import { Id } from "./Id.js";
import { Project } from "./Project.js";
import { primaryKey } from "./primaryKey.js";
import { table } from "./table.js";

export const Ecosystem = z
  .object({
    id: Id.meta(primaryKey()),
    meanNormalizedBurden: z.number().nullable(),
    meanTimeToValue: z.number().nullable(),
    name: z.string(),
    projectIds: z.array(Id).readonly().meta(foreignKey(Project, "id")),
    stdTimeToValue: z.number().nullable(),
  })
  .readonly()
  .meta(table("ecosystem"));

export type Ecosystem = z.infer<typeof Ecosystem>;
