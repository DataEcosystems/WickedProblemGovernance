import { z } from "zod";
import { JsonLdBase } from "./JsonLdBase.js";

export const Architecture = JsonLdBase.extend({
  "@type": z.literal("Architecture"),
  name: z.string().meta({
    description: "Human-readable name of the architecture type.",
    title: "Name",
  }),
})
  .readonly()
  .meta({
    description:
      "The data architecture governing how records are held and linked in an IDS project.",
    id: "Architecture",
    namedIndividuals: [
      { "@id": "wpg:CustodialArchitecture", name: "Custodial" },
      { "@id": "wpg:FederatedArchitecture", name: "Federated" },
    ],
    title: "Architecture",
  });

export type Architecture = z.infer<typeof Architecture>;
