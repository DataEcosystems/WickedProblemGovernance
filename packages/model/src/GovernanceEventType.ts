import { z } from "zod";
import { Description } from "./Description.js";
import { Name } from "./Name.js";
import { namedIndividualIriEnum } from "./namedIndividualIriEnum.js";
import { ObjectMeta } from "./ObjectMeta.js";

export const GovernanceEventType = z
  .object({
    "@id": namedIndividualIriEnum("GovernanceEventType"),
    "@type": z.literal("GovernanceEventType"),
    description: Description,
    name: Name,
  })
  .meta(
    new ObjectMeta({
      "@type": "GovernanceEventType",
      description:
        "A classification of governance events by their function in the authorization process.",
    }),
  );

export type GovernanceEventType = z.infer<typeof GovernanceEventType>;
