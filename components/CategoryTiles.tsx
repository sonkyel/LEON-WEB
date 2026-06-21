"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "./LanguageProvider";
import { SectionHeader } from "./Section";
import { Reveal } from "./Reveal";
import { categoryKeys, type Category } from "@/lib/products";

// Reloj representativo (foto real) por categoría.
const repImage: Record<Category, string> = {
  sport: "rolex-submariner-date-126610ln",
  classic: "cartier-santos-large-wssa0018",
  gold: "rolex-day-date-40-228238-champagne",
  diamond: "audemars-piguet-royal-oak-diamonds-15451",
};

export function CategoryTiles() {
  const { t } = useI18n();

  return (
    <section className="mx-auto max-w-[1340px] px-6 py-20 md:px-10 md:py-28">
      <SectionHeader index="02" eyebrow={t.categories.eyebrow} title={t.categories.title} />
      <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {categoryKeys.map((c, i) => {
          const cat = t.categories.items[c];
          return (
            <Reveal key={c} delay={(i % 4) * 0.07}>
              <Link
                href="/catalogo"
                className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-2xl border border-line transition-colors hover:border-gold/40"
              >
                {/* Foto del reloj */}
                <Image
                  src={`/watches/${repImage[c]}.png`}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 1024px) 45vw, 22vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                {/* Overlay para legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
                <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />

                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white/70 backdrop-blur transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-[#0a0a0b]">
                  <ArrowUpRight size={17} />
                </span>

                <div className="relative p-6">
                  <h3 className="display text-2xl text-white">{cat.name}</h3>
                  <p className="mt-1.5 text-sm font-light text-bone/70">{cat.desc}</p>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
