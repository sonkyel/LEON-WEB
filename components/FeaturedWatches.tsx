"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useI18n } from "./LanguageProvider";
import { SectionHeader } from "./Section";
import { ProductGrid } from "./ProductGrid";
import { getFeatured } from "@/lib/products";

export function FeaturedWatches() {
  const { t } = useI18n();
  const featured = getFeatured(6);

  return (
    <section className="mx-auto max-w-[1340px] px-6 py-20 md:px-10 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeader
          index="01"
          eyebrow={t.featured.eyebrow}
          title={t.featured.title}
          intro={t.featured.intro}
        />
        <Link
          href="/catalogo"
          className="kicker link-underline inline-flex items-center gap-2 text-bone"
        >
          {t.featured.viewAll} <ArrowRight size={15} />
        </Link>
      </div>
      <div className="mt-12">
        <ProductGrid watches={featured} />
      </div>
    </section>
  );
}
