import { z } from "zod";
import { Id } from "./Id.js";
import { primaryKey } from "./primaryKey.js";
import { table } from "./table.js";

export const Domain = z
  .object({
    id: Id.meta(primaryKey()),
    name: z.string(),
  })
  .readonly()
  .meta(
    table("domain", {
      seedData: [
        { id: "education", name: "Education" },
        { id: "health", name: "Health" },
        { id: "human_services", name: "Human Services" },
        { id: "justice", name: "Justice" },
      ],
    }),
  );

export type Domain = z.infer<typeof Domain>;
