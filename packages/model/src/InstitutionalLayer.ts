import { z } from "zod";
import { Description } from "./Description.js";
import { Name } from "./Name.js";
import { namedIndividualIriEnum } from "./namedIndividualIriEnum.js";
import { ObjectMeta } from "./ObjectMeta.js";

const namedIndividuals = {
  Local: {
    description: "City, county, or municipal-level organizations.",
  },
  Other: {
    description: "An institutional layer not covered by the other categories.",
  },
  Regional: {
    description:
      "Multi-county, regional service area, or intermediate-level organizations.",
  },
  State: {
    description: "State-level agencies, departments, or organizations.",
  },
} as const;

export const InstitutionalLayer = z
  .object({
    "@id": namedIndividualIriEnum(namedIndividuals, "InstitutionalLayer"),
    "@type": z.literal("InstitutionalLayer"),
    description: Description,
    name: Name,
  })
  .meta(
    new ObjectMeta({
      "@type": "InstitutionalLayer",
      description:
        "The jurisdictional level at which a partner organization operates.",
      namedIndividuals,
    }),
  );

export type InstitutionalLayer = z.infer<typeof InstitutionalLayer>;
