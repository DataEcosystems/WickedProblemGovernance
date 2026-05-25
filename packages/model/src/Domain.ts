import { z } from "zod";
import { Description } from "./Description.js";
import { Name } from "./Name.js";
import { namedIndividualIriEnum } from "./namedIndividualIriEnum.js";
import { ObjectMeta } from "./ObjectMeta.js";

const namedIndividuals = {
  Education: {
    description:
      "Governed primarily under FERPA. Includes K-12, higher education, and early childhood education.",
  },
  Health: {
    description:
      "Governed primarily under HIPAA. Includes hospitals, clinics, health information exchanges, and public health agencies.",
  },
  HumanServices: {
    description:
      "Governed under various state and federal statutes. Includes child welfare, social services, and community-based organizations.",
  },
  JobCreationAndWorkforceDevelopment: {
    description:
      "Includes workforce development programs, job training, and employment services.",
  },
  Justice: {
    description:
      "Governed under state statute and court orders. Includes courts, corrections, and law enforcement agencies.",
  },
  Other: {
    description: "A domain not covered by the other categories.",
  },
} as const;

export const Domain = z
  .object({
    "@id": namedIndividualIriEnum(namedIndividuals, "Domain"),
    "@type": z.literal("Domain"),
    description: Description,
    name: Name,
  })
  .meta(
    new ObjectMeta({
      "@type": "Domain",
      description:
        "The regulatory and institutional domain of a partner organization.",
      namedIndividuals,
    }),
  );

export type Domain = z.infer<typeof Domain>;
