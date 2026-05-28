import { z } from "zod";
import { Description } from "./Description.js";
import { Name } from "./Name.js";
import { namedIndividualIriEnum } from "./namedIndividualIriEnum.js";
import { ObjectMeta } from "./ObjectMeta.js";

export const PersonRoleCategory = z
  .object({
    "@id": namedIndividualIriEnum("PersonRoleCategory"),
    "@type": z.literal("PersonRoleCategory"),
    description: Description,
    name: Name,
  })
  .meta(
    new ObjectMeta({
      "@type": "PersonRoleCategory",
      description:
        "A broad classification of the kind of role a person plays in a project or organization.",
    }),
  );

export type PersonRoleCategory = z.infer<typeof PersonRoleCategory>;
