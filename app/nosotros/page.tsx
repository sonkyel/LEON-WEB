import type { Metadata } from "next";
import { AboutPage } from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "CL Collectibles: especialistas en relojes de lujo. Cada pieza verificada por especialistas con garantía de autenticidad por escrito.",
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return <AboutPage />;
}
