import ExcelJS from "@protobi/exceljs";
import {
  Organization,
  OrganizationRole,
  Project,
  type Resource,
} from "@wpg/model";

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

function* transformOrganizationWorksheet({
  organizationRolesByOrganizationId,
  worksheet,
}: {
  organizationRolesByOrganizationId: Record<
    Organization["@id"],
    readonly OrganizationRole[]
  >;
  worksheet: ExcelJS.Worksheet;
}): Iterable<Organization> {
  for (const row of worksheetRows(worksheet)) {
    if (!row["@id"]) {
      continue;
    }
    const organizationId = row["@id"] as string;

    const organizationRoles =
      organizationRolesByOrganizationId[organizationId] ?? [];
    if (organizationRoles.length === 0) {
      continue;
    }

    const partialOrganization: Partial<Organization> = {
      "@id": organizationId,
      "@type": "Organization",
      domains: [organizationRoles[0].domain],
      institutionalLayer:
        "https://purl.dataecosystems.org/wpg/cbox#LocalInstitutionalLayer",
      memberOf: organizationRoles.map(
        (organizationRole) => organizationRole["@id"],
      ),
      name: row["name"] as string,
    };

    yield Organization.parse(partialOrganization);
  }
}

function transformOrganizationRoleWorksheet(
  worksheet: ExcelJS.Worksheet,
): Record<Organization["@id"], readonly OrganizationRole[]> {
  function organizationRoleId(
    organizationId: Organization["@id"],
    projectId: Project["@id"],
  ): OrganizationRole["@id"] {
    return `${BASE_IRI}/OrganizationRole/${encodeIriComponent(organizationId)}/${encodeIriComponent(projectId)}`;
  }

  const organizationRolesByOrganizationId: Record<
    Organization["@id"],
    OrganizationRole[]
  > = {};
  for (const row of worksheetRows(worksheet)) {
    if (!row["organization"] || !row["memberOf"]) {
      continue;
    }

    const organizationId = row["organization"] as string;
    const projectId = row["memberOf"] as string;

    const partialOrganizationRole: Partial<OrganizationRole> = {
      "@id": organizationRoleId(organizationId, projectId),
      "@type": "OrganizationRole",
      domain: row["domain"] as OrganizationRole["domain"] | undefined,
      memberOf: projectId,
      roleName: row["roleName"] as OrganizationRole["roleName"],
    };

    for (const [predicate, targetOrganizationIds] of [
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
      for (const targetOrganizationId of targetOrganizationIds) {
        partialOrganizationRole[predicate] = (
          partialOrganizationRole[predicate] ?? []
        ).concat(organizationRoleId(targetOrganizationId, projectId));
      }
    }

    const organizationRole = OrganizationRole.parse(partialOrganizationRole);
    organizationRolesByOrganizationId[organizationId] = (
      organizationRolesByOrganizationId[organizationId] ?? []
    ).concat(organizationRole);
  }

  return organizationRolesByOrganizationId;
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
  const organizationRolesByOrganizationId = transformOrganizationRoleWorksheet(
    workbook.getWorksheet("OrganizationRole")!,
  );
  for (const organizationRoles of Object.values(
    organizationRolesByOrganizationId,
  )) {
    yield* organizationRoles;
  }

  yield* transformOrganizationWorksheet({
    organizationRolesByOrganizationId,
    worksheet: workbook.getWorksheet("Organization")!,
  });
}
