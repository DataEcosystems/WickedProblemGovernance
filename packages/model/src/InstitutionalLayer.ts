import { z } from "zod";
import { JsonLdBase } from "./JsonLdBase.js";

export const InstitutionalLayer = JsonLdBase.extend({
  "@type": z.literal("InstitutionalLayer"),
  name: z.string(),
})
  .readonly()
  .meta({
    id: "InstitutionalLayer",
    namedIndividuals: [
      { "@id": "wpg:LocalInstitutionalLayer", name: "Local" },
      { "@id": "wpg:RegionalInstitutionalLayer", name: "Regional" },
      { "@id": "wpg:StateInstitutionalLayer", name: "State" },
    ],
  });

export type InstitutionalLayer = z.infer<typeof InstitutionalLayer>;
