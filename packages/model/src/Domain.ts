import { z } from "zod";
import { JsonLdBase } from "./JsonLdBase.js";

export const Domain = JsonLdBase.extend({
  "@type": z.literal("Domain"),
  name: z.string(),
})
  .readonly()
  .meta({
    id: "Domain",
    namedIndividuals: [
      { "@id": "wpg:EducationDomain", name: "Education" },
      { "@id": "wpg:HealthDomain", name: "Health" },
      { "@id": "wpg:HumanServicesDomain", name: "Human Services" },
      { "@id": "wpg:JusticeDomain", name: "Justice" },
    ],
  });

export type Domain = z.infer<typeof Domain>;
