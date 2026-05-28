import { z } from "zod";
import { Description } from "./Description.js";
import { Name } from "./Name.js";
import { namedIndividualIriEnum } from "./namedIndividualIriEnum.js";
import { ObjectMeta } from "./ObjectMeta.js";

export const GovernanceEpisodeType = z
  .object({
    "@id": namedIndividualIriEnum("GovernanceEpisodeType"),
    "@type": z.literal("GovernanceEpisodeType"),
    description: Description,
    name: Name,
  })
  .meta(
    new ObjectMeta({
      "@type": "GovernanceEpisodeType",
      description:
        "A classification of governance episodes by the nature of the authorization attempt.",
    }),
  );

export type GovernanceEpisodeType = z.infer<typeof GovernanceEpisodeType>;
