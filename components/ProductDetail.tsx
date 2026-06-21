"use client";

import Link from "next/link";
import { ArrowLeft, ShieldCheck, MessageCircle } from "lucide-react";
import { useI18n } from "./LanguageProvider";
import { WatchImage } from "./WatchImage";
import { ProductGrid } from "./ProductGrid";
import { formatPrice, type Watch } from "@/lib/products";
import { waLink } from "@/lib/site";

const SPEC_ORDER = [
  "movement",
  "case",
  "diameter",
  "dial",
  "bracelet",
  "papers",
] as const;

export function ProductDetail({
  watch,
  related,
}: {
  watch: Watch;
  related: Watch[];
}) {
  const { t, lang } = useI18n();
  const price = formatPrice(watch.priceUSD, lang);

  return (
    <main className="mx-auto max-w-[1340px] px-6 pb-24 pt-28 md:px-10 md:pt-36">
      <Link
        href="/catalogo"
        className="link-underline mb-8 inline-flex items-center gap-2 text-sm text-muted"
      >
        <ArrowLeft size={16} /> {t.product.back}
      </Link>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Galería */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="group overflow-hidden rounded-3xl border border-line">
            <WatchImage
              slug={watch.slug}
              tone={watch.tone}
              brand={watch.brand}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="aspect-[4/5] w-full"
            />
          </div>
          <p className="mt-3 text-center text-xs text-muted">
            {lang === "es"
              ? "Imagen referencial · reemplazar por foto real del reloj"
              : "Reference image · replace with the real watch photo"}
          </p>
        </div>

        {/* Información */}
        <div>
          <p className="kicker text-gold">{watch.brand}</p>
          <h1 className="display mt-3 text-4xl text-bone md:text-5xl">
            {watch.model}
          </h1>
          <p className="mt-3 text-sm text-muted">
            {t.product.ref} {watch.ref} · {t.product.year} {watch.year}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-line-strong bg-surface px-4 py-1.5 text-sm text-bone">
              {t.conditions[watch.condition]}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm text-gold-light">
              <ShieldCheck size={15} /> {t.product.authBadge}
            </span>
          </div>

          <div className="mt-8 border-y border-line py-6">
            {price ? (
              <p className="display text-4xl text-bone">{price}</p>
            ) : (
              <p className="display text-3xl text-gold-light">
                {t.product.onRequest}
              </p>
            )}
          </div>

          <a
            href={waLink(t.product.askMsg(`${watch.brand} ${watch.model} (${watch.ref})`))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold sm:w-auto"
          >
            <MessageCircle size={18} /> {t.product.ask}
          </a>

          {/* Especificaciones */}
          <div className="mt-10">
            <p className="kicker mb-5 text-muted">{t.product.specs}</p>
            <dl className="divide-y divide-line border-y border-line">
              {SPEC_ORDER.map((key) => (
                <div
                  key={key}
                  className="flex items-baseline justify-between gap-6 py-3.5"
                >
                  <dt className="text-sm text-muted">{t.specLabels[key]}</dt>
                  <dd className="text-right text-sm font-medium text-bone">
                    {watch.specs[key][lang]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Relacionados */}
      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="display mb-10 text-2xl text-bone md:text-3xl">
            {t.product.related}
          </h2>
          <ProductGrid watches={related} />
        </section>
      )}
    </main>
  );
}
