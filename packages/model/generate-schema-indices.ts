#!/usr/bin/env npm exec tsx --

import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const thisDirectoryPath = path.dirname(url.fileURLToPath(import.meta.url));

const schemaNames = [
  "Architecture",
  "Domain",
  "Ecosystem",
  "GovernanceArtifact",
  "GovernanceArtifactType",
  "GovernanceEpisode",
  "GovernanceEpisodeType",
  "GovernanceEvent",
  "GovernanceEventType",
  "InstitutionalLayer",
  "Organization",
  "Project",
  "ProjectPartner",
  "ProjectPartnerRole",
];

fs.writeFileSync(
  path.join(thisDirectoryPath, "src", "index.ts"),
  `\
export { default as contextJson } from "./context.json" with { type: "json" };
export * from "./ObjectMeta.js";
export * from "./Resource.js";
export * from "./schemas.js";
export * from "./schemasByName.js";

${schemaNames.map((schemaName) => `export * from "./${schemaName}.js";`).join("\n")}
`,
);

fs.writeFileSync(
  path.join(thisDirectoryPath, "src", "schemas.ts"),
  `\
${schemaNames.map((schemaName) => `import { ${schemaName} } from "./${schemaName}.js";`).join("\n")}

export const schemas = [${schemaNames.join(", ")}] as const;
`,
);

fs.writeFileSync(
  path.join(thisDirectoryPath, "src", "schemasByName.ts"),
  `\
${schemaNames.map((schemaName) => `import { ${schemaName} } from "./${schemaName}.js";`).join("\n")}

export const schemasByName = {${schemaNames.join(", ")}};
`,
);
