import z from "zod";
import { EventType } from "./EventType.js";
import { Id } from "./Id.js";
import { Timestamp } from "./Timestamp.js";

export const Event = z.object({
  artifactId: Id,
  id: Id,
  timestamp: Timestamp,
  type: EventType,
});

export type Event = z.infer<typeof Event>;
