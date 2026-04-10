import z from "zod";
import { Artifact } from "./Artifact.js";
import { Episode } from "./Episode.js";
import { EventType } from "./EventType.js";
import { Iri } from "./Iri.js";
import { JsonLdBase } from "./JsonLdBase.js";
import { Partner } from "./Partner.js";
import { range } from "./range.js";
import { Timestamp } from "./Timestamp.js";

export const Event = JsonLdBase.extend({
  "@type": z.literal("Event"),
  artifact: Iri.meta(range(Artifact)),
  episode: Iri.meta(range(Episode)),
  eventType: Iri.meta(range(EventType)),
  partners: z.array(Iri).readonly().meta(range(Partner)),
  timestamp: Timestamp,
}).readonly();

export type Event = z.infer<typeof Event>;
