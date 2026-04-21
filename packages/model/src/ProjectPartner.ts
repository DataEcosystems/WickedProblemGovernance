import { z } from "zod";
import { Iri } from "./Iri.js";
import { JsonLdBase } from "./JsonLdBase.js";
import { Organization } from "./Organization.js";
import { Project } from "./Project.js";
import { ProjectPartnerRole } from "./ProjectPartnerRole.js";
import { range } from "./range.js";

export const ProjectPartner = JsonLdBase.extend({
  "@type": z.literal("ProjectPartner"),
  organization: Iri.meta({
    description: "The organization fulfilling this partner role.",
    ...range(Organization),
    title: "Organization",
  }),
  projectPartnerRole: Iri.meta({
    description: "The role this partner plays in the project.",
    ...range(ProjectPartnerRole),
    title: "Project Partner Role",
  }),
  project: Iri.meta({
    description: "The project in which this partner participates.",
    ...range(Project),
    title: "Project",
  }),
})
  .readonly()
  .meta({
    description:
      "An n-ary relation linking an organization to a project in a specific role.",
    id: "ProjectPartner",
    title: "Project Partner",
  });

export type ProjectPartner = z.infer<typeof ProjectPartner>;
