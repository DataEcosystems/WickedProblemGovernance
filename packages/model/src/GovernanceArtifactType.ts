import { z } from "zod";
import { Description } from "./Description.js";
import { Name } from "./Name.js";
import { namedIndividualIriEnum } from "./namedIndividualIriEnum.js";
import { ObjectMeta } from "./ObjectMeta.js";

const namedIndividuals = {
  CommitteeMinutes: {
    description:
      "Minutes, agendas, or decision logs from governance committee meetings.",
  },
  Email: {
    description:
      "Email correspondence documenting governance requests, approvals, or decisions.",
  },
  SignedAgreement: {
    description: "A signed legal instrument such as a DSA, DUA, MOU, or SOW.",
  },
} as const;

export const GovernanceArtifactType = z
  .object({
    "@id": namedIndividualIriEnum(namedIndividuals, "GovernanceArtifactType"),
    "@type": z.literal("GovernanceArtifactType"),
    description: Description,
    name: Name,
  })
  .meta(
    new ObjectMeta({
      "@type": "GovernanceArtifactType",
      description:
        "A classification of governance artifacts by their documentary form.",
      namedIndividuals,
    }),
  );

export type GovernanceArtifactType = z.infer<typeof GovernanceArtifactType>;
