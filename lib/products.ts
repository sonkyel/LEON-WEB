import type { Lang } from "@/lib/i18n";

export type Category = "sport" | "classic" | "gold" | "diamond";
export type Condition = "new" | "like-new" | "excellent" | "very-good";
// Tono visual del placeholder de imagen (hasta tener fotos reales).
export type Tone = "steel" | "gold" | "rose" | "black" | "blue" | "green";

export interface Bi {
  es: string;
  en: string;
}

const b = (es: string, en?: string): Bi => ({ es, en: en ?? es });

export interface Watch {
  slug: string;
  brand: string;
  model: string;
  ref: string;
  priceUSD: number | null; // null = precio a consultar
  year: number;
  condition: Condition;
  category: Category;
  tone: Tone;
  featured?: boolean;
  specs: {
    movement: Bi;
    case: Bi;
    diameter: Bi;
    bracelet: Bi;
    dial: Bi;
    papers: Bi;
  };
}

const FULL = b("Caja y papeles completos", "Full set (box & papers)");
const WATCH_ONLY = b("Solo reloj", "Watch only");

// ⚠️ DATOS DE EJEMPLO — reemplazar por inventario real (fotos, modelos y precios).
export const watches: Watch[] = [
  {
    slug: "rolex-submariner-date-126610ln",
    brand: "Rolex",
    model: "Submariner Date",
    ref: "126610LN",
    priceUSD: 14500,
    year: 2022,
    condition: "like-new",
    category: "sport",
    tone: "black",
    featured: true,
    specs: {
      movement: b("Automático, calibre 3235", "Automatic, calibre 3235"),
      case: b("Oystersteel 904L", "Oystersteel 904L"),
      diameter: b("41 mm", "41 mm"),
      bracelet: b("Oyster", "Oyster"),
      dial: b("Negro", "Black"),
      papers: FULL,
    },
  },
  {
    slug: "rolex-daytona-116500ln-white",
    brand: "Rolex",
    model: "Cosmograph Daytona",
    ref: "116500LN",
    priceUSD: 32000,
    year: 2021,
    condition: "excellent",
    category: "sport",
    tone: "steel",
    featured: true,
    specs: {
      movement: b("Cronógrafo automático, calibre 4130", "Automatic chronograph, calibre 4130"),
      case: b("Oystersteel", "Oystersteel"),
      diameter: b("40 mm", "40 mm"),
      bracelet: b("Oyster", "Oyster"),
      dial: b("Blanca", "White"),
      papers: FULL,
    },
  },
  {
    slug: "rolex-gmt-master-ii-pepsi-126710blro",
    brand: "Rolex",
    model: "GMT-Master II Pepsi",
    ref: "126710BLRO",
    priceUSD: 21500,
    year: 2023,
    condition: "new",
    category: "sport",
    tone: "blue",
    featured: true,
    specs: {
      movement: b("Automático, calibre 3285", "Automatic, calibre 3285"),
      case: b("Oystersteel", "Oystersteel"),
      diameter: b("40 mm", "40 mm"),
      bracelet: b("Jubilee", "Jubilee"),
      dial: b("Negra, bisel azul/rojo", "Black, blue/red bezel"),
      papers: FULL,
    },
  },
  {
    slug: "rolex-datejust-41-126334-blue",
    brand: "Rolex",
    model: "Datejust 41",
    ref: "126334",
    priceUSD: 11200,
    year: 2020,
    condition: "excellent",
    category: "classic",
    tone: "blue",
    specs: {
      movement: b("Automático, calibre 3235", "Automatic, calibre 3235"),
      case: b("Oystersteel y oro blanco", "Oystersteel and white gold"),
      diameter: b("41 mm", "41 mm"),
      bracelet: b("Jubilee", "Jubilee"),
      dial: b("Azul", "Blue"),
      papers: FULL,
    },
  },
  {
    slug: "rolex-day-date-40-228238-champagne",
    brand: "Rolex",
    model: "Day-Date 40",
    ref: "228238",
    priceUSD: 38500,
    year: 2019,
    condition: "excellent",
    category: "gold",
    tone: "gold",
    featured: true,
    specs: {
      movement: b("Automático, calibre 3255", "Automatic, calibre 3255"),
      case: b("Oro amarillo 18k", "18k yellow gold"),
      diameter: b("40 mm", "40 mm"),
      bracelet: b("President", "President"),
      dial: b("Champán", "Champagne"),
      papers: FULL,
    },
  },
  {
    slug: "patek-philippe-nautilus-5711-1a",
    brand: "Patek Philippe",
    model: "Nautilus 5711/1A",
    ref: "5711/1A-010",
    priceUSD: null,
    year: 2021,
    condition: "like-new",
    category: "sport",
    tone: "blue",
    featured: true,
    specs: {
      movement: b("Automático, calibre 26-330 S C", "Automatic, calibre 26-330 S C"),
      case: b("Acero inoxidable", "Stainless steel"),
      diameter: b("40 mm", "40 mm"),
      bracelet: b("Acero integrado", "Integrated steel"),
      dial: b("Azul degradado", "Gradient blue"),
      papers: FULL,
    },
  },
  {
    slug: "patek-philippe-aquanaut-5167a",
    brand: "Patek Philippe",
    model: "Aquanaut 5167A",
    ref: "5167A-001",
    priceUSD: 52000,
    year: 2020,
    condition: "excellent",
    category: "sport",
    tone: "black",
    specs: {
      movement: b("Automático, calibre 324 S C", "Automatic, calibre 324 S C"),
      case: b("Acero inoxidable", "Stainless steel"),
      diameter: b("40 mm", "40 mm"),
      bracelet: b("Caucho tropical", "Tropical rubber"),
      dial: b("Negra", "Black"),
      papers: FULL,
    },
  },
  {
    slug: "audemars-piguet-royal-oak-15500st-blue",
    brand: "Audemars Piguet",
    model: "Royal Oak 15500ST",
    ref: "15500ST.OO.1220ST.01",
    priceUSD: 42000,
    year: 2022,
    condition: "like-new",
    category: "sport",
    tone: "blue",
    featured: true,
    specs: {
      movement: b("Automático, calibre 4302", "Automatic, calibre 4302"),
      case: b("Acero inoxidable", "Stainless steel"),
      diameter: b("41 mm", "41 mm"),
      bracelet: b("Acero integrado", "Integrated steel"),
      dial: b("Azul Grande Tapisserie", "Blue Grande Tapisserie"),
      papers: FULL,
    },
  },
  {
    slug: "richard-mille-rm-011-flyback",
    brand: "Richard Mille",
    model: "RM 011 Flyback",
    ref: "RM011",
    priceUSD: 195000,
    year: 2019,
    condition: "excellent",
    category: "sport",
    tone: "black",
    featured: true,
    specs: {
      movement: b("Cronógrafo flyback automático", "Automatic flyback chronograph"),
      case: b("NTPT carbono", "NTPT carbon"),
      diameter: b("50 x 40 mm", "50 x 40 mm"),
      bracelet: b("Caucho", "Rubber"),
      dial: b("Esqueletizada", "Skeletonized"),
      papers: FULL,
    },
  },
  {
    slug: "omega-speedmaster-moonwatch-310-30-42",
    brand: "Omega",
    model: "Speedmaster Moonwatch",
    ref: "310.30.42.50.01.002",
    priceUSD: 7200,
    year: 2023,
    condition: "new",
    category: "sport",
    tone: "steel",
    specs: {
      movement: b("Cuerda manual, calibre 3861", "Manual winding, calibre 3861"),
      case: b("Acero inoxidable", "Stainless steel"),
      diameter: b("42 mm", "42 mm"),
      bracelet: b("Acero", "Steel"),
      dial: b("Negra", "Black"),
      papers: FULL,
    },
  },
  {
    slug: "cartier-santos-large-wssa0018",
    brand: "Cartier",
    model: "Santos de Cartier Large",
    ref: "WSSA0018",
    priceUSD: 7600,
    year: 2021,
    condition: "excellent",
    category: "classic",
    tone: "steel",
    specs: {
      movement: b("Automático, calibre 1847 MC", "Automatic, calibre 1847 MC"),
      case: b("Acero inoxidable", "Stainless steel"),
      diameter: b("39.8 mm", "39.8 mm"),
      bracelet: b("Acero SmartLink", "SmartLink steel"),
      dial: b("Plateada", "Silvered"),
      papers: FULL,
    },
  },
  {
    slug: "audemars-piguet-royal-oak-diamonds-15451",
    brand: "Audemars Piguet",
    model: "Royal Oak 15451 Diamonds",
    ref: "15451ST.ZZ.1256ST.01",
    priceUSD: 68000,
    year: 2020,
    condition: "excellent",
    category: "diamond",
    tone: "steel",
    featured: true,
    specs: {
      movement: b("Automático, calibre 3120", "Automatic, calibre 3120"),
      case: b("Acero con bisel de diamantes", "Steel with diamond bezel"),
      diameter: b("37 mm", "37 mm"),
      bracelet: b("Acero integrado", "Integrated steel"),
      dial: b("Plateada", "Silvered"),
      papers: WATCH_ONLY,
    },
  },
];

// Marcas únicas presentes en el catálogo (orden de aparición).
export const brands: string[] = Array.from(new Set(watches.map((w) => w.brand)));

export const categoryKeys: Category[] = ["sport", "classic", "gold", "diamond"];

export function getWatch(slug: string): Watch | undefined {
  return watches.find((w) => w.slug === slug);
}

export function getFeatured(limit = 6): Watch[] {
  return watches.filter((w) => w.featured).slice(0, limit);
}

export function getRelated(slug: string, limit = 3): Watch[] {
  const current = getWatch(slug);
  if (!current) return watches.slice(0, limit);
  const sameBrand = watches.filter(
    (w) => w.slug !== slug && w.brand === current.brand
  );
  const others = watches.filter(
    (w) => w.slug !== slug && w.brand !== current.brand
  );
  return [...sameBrand, ...others].slice(0, limit);
}

// Formatea el precio en USD o devuelve null para "a consultar".
export function formatPrice(priceUSD: number | null, lang: Lang): string | null {
  if (priceUSD == null) return null;
  return new Intl.NumberFormat(lang === "es" ? "es-PE" : "en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(priceUSD);
}
