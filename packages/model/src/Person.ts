import { z } from "zod";
import { Description } from "./Description.js";
import { Iri } from "./Iri.js";
import { Name } from "./Name.js";
import { ObjectMeta } from "./ObjectMeta.js";
import { PersonRole } from "./PersonRole.js";
import { PropertyMeta } from "./PropertyMeta.js";
import { ResourceBase } from "./ResourceBase.js";

export const Person = ResourceBase.extend({
  "@type": z.literal("Person"),
  description: Description.optional(),
  memberOf: z.array(Iri).meta(
    new PropertyMeta({
      description: "The person roles this person fills.",
      range: PersonRole,
      title: "Member Of",
    }),
  ),
  name: Name,
}).meta(
  new ObjectMeta({
    "@type": "Person",
    description: "An individual person.",
  }),
);

export type Person = z.infer<typeof Person>;
