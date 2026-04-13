import { z } from "zod";
import { JsonLdBase } from "./JsonLdBase.js";

export const GovernanceEventType = JsonLdBase.extend({
  "@type": z.literal("GovernanceEventType"),
  name: z.string(),
})
  .readonly()
  .meta({
    namedIndividuals: [
      {
        "@id": "wpg:AgreementExecutedGovernanceEventType",
        name: "Agreement Executed",
      },
      {
        "@id": "wpg:ApprovalIssuedGovernanceEventType",
        name: "Approval Issued",
      },
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
      { "@id": "wpg:WithdrawalGovernanceEventType", name: "Withdrawal" },
    ],
  });
