import { z } from "zod";
import { ArtifactBase } from "./ArtifactBase.js";

export const CommitteeMinutesArtifact = ArtifactBase.extend({
  type: z.literal("committee_minutes"),
});

export type CommitteeMinutesArtifact = z.infer<typeof CommitteeMinutesArtifact>;
