import { z } from "zod";
import { Description } from "./Description.js";
import { Name } from "./Name.js";
import { namedIndividualIriEnum } from "./namedIndividualIriEnum.js";
import { ObjectMeta } from "./ObjectMeta.js";

export const Architecture = z
  .object({
    "@id": namedIndividualIriEnum("Architecture"),
    "@type": z.literal("Architecture"),
    description: Description,
    name: Name,
  })
  .meta(
    new ObjectMeta({
      "@type": "Architecture",
      description:
        "The data architecture governing how records are held and linked in an IDS project.",
    }),
  );

export type Architecture = z.infer<typeof Architecture>;
