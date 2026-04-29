import { z } from "zod";
import { Description } from "./Description.js";
import { JsonLdBase } from "./JsonLdBase.js";
import { Name } from "./Name.js";
import { ObjectMeta } from "./ObjectMeta.js";
import { PropertyMeta } from "./PropertyMeta.js";

export const Ecosystem = JsonLdBase.extend({
  "@type": z.literal("Ecosystem"),
  description: Description.optional(),
  meanNormalizedBurden: z
    .number()
    .optional()
    .meta(
      new PropertyMeta({
        description:
          "Average project normalized burden across projects in this ecosystem.",
        title: "Mean Normalized Burden",
      }),
    ),
  meanTimeToValue: z
    .number()
    .optional()
    .meta(
      new PropertyMeta({
        description:
          "Average project time to delivered value across projects in this ecosystem.",
        title: "Mean Time to Value",
      }),
    ),
  name: Name,
  stdTimeToValue: z
    .number()
    .optional()
    .meta(
      new PropertyMeta({
        description:
          "Standard deviation of project time to delivered value across projects in this ecosystem.",
        title: "Std. Dev. Time to Value",
      }),
    ),
}).meta(
  new ObjectMeta({
    description:
      "All projects within a shared geographic and institutional context.",
    id: "Ecosystem",
  }),
);

export type Ecosystem = z.infer<typeof Ecosystem>;
