import { z } from "zod";
import { Domain } from "./Domain.js";
import { InstitutionalLayer } from "./InstitutionalLayer.js";
import { Iri } from "./Iri.js";
import { JsonLdBase } from "./JsonLdBase.js";
import { range } from "./range.js";

export const Organization = JsonLdBase.extend({
  "@type": z.literal("Organization"),
  domains: z
    .array(Iri)
    .readonly()
    .meta({
      description:
        "The regulatory and institutional domains of this organization.",
      ...range(Domain),
      title: "Domains",
    }),
  layers: z
    .array(Iri)
    .readonly()
    .meta({
      description:
        "The jurisdictional levels at which this organization operates.",
      ...range(InstitutionalLayer),
      title: "Institutional Layers",
    }),
  name: z.string().meta({
    description: "Human-readable name of the organization.",
    title: "Name",
  }),
})
  .readonly()
  .meta({
    description:
      "An institutional actor such as an agency, department, university, or nonprofit.",
    id: "Organization",
    title: "Organization",
  });

export type Organization = z.infer<typeof Organization>;
