#!/usr/bin/env npm exec tsx --

import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const VERSION = "0.0.0";

const externalDependencies = {
  "@types/mdast": "~4.0.4",
  "cmd-ts": "~0.15.0",
  jsonld: "~9.0.0",
  pino: "~10.3.1",
  "pino-pretty": "~13.1.3",
  "remark-frontmatter": "~5.0.0",
  "remark-gfm": "~4.0.0",
  "remark-stringify": "~11.0.0",
  unified: "~11.0.5",
  zod: "~4.1.12",
} as const;

type PackageName = "model";

interface Workspace {
  bin?: Record<string, string>;
  dependencies?: {
    external?: readonly (keyof typeof externalDependencies)[];
    internal?: readonly PackageName[];
  };
  devDependencies?: {
    external?: readonly (keyof typeof externalDependencies)[];
    internal?: readonly PackageName[];
  };
}

const packages: Readonly<Record<PackageName, Workspace>> = {
  model: {
    dependencies: {
      external: ["zod"],
    },
  },
} as const;

const workspaces = {
  apps: {
    cli: {
      bin: {
        wpg: "dist/cli.js",
      },
      dependencies: {
        external: [
          "@types/mdast",
          "cmd-ts",
          "jsonld",
          "pino",
          "pino-pretty",
          "remark-frontmatter",
          "remark-gfm",
          "remark-stringify",
          "zod",
        ],
        internal: ["model"],
      },
    },
  } satisfies Record<string, Workspace>,
  packages,
} as const;

const thisDirectoryPath = path.dirname(url.fileURLToPath(import.meta.url));

for (const [workspacesDirectoryAny, workspaces_] of Object.entries(
  workspaces,
)) {
  const workspacesDirectoryName = workspacesDirectoryAny as "apps" | "packages";
  for (const [workspaceName, workspaceAny] of Object.entries(workspaces_)) {
    const workspace = workspaceAny as Workspace;

    const packageDirectoryPath = path.join(
      thisDirectoryPath,
      workspacesDirectoryName,
      workspaceName,
    );

    fs.mkdirSync(packageDirectoryPath, { recursive: true });

    const files = new Set<string>();
    if (fs.existsSync(path.join(packageDirectoryPath, "README.md"))) {
      files.add("README.md");
    }
    const srcDirectoryPath = path.join(packageDirectoryPath, "src");
    if (fs.existsSync(srcDirectoryPath)) {
      for (const dirent of fs.readdirSync(srcDirectoryPath, {
        withFileTypes: true,
        recursive: true,
      })) {
        if (!dirent.isFile()) {
          continue;
        }

        if (dirent.name.endsWith(".json")) {
          files.add(
            path.join(
              "dist",
              path.relative(srcDirectoryPath, dirent.parentPath),
              dirent.name,
            ),
          );
        }

        if (dirent.name.endsWith(".ts")) {
          for (const fileNameGlob of ["*.js", "*.d.ts"]) {
            files.add(
              path.join(
                "dist",
                path.relative(srcDirectoryPath, dirent.parentPath),
                fileNameGlob,
              ),
            );
          }
        }
      }
    }

    fs.writeFileSync(
      path.join(packageDirectoryPath, "package.json"),
      `${JSON.stringify(
        {
          bin: workspace.bin,
          dependencies: {
            ...(workspace.dependencies?.internal ?? []).toSorted().reduce(
              (map, packageName) => {
                map[`@wpg/${packageName}`] = VERSION;
                return map;
              },
              {} as Record<string, string>,
            ),
            ...(workspace.dependencies?.external ?? []).toSorted().reduce(
              (map, packageName) => {
                map[packageName] = externalDependencies[packageName];
                return map;
              },
              {} as Record<string, string>,
            ),
          },
          devDependencies: {
            ...(workspace.devDependencies?.internal ?? []).toSorted().reduce(
              (map, packageName) => {
                map[`@wpg/${packageName}`] = "*";
                return map;
              },
              {} as Record<string, string>,
            ),
            ...(workspace.devDependencies?.external ?? []).toSorted().reduce(
              (map, packageName) => {
                map[packageName] = externalDependencies[packageName];
                return map;
              },
              {} as Record<string, string>,
            ),
          },
          author: "Asemio",
          files: files.size > 0 ? [...files].sort() : undefined,
          license: "Apache-2.0",
          main: files.size > 0 ? "./dist/index.js" : undefined,
          name: `@wpg/${workspaceName}`,
          private: true,
          repository: {
            type: "git",
            url: "git+https://github.com/asemio/WickedProblemGovernance.git",
          },
          scripts: {
            build: `tsc -b${
              workspace.bin
                ? ` && ${Object.values(workspace.bin)
                    .map((bin) => `chmod +x ${bin}`)
                    .join(" && ")}`
                : ""
            }`,
            clean: "rimraf dist tsconfig.tsbuildinfo",
            depcheck: "depcheck .",
          },
          type: "module",
          version: VERSION,
        },
        undefined,
        2,
      )}\n`,
    );

    fs.writeFileSync(
      path.resolve(packageDirectoryPath, "tsconfig.json"),
      JSON.stringify(
        {
          compilerOptions: {
            composite: true,
            declaration: true,
            // declarationMap:
            //   workspacesDirectoryName === "packages" ? true : undefined,
            exactOptionalPropertyTypes: false,
            forceConsistentCasingInFileNames: true,
            lib: ["ES2022"],
            module: "nodenext",
            moduleResolution: "nodenext",
            noUncheckedIndexedAccess: false,
            outDir: "dist",
            resolveJsonModule: true,
            rootDir: "src",
            // sourceMap:
            //   workspacesDirectoryName === "packages" ? true : undefined,
            target: "es2022",
            types:
              workspacesDirectoryName === "apps" && workspaceName === "cli"
                ? ["node"]
                : undefined,
          },
          extends: ["@tsconfig/strictest/tsconfig.json"],
          include: ["src/**/*.ts", "src/**/*.json"],
        },
        undefined,
        2,
      ),
    );
  }
}

// Root tsconfig.json
fs.writeFileSync(
  path.join(thisDirectoryPath, "tsconfig.json"),
  JSON.stringify(
    {
      files: [],
      references: Object.entries(workspaces).flatMap(
        ([workspacesDirectoryName, workspaces]) =>
          Object.keys(workspaces).map((workspaceName) => ({
            path: `${workspacesDirectoryName}/${workspaceName}`,
          })),
      ),
    },
    undefined,
    2,
  ),
);
