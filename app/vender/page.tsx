import type { Metadata } from "next";
import { SellPage } from "@/components/SellPage";

export const metadata: Metadata = {
  title: "Vende tu reloj",
  description:
    "Vende tu reloj de lujo con CL Collectibles. Valuación rápida, pago inmediato y proceso transparente. Aceptamos consignación.",
  alternates: { canonical: "/vender" },
};

export default function VenderPage() {
  return <SellPage />;
}
