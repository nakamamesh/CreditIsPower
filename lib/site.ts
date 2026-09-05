export const siteConfig = {
  name: "Credit is Power",
  tagline: "Build. Repair. Monitor.",
  /** Brand contact — owner must verify domain inbox delivery before ads/enrollment. */
  contact: {
    hello: "hello@creditispower.com",
    privacy: "privacy@creditispower.com",
    legal: "legal@creditispower.com",
    compliance: "compliance@creditispower.com",
  },
  /**
   * No street HQ is published until the registered entity address is confirmed.
   * Prefer booking (/book) and email over inventing a physical address.
   */
  mailingAddressNote:
    "A physical mailing address will be listed here once our registered entity address is confirmed. Until then, contact us by email or book a call.",
  nav: [
    { label: "Personal", href: "/personal-credit" },
    { label: "Business", href: "/business-credit" },
    { label: "50-Point Plan", href: "/50-point-plan" },
    { label: "Book Free Call", href: "/book", primary: true },
  ],
  get calendlyUrl() {
    return process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() ?? "";
  },
  /**
   * Client credit-report pull (IdentityIQ SecureMax).
   * $1 for 7-day trial — give this on the consult call / in enrollment email.
   * Offer code 431299Z9 is ours; do not swap for a generic IdentityIQ URL.
   * Always disclose: monitoring is a paid product; trial converts unless cancelled.
   */
  identityIqOfferUrl:
    "https://www.identityiq.com/sc-securemax.aspx?offercode=431299Z9",
  legalNav: [
    { label: "Privacy", href: "/legal/privacy" },
    { label: "Terms", href: "/legal/terms" },
    { label: "Disclosures", href: "/legal/disclosures" },
    {
      label: "Do Not Sell or Share",
      href: "/legal/do-not-sell",
    },
  ],
} as const;
