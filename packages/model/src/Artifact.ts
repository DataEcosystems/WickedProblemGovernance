import { z } from "zod";
import { ArtifactType } from "./ArtifactType.js";
import { Id } from "./Id.js";

export const Artifact = z.object({
  id: Id,
  type: ArtifactType,
});

export type Artifact = z.infer<typeof Artifact>;
