import { z } from "zod";
import { JsonLdBase } from "./JsonLdBase.js";

export const EventType = JsonLdBase.extend({
  "@type": z.literal("EventType"),
  name: z.string(),
})
  .readonly()
  .meta({
    namedIndividuals: [
      { "@id": "wpg:AgreementExecutedEventType", name: "Agreement Executed" },
      { "@id": "wpg:ApprovalIssuedEventType", name: "Approval Issued" },
      { "@id": "wpg:OutputDeliveredEventType", name: "Output Delivered" },
      {
        "@id": "wpg:ProvisioningCompletedEventType",
        name: "Provisioning Completed",
      },
      { "@id": "wpg:RequestSubmittedEventType", name: "Request Submitted" },
      { "@id": "wpg:WithdrawalEventType", name: "Withdrawal" },
    ],
  });

export type EventType = z.infer<typeof EventType>;
