import { z } from "zod";
import { Description } from "./Description.js";
import { JsonLdBase } from "./JsonLdBase.js";
import { Name } from "./Name.js";
import { ObjectMeta } from "./ObjectMeta.js";

export const GovernanceEventType = JsonLdBase.extend({
  "@type": z.literal("GovernanceEventType"),
  description: Description,
  name: Name,
})
  .readonly()
  .meta(
    new ObjectMeta({
      description:
        "A classification of governance events by their function in the authorization process.",
      id: "GovernanceEventType",
      namedIndividuals: [
        {
          description:
            "A data-sharing or data-use agreement becomes legally effective through execution by all required parties.",
          id: "AgreementExecuted",
          name: "Agreement Executed",
        },
        {
          description:
            "A governance boundary issues a positive authorization decision.",
          id: "ApprovalIssued",
          name: "Approval Issued",
        },
        {
          description:
            "A governance issue is escalated to a higher authority or broader audience.",
          id: "Escalation",
        },
        {
          description:
            "An analytic product answering a stakeholder question is delivered.",
          id: "OutputDelivered",
          name: "Output Delivered",
        },
        {
          description:
            "Data access has been technically provisioned (accounts created, data transferred, query access granted).",
          id: "ProvisioningCompleted",
          name: "Provisioning Completed",
        },
        {
          description:
            "An institutional actor formally initiates a governance authorization process.",
          id: "RequestSubmitted",
          name: "Request Submitted",
        },
        {
          description:
            "A governance boundary reviews a request or artifact without issuing a final decision.",
          id: "Review",
        },
        {
          description:
            "A partner formally or informally withdraws from a governance process.",
          id: "Withdrawal",
        },
      ],
      title: "Governance Event Type",
    }),
  );

export type GovernanceEventType = z.infer<typeof GovernanceEventType>;
