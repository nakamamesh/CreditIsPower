export const siteConfig = {
  name: "Credit is Power",
  tagline: "Build. Repair. Monitor.",
  nav: [
    { label: "Personal", href: "/personal-credit" },
    { label: "Business", href: "/business-credit" },
    { label: "50-Point Plan", href: "/50-point-plan" },
    { label: "Book Free Call", href: "/book", primary: true },
  ],
  get calendlyUrl() {
    return process.env.NEXT_PUBLIC_CALENDLY_URL ?? "";
  },
} as const;
