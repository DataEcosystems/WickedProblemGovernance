import { z } from "zod";
import { CommitteeMinutesArtifact } from "./CommitteeMinutesArtifact.js";
import { EmailArtifact } from "./EmailArtifact.js";
import { ProvisioningLogArtifact } from "./ProvisioningLogArtifact.js";

export const Artifact = z.discriminatedUnion("type", [
  CommitteeMinutesArtifact,
  EmailArtifact,
  ProvisioningLogArtifact,
]);
