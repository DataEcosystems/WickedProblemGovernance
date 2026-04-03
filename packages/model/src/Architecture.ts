import { z } from "zod";
import { Id } from "./Id.js";
import { primaryKey } from "./primaryKey.js";
import { table } from "./table.js";

export const Architecture = z
  .object({
    id: Id.meta(primaryKey()),
    name: z.string(),
  })
  .readonly()
  .meta(
    table("architecture", {
      seedData: [
        { id: "custodial", name: "Custodial" },
        { id: "federated", name: "Federated" },
      ],
    }),
  );

export type Architecture = z.infer<typeof Architecture>;
