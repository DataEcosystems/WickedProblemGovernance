import { z } from "zod";
import { Description } from "./Description.js";
import { Name } from "./Name.js";
import { namedIndividualIriEnum } from "./namedIndividualIriEnum.js";
import { ObjectMeta } from "./ObjectMeta.js";

export const GovernanceArtifactType = z
  .object({
    "@id": namedIndividualIriEnum("GovernanceArtifactType"),
    "@type": z.literal("GovernanceArtifactType"),
    description: Description,
    name: Name,
  })
  .meta(
    new ObjectMeta({
      "@type": "GovernanceArtifactType",
      description:
        "A classification of governance artifacts by their documentary form.",
    }),
  );

export type GovernanceArtifactType = z.infer<typeof GovernanceArtifactType>;
