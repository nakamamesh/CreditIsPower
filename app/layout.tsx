import type { Metadata } from "next";
import { Syne, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
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
    default: "Credit is Power",
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
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
