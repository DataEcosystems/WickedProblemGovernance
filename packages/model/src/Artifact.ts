import { z } from "zod";
import { CommitteeMinutesArtifact } from "./CommitteeMinutesArtifact.js";
import { EmailArtifact } from "./EmailArtifact.js";
import { ProvisioningRecordArtifact } from "./ProvisioningRecordArtifact.js";

export const Artifact = z.discriminatedUnion("type", [
  CommitteeMinutesArtifact,
  EmailArtifact,
  ProvisioningRecordArtifact,
]);
