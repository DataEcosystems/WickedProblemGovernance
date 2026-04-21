import { z } from "zod";
import { JsonLdBase } from "./JsonLdBase.js";

export const ProjectPartnerRole = JsonLdBase.extend({
  "@type": z.literal("ProjectPartnerRole"),
  name: z.string().meta({
    description: "Human-readable name of the project partner role.",
    title: "Name",
  }),
})
  .readonly()
  .meta({
    description:
      "A classification of the role a partner organization plays in a project.",
    id: "ProjectPartnerRole",
    namedIndividuals: [
      { "@id": "wpg:CentralizedItProjectPartnerRole", name: "Centralized IT" },
      {
        "@id": "wpg:DataContributorProjectPartnerRole",
        name: "Data Contributor",
      },
      { "@id": "wpg:IdsSponsorProjectPartnerRole", name: "IDS Sponsor" },
      {
        "@id": "wpg:InfrastructureProviderProjectPartnerRole",
        name: "Infrastructure Provider",
      },
      {
        "@id": "wpg:ProgramLeadershipProjectPartnerRole",
        name: "Program Leadership",
      },
      { "@id": "wpg:ProgramSmeProjectPartnerRole", name: "Program SME" },
      { "@id": "wpg:ResearcherProjectPartnerRole", name: "Researcher" },
    ],
    title: "Project Partner Role",
  });

export type ProjectPartnerRole = z.infer<typeof ProjectPartnerRole>;
