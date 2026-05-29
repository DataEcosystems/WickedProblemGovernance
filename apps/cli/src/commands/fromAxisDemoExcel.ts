import ExcelJS from "@protobi/exceljs";
import {
  GovernanceEpisode,
  Organization,
  OrganizationRole,
  Project,
  type Resource,
  timestampToDate,
} from "@wpg/model";
import { differenceInDays } from "date-fns";

const BASE_IRI = "https://purl.dataecosystems.org/wpg/data/axis-demo/";

function deserializeExcelCellValue(
  cellValue: ExcelJS.CellValue,
): bigint | boolean | Date | null | number | string {
  if (cellValue == null) {
    return null;
  }
  switch (typeof cellValue) {
    case "bigint":
    case "boolean":
    case "number":
    case "string":
      return cellValue;
    case "object":
      if (cellValue instanceof Date) {
        return cellValue;
      }
      if ((cellValue as any)["text"]) {
        return (cellValue as any).text;
      }
      throw new Error(`not implemented: ${JSON.stringify(cellValue)}`);
  }
}

function encodeIriComponent(iriComponent: string): string {
  return Buffer.from(iriComponent).toString("base64url");
}

function transformGovernanceEpisodeWorksheet({
  governanceEpisodeOrganizations,
  worksheet,
}: {
  governanceEpisodeOrganizations: Record<
    GovernanceEpisode["@id"],
    readonly Organization["@id"][]
  >;
  worksheet: ExcelJS.Worksheet;
}): readonly GovernanceEpisode[] {
  const governanceEpisodes: GovernanceEpisode[] = [];
  const projectGovernanceEpisodeCounts: Record<Project["@id"], number> = {};
  for (const row of worksheetRows(worksheet)) {
    const governanceEpisodeIri = row["@id"] as string;

    const organizations =
      governanceEpisodeOrganizations[governanceEpisodeIri] ?? [];
    if (organizations.length === 0) {
      throw new Error(
        `governance episode ${governanceEpisodeIri} has no associated organizations`,
      );
    }

    const projectIri = row["project"] as string;

    projectGovernanceEpisodeCounts[projectIri] =
      (projectGovernanceEpisodeCounts[projectIri] ?? 0) + 1;

    const partialGovernanceEpisode: Partial<GovernanceEpisode> = {
      "@id": governanceEpisodeIri,
      "@type": "GovernanceEpisode",
      couplingLoad: row["couplingLoad"] as number,
      domainHeterogeneity: row["domainHeterogeneity"] as number,
      governanceEpisodeType: row[
        "governanceEpisodeType"
      ] as GovernanceEpisode["governanceEpisodeType"],
      layerHeterogeneity: row["layerHeterogeneity"] as number,
      name: row["name"] as string,
      normalizedBurden: row["normalizedBurden"] as number | undefined,
      partnerCount: organizations.length,
      project: projectIri,
      stall: row["stall"]?.toString().toUpperCase() === "TRUE",
      t0: row["t0"] as string,
      t1: row["t1"] as string | undefined,
      t2: row["t1"] as string | undefined,
      tau1: row["tau1"] as number | undefined,
      tau2: row["tau2"] as number | undefined,
    };

    governanceEpisodes.push(GovernanceEpisode.parse(partialGovernanceEpisode));
  }
  return governanceEpisodes;
}

function transformGovernanceEpisodeOrganizationWorksheet({
  organizationIris,
  worksheet,
}: {
  organizationIris: Set<Organization["@id"]>;
  worksheet: ExcelJS.Worksheet;
}): Record<GovernanceEpisode["@id"], readonly Organization["@id"][]> {
  const result: Record<GovernanceEpisode["@id"], Organization["@id"][]> = {};
  for (const row of worksheetRows(worksheet)) {
    if (!row["episode"] || !row["organization"]) {
      continue;
    }

    const episodeIri = row["episode"] as string;
    const organizationIri = row["organization"] as string;
    if (!organizationIris.has(organizationIri)) {
      throw new Error(
        `GovernanceEpisodeOrganization row references missing organization IRI ${organizationIri}`,
      );
    }

    result[episodeIri] = (result[episodeIri] ?? []).concat(organizationIri);
  }
  return result;
}

