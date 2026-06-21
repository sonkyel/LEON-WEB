// Configuración central de la marca. Cambia estos valores cuando tengas los datos reales.
export const site = {
  name: "CL Collectibles",
  // Número de WhatsApp en formato internacional sin "+" ni espacios. PLACEHOLDER: reemplazar.
  whatsapp: "10000000000",
  instagram: "cl.collectibles77",
  instagramUrl: "https://www.instagram.com/cl.collectibles77/",
  email: "contacto@clcollectibles.com",
  url: "https://www.clcollectibles.com",
};

// Construye un enlace de WhatsApp con mensaje prellenado.
export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
