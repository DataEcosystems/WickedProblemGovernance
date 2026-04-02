import { z } from "zod";

export const ArtifactType = z.enum([
  "committee_minutes",
  "email",
  "signed_agreement",
]);
export type ArtifactType = z.infer<typeof ArtifactType>;
