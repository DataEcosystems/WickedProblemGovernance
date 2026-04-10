import z from "zod";
import { Artifact } from "./Artifact.js";
import { EventType } from "./EventType.js";
import { Iri } from "./Iri.js";
import { JsonLdBase } from "./JsonLdBase.js";
import { range } from "./range.js";
import { Timestamp } from "./Timestamp.js";

export const Event = JsonLdBase.extend({
  "@type": z.literal("Event"),
  artifact: Iri.meta(range(Artifact)),
  eventType: Iri.meta(range(EventType)),
  timestamp: Timestamp,
}).readonly();

export type Event = z.infer<typeof Event>;
