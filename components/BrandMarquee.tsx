"use client";

import { useI18n } from "./LanguageProvider";

const BRANDS = [
  "ROLEX",
  "PATEK PHILIPPE",
  "AUDEMARS PIGUET",
  "RICHARD MILLE",
  "OMEGA",
  "CARTIER",
  "VACHERON CONSTANTIN",
  "TUDOR",
];

export function BrandMarquee() {
  const { t } = useI18n();
  const items = [...BRANDS, ...BRANDS];

  return (
    <section className="overflow-hidden border-b border-line bg-bg py-12">
      <p className="kicker mb-8 text-center text-muted">{t.brands.eyebrow}</p>
      <div className="relative">
        {/* Difuminado en los bordes */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />
        <div className="marquee-track gap-14">
          {items.map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="display-light shrink-0 text-2xl tracking-wide text-bone/35 transition-colors hover:text-gold-light md:text-3xl"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
