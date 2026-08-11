import type { Metadata } from "next";
import { Syne, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Credit is Power",
    default: "Credit is Power — Build. Repair. Monitor.",
  },
  description:
    "Credit is Power helps you build, repair, and monitor personal and business credit with a clear 50-Point Proven Plan. Book a free consultation.",
  metadataBase: new URL("https://creditispower.com"),
  openGraph: {
    title: "Credit is Power",
    description:
      "Build, repair, and monitor credit with a clear plan. Book a free consultation.",
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${sourceSans.variable}`}>
      <body className="min-h-screen font-[family-name:var(--font-source-sans)]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-emerald focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
