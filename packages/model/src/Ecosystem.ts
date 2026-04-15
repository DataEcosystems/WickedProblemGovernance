import { z } from "zod";
import { JsonLdBase } from "./JsonLdBase.js";

export const Ecosystem = JsonLdBase.extend({
  "@type": z.literal("Ecosystem"),
  meanNormalizedBurden: z.number().optional(),
  meanTimeToValue: z.number().optional(),
  name: z.string(),
  stdTimeToValue: z.number().optional(),
})
  .readonly()
  .meta({
    id: "Ecosystem",
  });

export type Ecosystem = z.infer<typeof Ecosystem>;
