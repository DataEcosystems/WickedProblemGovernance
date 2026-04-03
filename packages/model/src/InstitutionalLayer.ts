import { z } from "zod";
import { Id } from "./Id.js";
import { primaryKey } from "./primaryKey.js";
import { table } from "./table.js";

export const InstitutionalLayer = z
  .object({
    id: Id.meta(primaryKey()),
    name: z.string(),
  })
  .readonly()
  .meta(
    table("institutional_layer", {
      seedData: [
        { id: "local", name: "Local" },
        { id: "regional", name: "Regional" },
        { id: "state", name: "State" },
      ],
    }),
  );

export type InstitutionalLayer = z.infer<typeof InstitutionalLayer>;
