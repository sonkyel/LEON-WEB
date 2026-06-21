"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { useI18n } from "./LanguageProvider";
import { Reveal } from "./Reveal";

export function SellCta() {
  const { t } = useI18n();

  return (
    <section className="mx-auto max-w-[1340px] px-6 py-20 md:px-10 md:py-28">
      <Reveal>
        <div className="gold-border noise relative overflow-hidden rounded-3xl p-10 md:p-16">
          <div className="gold-glow absolute inset-0 opacity-60" />
          <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div>
              <p className="kicker text-gold">{t.sell.eyebrow}</p>
              <h2 className="display mt-4 text-3xl text-bone md:text-5xl">
                {t.sell.title}
              </h2>
              <p className="mt-5 max-w-md text-base font-light leading-relaxed text-muted">
                {t.sell.desc}
              </p>
              <Link
                href="/vender"
                className="btn-gold mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
              >
                {t.sell.cta} <ArrowRight size={17} />
              </Link>
            </div>
            <ul className="space-y-4 md:justify-self-end">
              {t.sell.points.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold text-[#0a0a0b]">
                    <Check size={15} />
                  </span>
                  <span className="text-base font-light text-bone">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
