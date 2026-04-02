import { z } from "zod";
import { ArtifactBase } from "./ArtifactBase.js";

export const ProvisioningLogArtifact = ArtifactBase.extend({
  type: z.literal("provisioning_log"),
});

export type ProvisioningLogArtifact = z.infer<typeof ProvisioningLogArtifact>;
