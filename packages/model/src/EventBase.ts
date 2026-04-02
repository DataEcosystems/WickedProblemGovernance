import { z } from "zod";
import { Artifact } from "./Artifact.js";
import { Id } from "./Id.js";
import { Timestamp } from "./Timestamp.js";

export const EventBase = z.object({
  artifact: Artifact.optional(),
  id: Id,
  timestamp: Timestamp,
});
