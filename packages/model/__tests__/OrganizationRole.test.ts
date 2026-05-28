import { describe, it } from "vitest";
import { OrganizationRole } from "../src/OrganizationRole.js";

describe("OrganizationRole", () => {
  it("should not accept a CURIE in its domain type", () => {
    const _organizationRole: OrganizationRole = {
      "@id": "http://example.com/OrganizationRole",
      "@type": "OrganizationRole",
      // domain: "wpg:EducationDomain",
      domain: "https://purl.dataecosystems.org/wpg/cbox#EducationDomain",
      memberOf: "http://example.com/Project",
      roleName:
        "https://purl.dataecosystems.org/wpg/cbox#DataContributorOrganizationRoleName",
    };
  });

  it("should parse in-range CURIEs for domain and roleName", ({ expect }) => {
    const organizationRole = OrganizationRole.parse({
      "@id": "http://example.com/OrganizationRole",
      "@type": "OrganizationRole",
      domain: "wpg:EducationDomain",
      memberOf: "http://example.com/Project",
      roleName: "wpg:DataContributorOrganizationRoleName",
    });
    expect(organizationRole.domain).toStrictEqual(
      "https://purl.dataecosystems.org/wpg/cbox#EducationDomain",
    );
    expect(organizationRole.roleName).toStrictEqual(
      "https://purl.dataecosystems.org/wpg/cbox#DataContributorOrganizationRoleName",
    );
  });

  it("should refuse to parse out-of-range-range CURIEs", ({ expect }) => {
    const result = OrganizationRole.safeParse({
      "@id": "http://example.com/OrganizationRole",
      "@type": "OrganizationRole",
      domain: "wpg:NonextantDomain",
      memberOf: "http://example.com/Project",
      roleName: "wpg:DataContributorOrganizationRoleName",
    });
    expect(result.success).toBe(false);
    expect(result.error?.message).toContain("invalid_value");
  });
});
