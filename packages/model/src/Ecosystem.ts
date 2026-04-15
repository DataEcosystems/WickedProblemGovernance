import { z } from "zod";
import { JsonLdBase } from "./JsonLdBase.js";

export const Ecosystem = JsonLdBase.extend({
  "@type": z.literal("Ecosystem"),
  meanNormalizedBurden: z.number().optional().meta({
    description:
      "Average project normalized burden across projects in this ecosystem.",
    title: "Mean Normalized Burden",
  }),
  meanTimeToValue: z.number().optional().meta({
    description:
      "Average project time to delivered value across projects in this ecosystem.",
    title: "Mean Time to Value",
  }),
  name: z.string().meta({
    description: "Human-readable name of the ecosystem.",
    title: "Name",
  }),
  stdTimeToValue: z.number().optional().meta({
    description:
      "Standard deviation of project time to delivered value across projects in this ecosystem.",
    title: "Std. Dev. Time to Value",
  }),
})
  .readonly()
  .meta({
    description:
      "All projects within a shared geographic and institutional context.",
    id: "Ecosystem",
    title: "Ecosystem",
  });

export type Ecosystem = z.infer<typeof Ecosystem>;
