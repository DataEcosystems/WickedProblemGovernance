import { z } from "zod";
import { Id } from "./Id.js";
import { primaryKey } from "./primaryKey.js";
import { table } from "./table.js";

export const ArtifactType = z
  .object({
    id: Id.meta(primaryKey()),
    name: z.string(),
  })
  .readonly()
  .meta(
    table("artifact_type", {
      seedData: [
        { id: "committee_minutes", name: "Committee Minutes" },
        { id: "email", name: "Email" },
        { id: "signed_agreement", name: "Signed Agreement" },
      ],
    }),
  );

export type ArtifactType = z.infer<typeof ArtifactType>;
