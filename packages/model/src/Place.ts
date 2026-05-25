import { z } from "zod";
import { Iri } from "./Iri.js";
import { Name } from "./Name.js";
import { ObjectMeta } from "./ObjectMeta.js";
import { PropertyMeta } from "./PropertyMeta.js";

export const Place = z
  .object({
    "@id": Iri,
    "@type": z.literal("Place"),
    containedInPlace: z
      .array(Iri)
      .optional()
      .meta(
        new PropertyMeta({
          description: "Places that contain this place.",
          range: "Place",
          title: "Contained In Place",
        }),
      ),
    name: Name,
  })
  .meta(
    new ObjectMeta({
      "@type": "Place",
      description: "A geographic or administrative location.",
    }),
  );

export type Place = z.infer<typeof Place>;
