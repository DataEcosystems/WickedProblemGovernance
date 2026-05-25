import { z } from "zod";
import { Description } from "./Description.js";
import { Name } from "./Name.js";
import { namedIndividualIriEnum } from "./namedIndividualIriEnum.js";
import { ObjectMeta } from "./ObjectMeta.js";

const namedIndividuals = {
  AgreementExecuted: {
    description:
      "A data-sharing or data-use agreement becomes legally effective through execution by all required parties.",
  },
  ApprovalIssued: {
    description:
      "A governance boundary issues a positive authorization decision.",
  },
  Escalation: {
    description:
      "A governance issue is escalated to a higher authority or broader audience.",
  },
  OutputDelivered: {
    description:
      "An analytic product answering a stakeholder question is delivered.",
  },
  ProvisioningCompleted: {
    description:
      "Data access has been technically provisioned (accounts created, data transferred, query access granted).",
  },
  RequestSubmitted: {
    description:
      "An institutional actor formally initiates a governance authorization process.",
  },
  Review: {
    description:
      "A governance boundary reviews a request or artifact without issuing a final decision.",
  },
  Withdrawal: {
    description:
      "A partner formally or informally withdraws from a governance process.",
  },
} as const;

export const GovernanceEventType = z
  .object({
    "@id": namedIndividualIriEnum(namedIndividuals, "GovernanceEventType"),
    "@type": z.literal("GovernanceEventType"),
    description: Description,
    name: Name,
  })
  .meta(
    new ObjectMeta({
      "@type": "GovernanceEventType",
      description:
        "A classification of governance events by their function in the authorization process.",
      namedIndividuals,
    }),
  );

export type GovernanceEventType = z.infer<typeof GovernanceEventType>;
