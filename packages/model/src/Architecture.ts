import { z } from "zod";
import { Description } from "./Description.js";
import { JsonLdBase } from "./JsonLdBase.js";
import { Name } from "./Name.js";
import { ObjectMeta } from "./ObjectMeta.js";

export const Architecture = JsonLdBase.extend({
  "@type": z.literal("Architecture"),
  description: Description,
  name: Name,
}).meta(
  new ObjectMeta({
    description:
      "The data architecture governing how records are held and linked in an IDS project.",
    id: "Architecture",
    namedIndividuals: [
      {
        description:
          "Raw data from multiple partners is centralized at a single site for linkage and analysis.",
        id: "Custodial",
      },
      {
        description:
          "Data remains with custodians and is linked via PET-enabled protocols without centralization.",
        id: "Federated",
      },
    ],
  }),
);

export type Architecture = z.infer<typeof Architecture>;
