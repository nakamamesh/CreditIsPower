import { describe, it, expect } from "vitest";
import { privacyCategories, privacyToc } from "../lib/copy/privacy";
import { siteConfig } from "../lib/site";

describe("privacy policy coverage", () => {
  it("includes CCPA-style toc sections HighScoreNow-class policies cover", () => {
    const ids = privacyToc.map((t) => t.id);
    expect(ids).toEqual(
      expect.arrayContaining([
        "notice-at-collection",
        "information-we-collect",
        "sharing",
        "sale-share",
        "cookies",
        "security",
        "california",
        "children",
        "credit-reports",
        "affiliates",
      ]),
    );
  });

  it("states we do not sell personal information in category rows", () => {
    const blob = privacyCategories.map((c) => c.soldOrShared).join(" ").toLowerCase();
    expect(blob).toContain("not sold");
    expect(blob).not.toMatch(/we have sold personal information/);
  });

  it("exposes do-not-sell in legal nav", () => {
    expect(
      siteConfig.legalNav.some((l) => l.href === "/legal/do-not-sell"),
    ).toBe(true);
  });
});
