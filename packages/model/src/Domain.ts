import { z } from "zod";
import { Description } from "./Description.js";
import { Name } from "./Name.js";
import { namedIndividualIriEnum } from "./namedIndividualIriEnum.js";
import { ObjectMeta } from "./ObjectMeta.js";

export const Domain = z
  .object({
    "@id": namedIndividualIriEnum("Domain"),
    "@type": z.literal("Domain"),
    description: Description,
    name: Name,
  })
  .meta(
    new ObjectMeta({
      "@type": "Domain",
      description:
        "The regulatory and institutional domain of a partner organization.",
    }),
  );

export type Domain = z.infer<typeof Domain>;
