import { describe, it, expect } from "vitest";
import { siteConfig } from "../lib/site";

describe("siteConfig", () => {
  it("brands Credit is Power and exposes book path", () => {
    expect(siteConfig.name).toBe("Credit is Power");
    expect(siteConfig.nav.some((n) => n.href === "/book")).toBe(true);
  });
});
