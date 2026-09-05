import { describe, it, expect } from "vitest";
import { siteConfig } from "../lib/site";

describe("siteConfig", () => {
  it("brands Credit is Power and exposes book path", () => {
    expect(siteConfig.name).toBe("Credit is Power");
    expect(siteConfig.nav.some((n) => n.href === "/book")).toBe(true);
  });

  it("uses brand-owned contact emails without .example placeholders", () => {
    const emails = Object.values(siteConfig.contact);
    for (const email of emails) {
      expect(email).toMatch(/@creditispower\.com$/);
      expect(email.toLowerCase()).not.toContain(".example");
    }
    expect(siteConfig.mailingAddressNote.toLowerCase()).toMatch(
      /physical mailing address|registered entity/,
    );
  });

  it("stores the IdentityIQ SecureMax offer link with our offer code", () => {
    expect(siteConfig.identityIqOfferUrl).toBe(
      "https://www.identityiq.com/sc-securemax.aspx?offercode=431299Z9",
    );
  });
});
