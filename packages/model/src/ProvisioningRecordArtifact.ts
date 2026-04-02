import { z } from "zod";
import { ArtifactBase } from "./ArtifactBase.js";

export const ProvisioningRecordArtifact = ArtifactBase.extend({
  type: z.literal("provisioning_record"),
});

export type ProvisioningRecordArtifact = z.infer<
  typeof ProvisioningRecordArtifact
>;
