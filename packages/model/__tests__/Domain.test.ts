import { describe, it } from "vitest";
import { Domain } from "../src/Domain.js";

describe("Domain", () => {
  //   it("should not accept a CURIE in its type", () => {
  //     const domain: Domain = "wpg:EducationDomain";
  //   });

  it("should parse a well-formed CURIE @id in its range", ({ expect }) => {
    const domain = Domain.shape["@id"].parse("wpg:EducationDomain");
    expect(domain).toStrictEqual(
      "https://purl.dataecosystems.org/wpg/cbox#EducationDomain",
    );
  });

  it("should reject a well-formed CURIE @id outside its range", ({
    expect,
  }) => {
    const result = Domain.shape["@id"].safeParse("wpg:NonExtantDomain");
    expect(result.success).toBe(false);
    expect(result.error?.message).toContain("invalid_value");
  });

  it("should reject a well-formed IRI @id outside its range", ({ expect }) => {
    const result = Domain.shape["@id"].safeParse(
      "https://purl.dataecosystems.org/wpg/cbox#NonextantDomain",
    );
    expect(result.success).toBe(false);
    expect(result.error?.message).toContain("invalid_value");
  });
});
