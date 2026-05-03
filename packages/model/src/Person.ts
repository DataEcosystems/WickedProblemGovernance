import { z } from "zod";
import { Description } from "./Description.js";
import { Name } from "./Name.js";
import { ObjectMeta } from "./ObjectMeta.js";
import { ResourceBase } from "./ResourceBase.js";

export const Person = ResourceBase.extend({
  "@type": z.literal("Person"),
  description: Description.optional(),
  name: Name,
}).meta(
  new ObjectMeta({
    description: "An individual person.",
    id: "Person",
  }),
);

export type Person = z.infer<typeof Person>;
