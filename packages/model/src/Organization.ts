import { z } from "zod";
import { Description } from "./Description.js";
import { Domain } from "./Domain.js";
import { InstitutionalLayer } from "./InstitutionalLayer.js";
import { Iri } from "./Iri.js";
import { Name } from "./Name.js";
import { ObjectMeta } from "./ObjectMeta.js";
import { OrganizationRole } from "./OrganizationRole.js";
import { Place } from "./Place.js";
import { PropertyMeta } from "./PropertyMeta.js";

export const Organization = z
  .object({
    "@id": Iri,
    "@type": z.literal("Organization"),
    description: Description.optional(),
    domains: z.array(Iri).meta(
      new PropertyMeta({
        description:
          "The regulatory and institutional domains of this organization.",
        range: Domain,
        title: "Domains",
      }),
    ),
    foundingLocation: Iri.optional().meta(
      new PropertyMeta({
        description:
          "The location where this organization was founded or is headquartered.",
        range: Place,
        title: "Founding Location",
      }),
    ),
    institutionalLayer: Iri.meta(
      new PropertyMeta({
        description:
          "The jurisdictional level at which this organization operates.",
        range: InstitutionalLayer,
        title: "Institutional Layer",
      }),
    ),
    memberOf: z.array(Iri).meta(
      new PropertyMeta({
        description: "The organization roles this organization fills.",
        range: OrganizationRole,
        title: "Member Of",
      }),
    ),
    name: Name,
  })
  .meta(
    new ObjectMeta({
      "@type": "Organization",
      description:
        "An institutional actor such as an agency, department, university, or nonprofit.",
    }),
  );

export type Organization = z.infer<typeof Organization>;
