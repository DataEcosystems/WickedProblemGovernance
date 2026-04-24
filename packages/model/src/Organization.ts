import { z } from "zod";
import { Description } from "./Description.js";
import { Domain } from "./Domain.js";
import { InstitutionalLayer } from "./InstitutionalLayer.js";
import { Iri } from "./Iri.js";
import { JsonLdBase } from "./JsonLdBase.js";
import { Name } from "./Name.js";
import { ObjectMeta } from "./ObjectMeta.js";
import { PropertyMeta } from "./PropertyMeta.js";

export const Organization = JsonLdBase.extend({
  "@type": z.literal("Organization"),
  description: Description.optional(),
  domains: z
    .array(Iri)
    .readonly()
    .meta(
      new PropertyMeta({
        description:
          "The regulatory and institutional domains of this organization.",
        range: Domain,
        title: "Domains",
      }),
    ),
  layers: z
    .array(Iri)
    .readonly()
    .meta(
      new PropertyMeta({
        description:
          "The jurisdictional levels at which this organization operates.",
        range: InstitutionalLayer,
        title: "Institutional Layers",
      }),
    ),
  name: Name,
})
  .readonly()
  .meta(
    new ObjectMeta({
      description:
        "An institutional actor such as an agency, department, university, or nonprofit.",
      id: "Organization",
    }),
  );

export type Organization = z.infer<typeof Organization>;
