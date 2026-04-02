import { z } from "zod";
import { Id } from "./Id.js";

export const InstitutionalLayer = z.object({
  id: Id,
  name: z.string(),
});

export type InstitutionalLayer = z.infer<typeof InstitutionalLayer>;
