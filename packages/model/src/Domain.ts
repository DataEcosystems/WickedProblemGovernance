import { z } from "zod";
import { JsonLdBase } from "./JsonLdBase.js";

export const Domain = JsonLdBase.extend({
  "@type": z.literal("Domain"),
  name: z.string().meta({
    description: "Human-readable name of the domain.",
    title: "Name",
  }),
})
  .readonly()
  .meta({
    description:
      "The regulatory and institutional domain of a partner organization.",
    id: "Domain",
    namedIndividuals: [
      { "@id": "wpg:EducationDomain", name: "Education" },
      { "@id": "wpg:HealthDomain", name: "Health" },
      { "@id": "wpg:HumanServicesDomain", name: "Human Services" },
      { "@id": "wpg:JusticeDomain", name: "Justice" },
    ],
    title: "Domain",
  });

export type Domain = z.infer<typeof Domain>;
