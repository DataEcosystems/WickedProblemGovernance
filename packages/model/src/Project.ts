import { z } from "zod";
import { Architecture } from "./Architecture.js";
import { Ecosystem } from "./Ecosystem.js";
import { Iri } from "./Iri.js";
import { JsonLdBase } from "./JsonLdBase.js";
import { range } from "./range.js";
import { Timestamp } from "./Timestamp.js";

export const Project = JsonLdBase.extend({
  "@type": z.literal("Project"),
  architecture: Iri.meta({
    description:
      "The data architecture governing how records are held and linked.",
    ...range(Architecture),
    title: "Architecture",
  }),
  deliveryCouplingProxy: z.number().optional().meta({
    description: "The coupling proxy of the delivery episode.",
    title: "Delivery Coupling Proxy",
  }),
  deliveryEpisode: Iri.optional().meta({
    description:
      "The episode whose delivered value corresponds to the first data product.",
    ...range("GovernanceEpisode"),
    title: "Delivery Episode",
  }),
  ecosystem: Iri.meta({
    description: "The ecosystem this project belongs to.",
    ...range(Ecosystem),
    title: "Ecosystem",
  }),
  episodeCount: z.number().int().meta({
    description: "Number of governance episodes in this project.",
    title: "Episode Count",
  }),
  normalizedBurden: z.number().optional().meta({
    description:
      "Project time to delivered value per unit of delivery-episode coupling load.",
    title: "Normalized Burden",
  }),
  partnerCount: z.number().int().meta({
    description:
      "Number of institutional actors contributing data in the delivery episode.",
    title: "Partner Count",
  }),
  stallFraction: z.number().meta({
    description: "Proportion of episodes in the project that stalled.",
    title: "Stall Fraction",
  }),
  stewardPresence: z.boolean().meta({
    description:
      "Whether the project includes an authorized domain representative who mediates governance requests.",
    title: "Steward Presence",
  }),
  t0: Timestamp.optional().meta({
    description:
      "The earliest episode initiation timestamp across all episodes in the project.",
    title: "Project Start",
  }),
  tau2: z.number().optional().meta({
    description:
      "Calendar days from the earliest episode initiation to delivery of the first analytic output.",
    title: "Time to Delivered Value",
  }),
})
  .readonly()
  .meta({
    description:
      "A group of episodes sharing a common governance boundary design and data architecture.",
    id: "Project",
    title: "Project",
  });

export type Project = z.infer<typeof Project>;
