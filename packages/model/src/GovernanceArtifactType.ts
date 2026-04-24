import { z } from "zod";
import { Description } from "./Description.js";
import { JsonLdBase } from "./JsonLdBase.js";
import { Name } from "./Name.js";
import { ObjectMeta } from "./ObjectMeta.js";

export const GovernanceArtifactType = JsonLdBase.extend({
  "@type": z.literal("GovernanceArtifactType"),
  description: Description,
  name: Name,
})
  .readonly()
  .meta(
    new ObjectMeta({
      description:
        "A classification of governance artifacts by their documentary form.",
      id: "GovernanceArtifactType",
      namedIndividuals: [
        {
          description:
            "Minutes, agendas, or decision logs from governance committee meetings.",
          id: "CommitteeMinutes",
          name: "Committee Minutes",
        },
        {
          description:
            "Email correspondence documenting governance requests, approvals, or decisions.",
          id: "Email",
        },
        {
          description:
            "A signed legal instrument such as a DSA, DUA, MOU, or SOW.",
          id: "SignedAgreement",
          name: "Signed Agreement",
        },
      ],
      title: "Governance Artifact Type",
    }),
  );

export type GovernanceArtifactType = z.infer<typeof GovernanceArtifactType>;
