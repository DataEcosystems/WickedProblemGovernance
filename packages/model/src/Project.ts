import { z } from "zod";
import { Architecture } from "./Architecture.js";
import { Description } from "./Description.js";
import { Ecosystem } from "./Ecosystem.js";
import { Iri } from "./Iri.js";
import { Name } from "./Name.js";
import { ObjectMeta } from "./ObjectMeta.js";
import { Place } from "./Place.js";
import { PropertyMeta } from "./PropertyMeta.js";
import { Timestamp } from "./Timestamp.js";

export const Project = z
  .object({
    "@id": Iri,
    "@type": z.literal("Project"),
    architecture: Architecture.shape["@id"].meta(
      new PropertyMeta({
        description:
          "The data architecture governing how records are held and linked.",
        range: Architecture,
        title: "Architecture",
      }),
    ),
    areaServed: Place.shape["@id"].optional().meta(
      new PropertyMeta({
        description: "The geographic area served by this project.",
        range: Place,
        title: "Area Served",
      }),
    ),
    deliveryCouplingLoad: z
      .number()
      .optional()
      .meta(
        new PropertyMeta({
          description: "The coupling load of the delivery episode.",
          title: "Delivery Coupling Load",
        }),
      ),
    deliveryEpisode: Iri.optional().meta(
      new PropertyMeta({
        description:
          "The episode whose delivered value corresponds to the first data product.",
        range: "GovernanceEpisode",
        title: "Delivery Episode",
      }),
    ),
    description: Description.optional(),
    ecosystem: Ecosystem.shape["@id"].optional().meta(
      new PropertyMeta({
        description: "The ecosystem this project belongs to.",
        range: Ecosystem,
        title: "Ecosystem",
      }),
    ),
    episodeCount: z
      .number()
      .int()
      .meta(
        new PropertyMeta({
          description: "Number of governance episodes in this project.",
          title: "Episode Count",
        }),
      ),
    name: Name,
    normalizedBurden: z
      .number()
      .optional()
      .meta(
        new PropertyMeta({
          description:
            "Project time to delivered value per unit of delivery-episode coupling load.",
          title: "Normalized Burden",
        }),
      ),
    partnerCount: z
      .number()
      .int()
      .meta(
        new PropertyMeta({
          description:
            "Number of institutional actors contributing data in the delivery episode.",
          title: "Partner Count",
        }),
      ),
    stallFraction: z.number().meta(
      new PropertyMeta({
        description: "Proportion of episodes in the project that stalled.",
        title: "Stall Fraction",
      }),
    ),
    stewardPresence: z.boolean().meta(
      new PropertyMeta({
        description:
          "Whether the project includes an authorized domain representative who mediates governance requests.",
        title: "Steward Presence",
      }),
    ),
    t0: Timestamp.optional().meta(
      new PropertyMeta({
        description:
          "The earliest episode initiation timestamp across all episodes in the project.",
        title: "Project Start",
      }),
    ),
    tau2: z
      .number()
      .optional()
      .meta(
        new PropertyMeta({
          description:
            "Calendar days from the earliest episode initiation to delivery of the first analytic output.",
          title: "Time to Delivered Value",
        }),
      ),
  })
  .meta(
    new ObjectMeta({
      "@type": "Project",
      description:
        "A group of episodes sharing a common governance boundary design and data architecture.",
    }),
  );

export type Project = z.infer<typeof Project>;
