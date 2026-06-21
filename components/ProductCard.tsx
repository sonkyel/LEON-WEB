"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "./LanguageProvider";
import { WatchImage } from "./WatchImage";
import { formatPrice, type Watch } from "@/lib/products";

export function ProductCard({ watch }: { watch: Watch }) {
  const { t, lang } = useI18n();
  const price = formatPrice(watch.priceUSD, lang);

  return (
    <Link
      href={`/reloj/${watch.slug}`}
      className="card group flex flex-col overflow-hidden rounded-2xl"
    >
      <div className="relative overflow-hidden">
        <WatchImage
          slug={watch.slug}
          tone={watch.tone}
          brand={watch.brand}
          className="aspect-[4/5] w-full"
        />
        {/* Degradado inferior para profundidad */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-surface/90 to-transparent" />
        <span className="kicker absolute right-3 top-3 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[0.6rem] text-bone/90 backdrop-blur">
          {t.conditions[watch.condition]}
        </span>
        <span className="pointer-events-none absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-gold text-[#0a0a0b] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={17} />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="kicker text-gold">{watch.brand}</p>
        <h3 className="mt-2 text-lg font-medium text-bone transition-colors group-hover:text-gold-light">
          {watch.model}
        </h3>
        <p className="mt-1 text-xs text-muted">
          {t.product.ref} {watch.ref} · {watch.year}
        </p>
        <div className="mt-auto flex items-center justify-between pt-5">
          {price ? (
            <p className="text-lg font-semibold text-bone">{price}</p>
          ) : (
            <p className="text-sm font-medium text-gold-light">
              {t.product.onRequest}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
