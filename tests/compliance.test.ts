import { describe, it, expect } from "vitest";
import { disclaimers } from "../lib/copy/compliance";
import { personalBenefits, businessBenefits } from "../lib/copy/benefits";

describe("disclaimers", () => {
  it("states results vary and self-dispute rights", () => {
    expect(disclaimers.resultsVary.toLowerCase()).toContain("results vary");
    expect(disclaimers.selfDispute.toLowerCase()).toMatch(/dispute|free/);
    expect(disclaimers.planNotScorePromise.toLowerCase()).toContain("not a guarantee");
  });

  it("forbids guarantee language inside benefit titles", () => {
    const blob = [...personalBenefits, ...businessBenefits]
      .map((b) => `${b.title} ${b.body}`)
      .join(" ")
      .toLowerCase();
    expect(blob).not.toMatch(/guaranteed|guarantee \+|wipe your|delete all/);
  });
});
