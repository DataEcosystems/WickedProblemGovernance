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
  organizationRolesByOrganizationIri,
  worksheet,
}: {
  organizationRolesByOrganizationIri: Record<
    Organization["@id"],
    readonly OrganizationRole[]
  >;
  worksheet: ExcelJS.Worksheet;
}): Iterable<Organization> {
  for (const row of worksheetRows(worksheet)) {
    if (!row["@id"]) {
      continue;
    }
    const organizationIri = row["@id"] as string;

    const organizationRoles =
      organizationRolesByOrganizationIri[organizationIri] ?? [];
    if (organizationRoles.length === 0) {
      continue;
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

    yield Organization.parse(partialOrganization);
  }
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

  yield* transformOrganizationWorksheet({
    organizationRolesByOrganizationIri,
    worksheet: workbook.getWorksheet("Organization")!,
  });
}
