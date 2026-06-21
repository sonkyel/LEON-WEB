import type { Metadata } from "next";
import { CatalogView } from "@/components/CatalogView";

export const metadata: Metadata = {
  title: "Catálogo · Relojes de lujo",
  description:
    "Explora el catálogo de relojes de lujo certificados de CL Collectibles. Rolex, Patek Philippe, Audemars Piguet, Richard Mille y más.",
  alternates: { canonical: "/catalogo" },
};

export default function CatalogPage() {
  return <CatalogView />;
}
