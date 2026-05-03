import { z } from "zod";
import { Description } from "./Description.js";
import { Name } from "./Name.js";
import { ObjectMeta } from "./ObjectMeta.js";
import { ResourceBase } from "./ResourceBase.js";

export const PersonRoleName = ResourceBase.extend({
  "@type": z.literal("PersonRoleName"),
  description: Description,
  name: Name,
}).meta(
  new ObjectMeta({
    description:
      "A classification of the role a person plays as a member of a project or organization.",
    id: "PersonRoleName",
    title: "Person Role Name",
  }),
);

export type PersonRoleName = z.infer<typeof PersonRoleName>;
