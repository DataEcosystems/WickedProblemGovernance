import { z } from "zod";
import { Description } from "./Description.js";
import { Iri } from "./Iri.js";
import { Name } from "./Name.js";
import { ObjectMeta } from "./ObjectMeta.js";
import { Place } from "./Place.js";
import { PropertyMeta } from "./PropertyMeta.js";

export const Ecosystem = z
  .object({
    "@id": Iri,
    "@type": z.literal("Ecosystem"),
    description: Description.optional(),
    location: Iri.optional().meta(
      new PropertyMeta({
        description: "The geographic location associated with this ecosystem.",
        range: Place,
        title: "Location",
      }),
    ),
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
  })
  .meta(
    new ObjectMeta({
      "@type": "Ecosystem",
      description:
        "All projects within a shared geographic and institutional context.",
    }),
  );

export type Ecosystem = z.infer<typeof Ecosystem>;
