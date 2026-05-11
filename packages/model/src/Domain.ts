import { z } from "zod";
import { Description } from "./Description.js";
import { Name } from "./Name.js";
import { ObjectMeta } from "./ObjectMeta.js";
import { ResourceBase } from "./ResourceBase.js";

export const Domain = ResourceBase.extend({
  "@type": z.literal("Domain"),
  description: Description,
  name: Name,
}).meta(
  new ObjectMeta({
    "@type": "Domain",
    description:
      "The regulatory and institutional domain of a partner organization.",
    namedIndividuals: [
      {
        description:
          "Governed primarily under FERPA. Includes K-12, higher education, and early childhood education.",
        id: "Education",
      },
      {
        description:
          "Governed primarily under HIPAA. Includes hospitals, clinics, health information exchanges, and public health agencies.",
        id: "Health",
      },
      {
        description:
          "Governed under various state and federal statutes. Includes child welfare, social services, and community-based organizations.",
        id: "HumanServices",
        name: "Human Services",
      },
      {
        description:
          "Includes workforce development programs, job training, and employment services.",
        id: "JobCreationAndWorkforceDevelopment",
        name: "Job Creation & Workforce Development",
      },
      {
        description:
          "Governed under state statute and court orders. Includes courts, corrections, and law enforcement agencies.",
        id: "Justice",
      },
      {
        description: "A domain not covered by the other categories.",
        id: "Other",
      },
    ],
  }),
);

export type Domain = z.infer<typeof Domain>;
