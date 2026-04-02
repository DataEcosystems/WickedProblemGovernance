import { z } from "zod";
import { ArtifactBase } from "./ArtifactBase.js";

export const EmailArtifact = ArtifactBase.extend({
  type: z.literal("email"),
});

export type EmailArtifact = z.infer<typeof EmailArtifact>;
