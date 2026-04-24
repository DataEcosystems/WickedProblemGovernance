import { z } from "zod";
import { Description } from "./Description.js";
import { Iri } from "./Iri.js";
import { JsonLdBase } from "./JsonLdBase.js";
import { Name } from "./Name.js";
import { ObjectMeta } from "./ObjectMeta.js";
import { Organization } from "./Organization.js";
import { Project } from "./Project.js";
import { ProjectPartnerRole } from "./ProjectPartnerRole.js";
import { PropertyMeta } from "./PropertyMeta.js";

export const ProjectPartner = JsonLdBase.extend({
  "@type": z.literal("ProjectPartner"),
  description: Description.optional(),
  name: Name,
  organization: Iri.meta(
    new PropertyMeta({
      description: "The organization fulfilling this partner role.",
      range: Organization,
      title: "Organization",
    }),
  ),
  project: Iri.meta(
    new PropertyMeta({
      description: "The project in which this partner participates.",
      range: Project,
      title: "Project",
    }),
  ),
  role: Iri.meta(
    new PropertyMeta({
      description: "The role this partner plays in the project.",
      range: ProjectPartnerRole,
      title: "Role",
    }),
  ),
})
  .readonly()
  .meta(
    new ObjectMeta({
      description:
        "An n-ary relation linking an organization to a project in a specific role.",
      id: "ProjectPartner",
      title: "Project Partner",
    }),
  );

export type ProjectPartner = z.infer<typeof ProjectPartner>;
