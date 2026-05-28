import { z } from "zod";
import { Description } from "./Description.js";
import { Name } from "./Name.js";
import { namedIndividualIriEnum } from "./namedIndividualIriEnum.js";
import { ObjectMeta } from "./ObjectMeta.js";

export const InstitutionalLayer = z
  .object({
    "@id": namedIndividualIriEnum("InstitutionalLayer"),
    "@type": z.literal("InstitutionalLayer"),
    description: Description,
    name: Name,
  })
  .meta(
    new ObjectMeta({
      "@type": "InstitutionalLayer",
      description:
        "The jurisdictional level at which a partner organization operates.",
    }),
  );

export type InstitutionalLayer = z.infer<typeof InstitutionalLayer>;
