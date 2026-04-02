import { z } from "zod";
import { Id } from "./Id.js";

export const Domain = z.object({
  id: Id,
  name: z.string(),
});

export type Domain = z.infer<typeof Domain>;