function transformOrganizationWorksheet({
  organizationRolesByOrganizationIri,
  worksheet,
}: {
  organizationRolesByOrganizationIri: Record<
    Organization["@id"],
    readonly OrganizationRole[]
  >;
  worksheet: ExcelJS.Worksheet;
}): readonly Organization[] {
  const organizations: Organization[] = [];
  for (const row of worksheetRows(worksheet)) {
    if (!row["@id"]) {
      continue;
    }
    const organizationIri = row["@id"] as string;

    const organizationRoles =
      organizationRolesByOrganizationIri[organizationIri] ?? [];
    if (organizationRoles.length === 0) {
      throw new Error(`organization ${organizationIri} has no roles`);
    }

    const partialOrganization: Partial<Organization> = {
      "@id": organizationIri,
      "@type": "Organization",
      domains: [organizationRoles[0].domain],
      institutionalLayer:
        "https://purl.dataecosystems.org/wpg/cbox#LocalInstitutionalLayer",
      memberOf: organizationRoles.map(
        (organizationRole) => organizationRole["@id"],
      ),
      name: row["name"] as string,
    };

    organizations.push(Organization.parse(partialOrganization));
  }
  return organizations;
}

function transformOrganizationRoleWorksheet(
  worksheet: ExcelJS.Worksheet,
): Record<Organization["@id"], readonly OrganizationRole[]> {
  function organizationRoleIri(
    organizationIri: Organization["@id"],
    projectId: Project["@id"],
  ): OrganizationRole["@id"] {
    return `${BASE_IRI}OrganizationRole/${encodeIriComponent(organizationIri)}/${encodeIriComponent(projectId)}`;
  }

  const organizationRolesByOrganizationIri: Record<
    Organization["@id"],
    OrganizationRole[]
  > = {};
  for (const row of worksheetRows(worksheet)) {
    if (!row["organization"] || !row["memberOf"]) {
      continue;
    }

    const organizationIri = row["organization"] as string;
    const projectId = row["memberOf"] as string;

    const partialOrganizationRole: Partial<OrganizationRole> = {
      "@id": organizationRoleIri(organizationIri, projectId),
      "@type": "OrganizationRole",
      domain: row["domain"] as OrganizationRole["domain"] | undefined,
      memberOf: projectId,
      roleName: row["roleName"] as OrganizationRole["roleName"],
    };

    for (const [predicate, targetOrganizationIris] of [
      [
        "contributesDataTo",
        row["contributesDataTo"] ? [row["contributesDataTo"]] : [],
      ],
      [
        "coordinates",
        row["coordinates"] ? JSON.parse(row["coordinates"] as string) : [],
      ],
      [
        "providesTechnicalAssistanceTo",
        row["providesTechnicalAssistanceTo"]
          ? [row["providesTechnicalAssistanceTo"]]
          : [],
      ],
    ] as const) {
      for (const targetOrganizationIri of targetOrganizationIris) {
        partialOrganizationRole[predicate] = (
          partialOrganizationRole[predicate] ?? []
        ).concat(organizationRoleIri(targetOrganizationIri, projectId));
      }
    }

    const organizationRole = OrganizationRole.parse(partialOrganizationRole);
    organizationRolesByOrganizationIri[organizationIri] = (
      organizationRolesByOrganizationIri[organizationIri] ?? []
    ).concat(organizationRole);
  }

  return organizationRolesByOrganizationIri;
}

