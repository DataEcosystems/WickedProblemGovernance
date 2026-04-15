import { z } from "zod";
import { JsonLdBase } from "./JsonLdBase.js";

export const GovernanceEventType = JsonLdBase.extend({
  "@type": z.literal("GovernanceEventType"),
  name: z.string().meta({
    description: "Human-readable name of the event type.",
    title: "Name",
  }),
})
  .readonly()
  .meta({
    description:
      "A classification of governance events by their function in the authorization process.",
    id: "GovernanceEventType",
    namedIndividuals: [
      {
        "@id": "wpg:AgreementExecutedGovernanceEventType",
        name: "Agreement Executed",
      },
      {
        "@id": "wpg:ApprovalIssuedGovernanceEventType",
        name: "Approval Issued",
      },
      { "@id": "wpg:EscalationGovernanceEventType", name: "Escalation" },
      {
        "@id": "wpg:OutputDeliveredGovernanceEventType",
        name: "Output Delivered",
      },
      {
        "@id": "wpg:ProvisioningCompletedGovernanceEventType",
        name: "Provisioning Completed",
      },
      {
        "@id": "wpg:RequestSubmittedGovernanceEventType",
        name: "Request Submitted",
      },
      { "@id": "wpg:ReviewGovernanceEventType", name: "Review" },
      { "@id": "wpg:WithdrawalGovernanceEventType", name: "Withdrawal" },
    ],
    title: "Governance Event Type",
  });

export type GovernanceEventType = z.infer<typeof GovernanceEventType>;
