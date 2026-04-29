import { z } from "zod";
import { Description } from "./Description.js";
import { JsonLdBase } from "./JsonLdBase.js";
import { Name } from "./Name.js";
import { ObjectMeta } from "./ObjectMeta.js";

export const InstitutionalLayer = JsonLdBase.extend({
  "@type": z.literal("InstitutionalLayer"),
  description: Description,
  name: Name,
}).meta(
  new ObjectMeta({
    description:
      "The jurisdictional level at which a partner organization operates.",
    id: "InstitutionalLayer",
    namedIndividuals: [
      {
        description: "City, county, or municipal-level organizations.",
        id: "Local",
      },
      {
        description:
          "Multi-county, regional service area, or intermediate-level organizations.",
        id: "Regional",
      },
      {
        description: "State-level agencies, departments, or organizations.",
        id: "State",
      },
    ],
    title: "Institutional Layer",
  }),
);

export type InstitutionalLayer = z.infer<typeof InstitutionalLayer>;
