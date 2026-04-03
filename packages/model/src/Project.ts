import { z } from "zod";
import { Architecture } from "./Architecture.js";
import { Episode } from "./Episode.js";
import { foreignKey } from "./foreignKey.js";
import { Id } from "./Id.js";
import { primaryKey } from "./primaryKey.js";
import { Timestamp } from "./Timestamp.js";
import { table } from "./table.js";

export const Project = z
  .object({
    architectureId: Id.meta(foreignKey(Architecture, "id")),
    deliveryCouplingProxy: z.number().nullable(),
    deliveryEpisodeId: Id.nullable().meta(foreignKey(Episode, "id")),
    episodeCount: z.number().int(),
    episodeIds: z.array(Id).readonly().meta(foreignKey(Episode, "id")),
    id: Id.meta(primaryKey()),
    normalizedBurden: z.number().nullable(),
    partnerCount: z.number().int(),
    stallFraction: z.number(),
    stewardPresence: z.boolean(),
    t0: Timestamp,
    tau2: z.number().nullable(),
  })
  .readonly()
  .meta(table("project"));

export type Project = z.infer<typeof Project>;
