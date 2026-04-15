import { z } from "zod";
import { JsonLdBase } from "./JsonLdBase.js";

export const Architecture = JsonLdBase.extend({
  "@type": z.literal("Architecture"),
  name: z.string(),
})
  .readonly()
  .meta({
    id: "Architecture",
    namedIndividuals: [
      { "@id": "wpg:CustodialArchitecture", name: "Custodial" },
      { "@id": "wpg:FederatedArchitecture", name: "Federated" },
    ],
  });
export type Architecture = z.infer<typeof Architecture>;
