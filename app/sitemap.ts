import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { watches } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/catalogo", "/vender", "/nosotros", "/contacto"].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  const products = watches.map((w) => ({
    url: `${site.url}/reloj/${w.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...routes, ...products];
}
