import { z } from "zod";
import { Id } from "./Id.js";
import { primaryKey } from "./primaryKey.js";
import { table } from "./table.js";

export const EventType = z
  .object({
    id: Id.meta(primaryKey()),
    name: z.string(),
  })
  .readonly()
  .meta(
    table("event_type", {
      seedData: [
        { id: "agreement_executed", name: "Agreement Executed" },
        { id: "approval_issued", name: "Approval Issued" },
        { id: "output_delivered", name: "Output Delivered" },
        { id: "provisioning_completed", name: "Provisioning Completed" },
        { id: "request_submitted", name: "Request Submitted" },
        { id: "withdrawal", name: "Withdrawal" },
      ],
    }),
  );

export type EventType = z.infer<typeof EventType>;
