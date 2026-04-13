#!/usr/bin/env npm exec tsx --

import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const VERSION = "0.0.0";

const externalDependencies = {
  "cmd-ts": "~0.15.0",
  zod: "~4.1.12",
} as const;

type PackageName = "model" | "transformers";

interface Workspace {
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

  transformers: {
    dependencies: {
      external: ["zod"],
      internal: ["transformers"],
    },
  },
} as const;

const workspaces = {
  apps: {
    cli: {
      dependencies: {
        external: ["cmd-ts"],
        internal: ["model", "transformers"],
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
    if (workspaceName !== "forms" && fs.existsSync(srcDirectoryPath)) {
      for (const dirent of fs.readdirSync(srcDirectoryPath, {
        withFileTypes: true,
        recursive: true,
      })) {
        if (!dirent.name.endsWith(".ts") || !dirent.isFile()) {
          continue;
        }
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

    fs.writeFileSync(
      path.join(packageDirectoryPath, "package.json"),
      `${JSON.stringify(
        {
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
          files: files.size > 0 ? [...files].sort() : undefined,
          main: files.size > 0 ? "./dist/index.js" : undefined,
          name: `@wpg/${workspaceName}`,
          private: true,
          repository: {
            type: "git",
            url: "git+https://github.com/asemio/WickedProblemGovernance.git",
          },
          scripts: {
            clean: "rimraf dist",
            build: "tsc -b",
            depcheck: "depcheck .",
          },
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
            declaration:
              workspacesDirectoryName === "packages" ? true : undefined,
            // declarationMap:
            //   workspacesDirectoryName === "packages" ? true : undefined,
            exactOptionalPropertyTypes: false,
            forceConsistentCasingInFileNames: true,
            lib: ["ES2022"],
            module: "node16",
            moduleResolution: "node16",
            noUncheckedIndexedAccess: false,
            outDir: "dist",
            rootDir: "src",
            // sourceMap:
            //   workspacesDirectoryName === "packages" ? true : undefined,
            target: "es2022",
          },
          extends: ["@tsconfig/strictest/tsconfig.json"],
          include: ["src/**/*.ts"],
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
