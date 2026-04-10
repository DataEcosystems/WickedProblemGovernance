import { z } from "zod";
import { Event } from "./Event.js";
import { Iri } from "./Iri.js";
import { JsonLdBase } from "./JsonLdBase.js";
import { Partner } from "./Partner.js";
import { range } from "./range.js";
import { Timestamp } from "./Timestamp.js";

export const Episode = JsonLdBase.extend({
  "@type": z.literal("Episode"),
  couplingProxy: z.number(),
  domainHeterogeneity: z.number(),
  events: z.array(Iri).readonly().meta(range(Event)),
  layerHeterogeneity: z.number(),
  normalizedBurden: z.number().nullable(),
  partnerCount: z.number().int(),
  partners: z.array(Iri).optional().readonly().meta(range(Partner)),
  stall: z.boolean(),
  t0: Timestamp,
  t1: Timestamp.nullable(),
  t2: Timestamp.nullable(),
  tau1: z.number().nullable(),
  tau2: z.number().nullable(),
}).readonly();

export type Episode = z.infer<typeof Episode>;
