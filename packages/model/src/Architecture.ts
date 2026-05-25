import { z } from "zod";
import { Description } from "./Description.js";
import { Name } from "./Name.js";
import { namedIndividualIriEnum } from "./namedIndividualIriEnum.js";
import { ObjectMeta } from "./ObjectMeta.js";

const namedIndividuals = {
  Custodial: {
    description:
      "Raw data from multiple partners is centralized at a single site for linkage and analysis.",
  },
  Federated: {
    description:
      "Data remains with custodians and is linked via PET-enabled protocols without centralization.",
  },
} as const;

export const Architecture = z
  .object({
    "@id": namedIndividualIriEnum(namedIndividuals, "Architecture"),
    "@type": z.literal("Architecture"),
    description: Description,
    name: Name,
  })
  .meta(
    new ObjectMeta({
      "@type": "Architecture",
      description:
        "The data architecture governing how records are held and linked in an IDS project.",
      namedIndividuals,
    }),
  );

export type Architecture = z.infer<typeof Architecture>;
