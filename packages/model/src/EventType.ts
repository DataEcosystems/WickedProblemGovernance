import { z } from "zod";

export const EventType = z.enum([
  "agreement_executed",
  "approval_issued",
  "request_submitted",
]);

export type EventType = z.infer<typeof EventType>;
