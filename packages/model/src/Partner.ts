import { z } from "zod";
import { Domain } from "./Domain.js";
import { InstitutionalLayer } from "./InstitutionalLayer.js";
import { Iri } from "./Iri.js";
import { JsonLdBase } from "./JsonLdBase.js";
import { range } from "./range.js";

export const Partner = JsonLdBase.extend({
  "@type": z.literal("Partner"),
  domains: z
    .array(Iri)
    .readonly()
    .meta({
      description: "The regulatory and institutional domains of this partner.",
      ...range(Domain),
      title: "Domains",
    }),
  layers: z
    .array(Iri)
    .readonly()
    .meta({
      description: "The jurisdictional levels at which this partner operates.",
      ...range(InstitutionalLayer),
      title: "Institutional Layers",
    }),
  name: z.string().meta({
    description: "Human-readable name of the partner organization.",
    title: "Name",
  }),
})
  .readonly()
  .meta({
    description:
      "An institutional actor whose participation in an episode requires governance authorization.",
    id: "Partner",
    title: "Partner",
  });

export type Partner = z.infer<typeof Partner>;
