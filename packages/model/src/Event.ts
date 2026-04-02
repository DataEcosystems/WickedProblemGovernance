import z from "zod";
import { Artifact } from "./Artifact.js";
import { EventType } from "./EventType.js";
import { foreignKey } from "./foreignKey.js";
import { Id } from "./Id.js";
import { primaryKey } from "./primaryKey.js";
import { Timestamp } from "./Timestamp.js";

export const Event = z.object({
  artifactId: Id.meta(foreignKey(Artifact, "id")),
  id: Id.meta(primaryKey()),
  timestamp: Timestamp,
  type: EventType,
});

export type Event = z.infer<typeof Event>;
