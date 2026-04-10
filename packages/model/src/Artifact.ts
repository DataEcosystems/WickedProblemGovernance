import { z } from "zod";
import { ArtifactType } from "./ArtifactType.js";
import { Iri } from "./Iri.js";
import { JsonLdBase } from "./JsonLdBase.js";
import { Partner } from "./Partner.js";
import { range } from "./range.js";

export const Artifact = JsonLdBase.extend({
  "@type": z.literal("Artifact"),
  artifactType: Iri.meta(range(ArtifactType)),
  partners: z.array(Iri).readonly().meta(range(Partner)),
}).readonly();

export type Artifact = z.infer<typeof Artifact>;
