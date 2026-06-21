"use client";

import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { useI18n } from "./LanguageProvider";
import { ProductCard } from "./ProductCard";
import {
  watches,
  brands,
  categoryKeys,
  type Category,
} from "@/lib/products";

const PRICE_STEPS = [10000, 25000, 50000, 100000, 200000];

export function CatalogView() {
  const { t } = useI18n();
  const [brand, setBrand] = useState<string>("all");
  const [category, setCategory] = useState<Category | "all">("all");
  const [maxPrice, setMaxPrice] = useState<number | "all">("all");

  const filtered = useMemo(() => {
    return watches.filter((w) => {
      if (brand !== "all" && w.brand !== brand) return false;
      if (category !== "all" && w.category !== category) return false;
      // Los relojes "a consultar" (precio null) se muestran siempre.
      if (maxPrice !== "all" && w.priceUSD != null && w.priceUSD > maxPrice)
        return false;
      return true;
    });
  }, [brand, category, maxPrice]);

  const hasFilters = brand !== "all" || category !== "all" || maxPrice !== "all";
  const clear = () => {
    setBrand("all");
    setCategory("all");
    setMaxPrice("all");
  };

  const selectClass =
    "w-full cursor-pointer rounded-full border border-line-strong bg-surface px-4 py-2.5 text-sm text-bone outline-none transition-colors hover:border-gold focus-visible:border-gold";

  return (
    <main className="mx-auto max-w-[1340px] px-6 pb-24 pt-32 md:px-10 md:pt-40">
      {/* Encabezado */}
      <header className="mb-10">
        <p className="kicker mb-4 text-gold">{t.nav.catalog}</p>
        <h1 className="display text-4xl text-bone md:text-6xl">
          {t.catalog.title}
        </h1>
        <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-muted">
          {t.catalog.intro}
        </p>
      </header>

      {/* Filtros */}
      <div className="mb-8 grid grid-cols-1 gap-4 rounded-2xl border border-line bg-surface/60 p-5 sm:grid-cols-2 lg:grid-cols-4">
        <label className="flex flex-col gap-2">
          <span className="kicker text-muted">{t.catalog.filterBrand}</span>
          <select
            className={selectClass}
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="all">{t.catalog.all}</option>
            {brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="kicker text-muted">{t.catalog.filterCategory}</span>
          <select
            className={selectClass}
            value={category}
            onChange={(e) => setCategory(e.target.value as Category | "all")}
          >
            <option value="all">{t.catalog.allCat}</option>
            {categoryKeys.map((c) => (
              <option key={c} value={c}>
                {t.categories.items[c].name}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="kicker text-muted">{t.catalog.filterPrice}</span>
          <select
            className={selectClass}
            value={String(maxPrice)}
            onChange={(e) =>
              setMaxPrice(
                e.target.value === "all" ? "all" : Number(e.target.value)
              )
            }
          >
            <option value="all">{t.catalog.all}</option>
            {PRICE_STEPS.map((p) => (
              <option key={p} value={p}>
                ${p.toLocaleString("en-US")}
              </option>
            ))}
          </select>
        </label>

        <div className="flex items-end justify-between gap-3">
          <span className="text-sm font-medium text-muted">
            {t.catalog.results(filtered.length)}
          </span>
          {hasFilters && (
            <button
              type="button"
              onClick={clear}
              className="inline-flex cursor-pointer items-center gap-1 text-sm text-gold-light transition-colors hover:text-gold"
            >
              <X size={15} /> {t.catalog.clear}
            </button>
          )}
        </div>
      </div>

      {/* Resultados */}
      {filtered.length === 0 ? (
        <p className="py-20 text-center text-muted">{t.catalog.empty}</p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((w) => (
            <ProductCard key={w.slug} watch={w} />
          ))}
        </div>
      )}
    </main>
  );
}
