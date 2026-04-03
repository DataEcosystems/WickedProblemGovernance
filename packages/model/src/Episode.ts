import { z } from "zod";
import { Event } from "./Event.js";
import { foreignKey } from "./foreignKey.js";
import { Id } from "./Id.js";
import { Partner } from "./Partner.js";
import { primaryKey } from "./primaryKey.js";
import { Timestamp } from "./Timestamp.js";
import { table } from "./table.js";

export const Episode = z
  .object({
    couplingProxy: z.number(),
    domainHeterogeneity: z.number(),
    eventIds: z.array(Id).readonly().meta(foreignKey(Event, "id")),
    id: Id.meta(primaryKey()),
    layerHeterogeneity: z.number(),
    normalizedBurden: z.number().nullable(),
    partnerCount: z.number().int(),
    partnerIds: z.array(Id).readonly().meta(foreignKey(Partner, "id")),
    stall: z.boolean(),
    t0: Timestamp,
    t1: Timestamp.nullable(),
    t2: Timestamp.nullable(),
    tau1: z.number().nullable(),
    tau2: z.number().nullable(),
  })
  .readonly()
  .meta(table("episode"));

export type Episode = z.infer<typeof Episode>;
