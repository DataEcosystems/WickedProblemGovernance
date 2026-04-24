import { z } from "zod";
import { Description } from "./Description.js";
import { JsonLdBase } from "./JsonLdBase.js";
import { Name } from "./Name.js";
import { ObjectMeta } from "./ObjectMeta.js";

export const ProjectPartnerRole = JsonLdBase.extend({
  "@type": z.literal("ProjectPartnerRole"),
  description: Description,
  name: Name,
})
  .readonly()
  .meta(
    new ObjectMeta({
      description:
        "A classification of the role a partner organization plays in a project.",
      id: "ProjectPartnerRole",
      namedIndividuals: [
        {
          description:
            "An organization providing centralized IT services for the project.",
          id: "CentralizedIt",
          name: "Centralized IT",
        },
        {
          description: "An organization contributing data records to the IDS.",
          id: "DataContributor",
          name: "Data Contributor",
        },
        {
          description:
            "An organization providing funding or institutional sponsorship for the IDS.",
          id: "IdsSponsor",
          name: "IDS Sponsor",
        },
        {
          description:
            "An organization providing technical infrastructure for data linkage and analysis.",
          id: "InfrastructureProvider",
          name: "Infrastructure Provider",
        },
        {
          description:
            "An organization providing executive or program leadership for the project.",
          id: "ProgramLeadership",
          name: "Program Leadership",
        },
        {
          description:
            "An organization providing subject matter expertise on the program or domain.",
          id: "ProgramSme",
          name: "Program SME",
        },
        {
          description:
            "An organization conducting research or analysis using the linked data.",
          id: "Researcher",
        },
      ],
      title: "Project Partner Role",
    }),
  );

export type ProjectPartnerRole = z.infer<typeof ProjectPartnerRole>;
