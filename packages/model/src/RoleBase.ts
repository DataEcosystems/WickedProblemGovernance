import { z } from "zod";
import { Description } from "./Description.js";
import { Iri } from "./Iri.js";
import { Name } from "./Name.js";
import { PropertyMeta } from "./PropertyMeta.js";
import { Timestamp } from "./Timestamp.js";

export const RoleBase = z.object({
  "@id": Iri,
  description: Description.optional(),
  endDate: Timestamp.optional().meta(
    new PropertyMeta({
      description: "The date the role ended.",
      title: "End Date",
    }),
  ),
  name: Name.optional(),
  startDate: Timestamp.optional().meta(
    new PropertyMeta({
      description: "The date the role began.",
      title: "Start Date",
    }),
  ),
});

export type RoleBase = z.infer<typeof RoleBase>;
