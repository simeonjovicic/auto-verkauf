import type { Metadata } from "next";
import { Inter_Tight, Fraunces } from "next/font/google";
import { Header } from "@/components/nav/header";
import { Footer } from "@/components/footer/footer";
import { SITE } from "@/lib/site";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default: "Fischerauto — Hyundai und Mitsubishi in Wien",
    template: "%s · Fischerauto",
  },
  description:
    "Fischerauto in Wien-Donaustadt. Hyundai und Mitsubishi Neuwagen, geprüfte Eintauschwagen, Service, Werkstatt, Teile, Finanzierung und Leasing seit 1974.",
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: SITE.name,
    images: [
      {
        url: "/fischerauto/ioniq-9.jpg",
        width: 2339,
        height: 1511,
        alt: "Hyundai IONIQ 9 bei Fischerauto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/fischerauto/ioniq-9.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de-AT"
      className={`${interTight.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink text-bone font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
