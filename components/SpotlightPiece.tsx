"use client";

import { ArrowRight } from "lucide-react";
import { useI18n } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import { WatchImage } from "./WatchImage";
import { MagneticButton } from "./MagneticButton";
import { getWatch, formatPrice } from "@/lib/products";

// Pieza destacada de la home. Cambia el slug para destacar otro reloj.
const SPOTLIGHT_SLUG = "patek-philippe-nautilus-5711-1a";

export function SpotlightPiece() {
  const { t, lang } = useI18n();
  const watch = getWatch(SPOTLIGHT_SLUG);
  if (!watch) return null;

  const price = formatPrice(watch.priceUSD, lang);
  const specs = [
    watch.specs.movement[lang],
    watch.specs.case[lang],
    `${t.product.year} ${watch.year}`,
  ];

  return (
    <section className="relative overflow-hidden border-t border-line bg-surface">
      <div className="gold-glow absolute inset-0 opacity-40" />
      <div className="relative mx-auto grid max-w-[1340px] grid-cols-1 items-center gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <div className="group overflow-hidden rounded-3xl border border-line">
            <WatchImage
              slug={watch.slug}
              tone={watch.tone}
              brand={watch.brand}
              sizes="(max-width: 1024px) 92vw, 50vw"
              className="aspect-[4/5] w-full"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal>
            <p className="kicker mb-5 flex items-center gap-3 text-gold">
              <span className="h-px w-8 bg-gold" /> {t.spotlight.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display text-4xl text-bone md:text-5xl">
              {watch.brand}
            </h2>
            <p className="display-light mt-1 text-2xl text-gold-light md:text-3xl">
              {watch.model}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base font-light leading-relaxed text-muted">
              {t.spotlight.lead}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-7 space-y-2 border-t border-line pt-6">
              {specs.map((s) => (
                <li key={s} className="text-sm font-light text-bone/85">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              {price ? (
                <span className="display text-2xl text-bone">{price}</span>
              ) : (
                <span className="text-base font-medium text-gold-light">
                  {t.product.onRequest}
                </span>
              )}
              <MagneticButton
                href={`/reloj/${watch.slug}`}
                className="btn-gold inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
              >
                {t.spotlight.cta} <ArrowRight size={16} />
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
