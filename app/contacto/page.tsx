import type { Metadata } from "next";
import { ContactPage } from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a CL Collectibles por WhatsApp o Instagram. Respondemos rápido y resolvemos cualquier duda sobre relojes de lujo.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return <ContactPage />;
}
