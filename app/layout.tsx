import type { Metadata } from "next";
import { Inter_Tight, Fraunces } from "next/font/google";
import { Header } from "@/components/nav/header";
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
  metadataBase: new URL("https://www.meyer-motorsport.at"),
  title: {
    default: "Meyer Motorsport — Exklusive Sportwagen in Wien",
    template: "%s · Meyer Motorsport",
  },
  description:
    "Meyer Motorsport in Wien. Handverlesene Ferrari, Porsche und BMW M Sammlerstücke. Seit über 40 Jahren.",
  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Meyer Motorsport",
    images: [
      {
        url: "/cars/ferrari-458-speciale-aperta.jpg",
        width: 1261,
        height: 946,
        alt: "Ferrari 458 Speciale Aperta — Meyer Motorsport",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/cars/ferrari-458-speciale-aperta.jpg"],
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
      </body>
    </html>
  );
}