function* transformProjectWorksheet({
  governanceEpisodes,
  worksheet,
}: {
  governanceEpisodes: readonly GovernanceEpisode[];
  worksheet: ExcelJS.Worksheet;
}): Iterable<Project> {
  for (const row of worksheetRows(worksheet)) {
    if (!row["@id"]) {
      continue;
    }

    const projectIri = row["@id"] as string;
    const projectGovernanceEpisodes = governanceEpisodes.filter(
      (governanceEpisode) => governanceEpisode.project === projectIri,
    );

    const deliveryEpisode = projectGovernanceEpisodes.find(
      (governanceEpisode) =>
        governanceEpisode.governanceEpisodeType ===
        "https://purl.dataecosystems.org/wpg/cbox#ProductGovernanceEpisodeType",
    );

    const governanceEpisodeT0s = projectGovernanceEpisodes
      .filter((governanceEpisode) => governanceEpisode.t0)
      .map((governanceEpisode) => ({
        date: timestampToDate(governanceEpisode.t0!),
        timestamp: governanceEpisode.t0!,
      }))
      .sort((left, right) => left.date.getTime() - right.date.getTime());

    const partialProject: Partial<Project> = {
      "@id": projectIri,
      "@type": "Project",
      architecture: row["architecture"] as Project["architecture"],
      deliveryCouplingLoad: deliveryEpisode?.couplingLoad,
      deliveryEpisode: deliveryEpisode?.["@id"],
      episodeCount: projectGovernanceEpisodes.length,
      name: row["name"] as string,
      stallFraction:
        projectGovernanceEpisodes.reduce(
          (acc, governanceEpisode) => (governanceEpisode.stall ? acc + 1 : acc),
          0,
        ) / governanceEpisodes.length,
      t0: governanceEpisodeT0s[0].timestamp,
      t2: deliveryEpisode?.t2,
      tau2: deliveryEpisode?.t2
        ? differenceInDays(
            timestampToDate(deliveryEpisode?.t2),
            governanceEpisodeT0s[0].date,
          )
        : undefined,
    };

    yield Project.parse(partialProject);
  }
}

function* worksheetRows(
  worksheet: ExcelJS.Worksheet,
): Iterable<Record<string, ReturnType<typeof deserializeExcelCellValue>>> {
  const headerRow = worksheet.getRow(1);
  const headers: string[] = [];
  headerRow.eachCell((cell, colNumber) => {
    headers[colNumber] = String(cell.value);
  });

  for (let rowNumber = 2; rowNumber <= worksheet.rowCount; rowNumber++) {
    const record: Record<
      string,
      ReturnType<typeof deserializeExcelCellValue>
    > = {};
    const worksheetRow = worksheet.getRow(rowNumber);
    for (const [colNumber, key] of headers.entries()) {
      if (key == null) {
        continue;
      }
      const value = deserializeExcelCellValue(
        worksheetRow.getCell(colNumber).value,
      );
      if (value == null || value === "") {
        continue;
      }
      record[key] = value;
    }
    yield record;
  }
}

export function* fromAxisDemoExcel(
  workbook: ExcelJS.Workbook,
): Iterable<Resource> {
  const organizationRolesByOrganizationIri = transformOrganizationRoleWorksheet(
    workbook.getWorksheet("OrganizationRole")!,
  );
  for (const organizationRoles of Object.values(
    organizationRolesByOrganizationIri,
  )) {
    yield* organizationRoles;
  }

  const organizations = transformOrganizationWorksheet({
    organizationRolesByOrganizationIri,
    worksheet: workbook.getWorksheet("Organization")!,
  });
  yield* organizations;

  const governanceEpisodes = transformGovernanceEpisodeWorksheet({
    governanceEpisodeOrganizations:
      transformGovernanceEpisodeOrganizationWorksheet({
        organizationIris: new Set(organizations.map((_) => _["@id"])),
        worksheet: workbook.getWorksheet("GovernanceEpisodeOrganization")!,
      }),
    worksheet: workbook.getWorksheet("GovernanceEpisode")!,
  });
  yield* governanceEpisodes;

  yield* transformProjectWorksheet({
    governanceEpisodes,
    worksheet: workbook.getWorksheet("Project")!,
  });
}
