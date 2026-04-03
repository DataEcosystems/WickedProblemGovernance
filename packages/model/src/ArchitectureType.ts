import { z } from "zod";
import { Id } from "./Id.js";
import { primaryKey } from "./primaryKey.js";
import { table } from "./table.js";

export const ArchitectureType = z
  .object({
    id: Id.meta(primaryKey()),
    name: z.string(),
  })
  .readonly()
  .meta(
    table("architecture_type", {
      seedData: [
        { id: "custodial", name: "Custodial" },
        { id: "federated", name: "Federated" },
      ],
    }),
  );

export type ArchitectureType = z.infer<typeof ArchitectureType>;
