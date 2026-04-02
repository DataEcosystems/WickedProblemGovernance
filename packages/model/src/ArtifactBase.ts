import { z } from "zod";
import { Id } from "./Id.js";

export const ArtifactBase = z.object({
  id: Id,
});
