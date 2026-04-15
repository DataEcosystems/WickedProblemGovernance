import { z } from "zod";
import { Domain } from "./Domain.js";
import { InstitutionalLayer } from "./InstitutionalLayer.js";
import { Iri } from "./Iri.js";
import { JsonLdBase } from "./JsonLdBase.js";
import { range } from "./range.js";

export const Partner = JsonLdBase.extend({
  "@type": z.literal("Partner"),
  domains: z.array(Iri).readonly().meta(range(Domain)),
  layers: z.array(Iri).readonly().meta(range(InstitutionalLayer)),
  name: z.string(),
})
  .readonly()
  .meta({
    id: "Partner",
  });

export type Partner = z.infer<typeof Partner>;
