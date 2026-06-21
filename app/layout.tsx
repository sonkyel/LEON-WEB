import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { site } from "@/lib/site";

const display = Playfair_Display({
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const DESCRIPTION =
  "CL Collectibles — Compra y vende relojes de lujo certificados: Rolex, Patek Philippe, Audemars Piguet, Richard Mille y más. Autenticidad garantizada y envío asegurado.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "CL Collectibles · Relojes de lujo certificados",
    template: "%s · CL Collectibles",
  },
  description: DESCRIPTION,
  keywords: [
    "relojes de lujo",
    "luxury watches",
    "Rolex",
    "Patek Philippe",
    "Audemars Piguet",
    "Richard Mille",
    "relojes certificados",
    "CL Collectibles",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "CL Collectibles · Relojes de lujo certificados",
    description: DESCRIPTION,
    url: site.url,
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "CL Collectibles · Relojes de lujo certificados",
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-bg text-bone">
        <LanguageProvider>
          <SmoothScroll />
          <Nav />
          {children}
          <Footer />
          <WhatsAppFloat />
        </LanguageProvider>
      </body>
    </html>
  );
}
