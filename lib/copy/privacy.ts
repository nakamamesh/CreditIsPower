/**
 * Privacy policy copy for Credit is Power.
 * Structural draft for the marketing site + consult workflow.
 * Counsel should review before paid ads / enrollment at scale.
 */

export const privacyLastUpdated = "August 20, 2026";

export const privacyToc = [
  { id: "who-we-are", label: "Who we are" },
  { id: "scope", label: "Scope" },
  { id: "notice-at-collection", label: "Notice at collection" },
  { id: "information-we-collect", label: "Information we collect" },
  { id: "how-we-use", label: "How we use information" },
  { id: "sharing", label: "How we share information" },
  { id: "sale-share", label: "Sale and sharing" },
  { id: "third-parties", label: "Third-party services" },
  { id: "credit-reports", label: "Credit reports & monitoring" },
  { id: "affiliates", label: "Affiliate & referral links" },
  { id: "cookies", label: "Cookies & tracking" },
  { id: "security", label: "Security" },
  { id: "retention", label: "Retention" },
  { id: "your-choices", label: "Your choices & rights" },
  { id: "california", label: "California privacy rights" },
  { id: "other-states", label: "Other U.S. state rights" },
  { id: "children", label: "Children" },
  { id: "international", label: "International visitors" },
  { id: "changes", label: "Changes" },
  { id: "contact", label: "Contact" },
] as const;

/** CCPA-style category table used on the privacy page. */
export const privacyCategories = [
  {
    category: "Identifiers",
    examples: "Name, email, phone, IP address, device IDs, account usernames",
    sources: "You; booking tools; analytics",
    purposes: "Consult scheduling, support, security, site operation",
    soldOrShared: "Not sold. May be shared with service providers.",
    retention: "While relationship active + up to 3 years after last contact, or longer if required by law",
  },
  {
    category: "Customer records (Cal. Civ. Code § 1798.80)",
    examples: "Contact details, communication history, service notes",
    sources: "You; email; phone; written agreements",
    purposes: "Provide consulting/education, case management, billing where applicable",
    soldOrShared: "Not sold. Shared with service providers as needed",
    retention: "Contract term + statutory retention (often 2–7 years depending on records)",
  },
  {
    category: "Commercial information",
    examples: "Products/services requested, enrollment status, payment metadata (not full card PAN if processed by Stripe)",
    sources: "You; payment processors",
    purposes: "Fulfill services, accounting, fraud prevention",
    soldOrShared: "Not sold",
    retention: "As required for tax/accounting (typically 7 years)",
  },
  {
    category: "Internet / electronic activity",
    examples: "Pages viewed, referrer, approximate location from IP, cookie IDs",
    sources: "Your browser; hosting/analytics vendors",
    purposes: "Site performance, security, optional marketing measurement",
    soldOrShared: "Not sold. Analytics/ad cookies may constitute “sharing” under CA law if enabled — see Cookies",
    retention: "Up to 26 months for analytics, or vendor default",
  },
  {
    category: "Geolocation (coarse)",
    examples: "City/region inferred from IP",
    sources: "Hosting / analytics",
    purposes: "Security, localization, fraud checks",
    soldOrShared: "Not sold",
    retention: "Aligned with log/analytics retention",
  },
  {
    category: "Sensitive personal information (limited)",
    examples:
      "SSN / DOB / government ID only if you voluntarily send them; credit report contents you email us; financial account details in those reports",
    sources: "You (client-initiated)",
    purposes: "Analysis, dispute support, monitoring/case management you request — not for advertising",
    soldOrShared: "Not sold. Not used for cross-context behavioral advertising. Shared only with processors needed to perform services (e.g., mail vendors for letters you authorize)",
    retention: "While engaged + necessary for disputes/compliance; then securely delete or de-identify",
  },
] as const;
