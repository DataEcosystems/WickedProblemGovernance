import { z } from "zod";
import { Id } from "./index.js";

export const Partner = z.object({
  domainId: Id,
  id: Id,
  layerId: Id,
  name: z.string(),
});

export type Partner = z.infer<typeof Partner>;
