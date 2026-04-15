import { z } from "zod";
import { JsonLdBase } from "./JsonLdBase.js";

export const InstitutionalLayer = JsonLdBase.extend({
  "@type": z.literal("InstitutionalLayer"),
  name: z.string().meta({
    description: "Human-readable name of the institutional layer.",
    title: "Name",
  }),
})
  .readonly()
  .meta({
    description:
      "The jurisdictional level at which a partner organization operates.",
    id: "InstitutionalLayer",
    namedIndividuals: [
      { "@id": "wpg:LocalInstitutionalLayer", name: "Local" },
      { "@id": "wpg:RegionalInstitutionalLayer", name: "Regional" },
      { "@id": "wpg:StateInstitutionalLayer", name: "State" },
    ],
    title: "Institutional Layer",
  });

export type InstitutionalLayer = z.infer<typeof InstitutionalLayer>;
