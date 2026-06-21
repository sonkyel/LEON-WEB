"use client";

import { ArrowRight, Check } from "lucide-react";
import { useI18n } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import { waLink } from "@/lib/site";

export function SellPage() {
  const { t } = useI18n();

  return (
    <main className="mx-auto max-w-[1340px] px-6 pb-24 pt-32 md:px-10 md:pt-40">
      <header className="max-w-3xl">
        <p className="kicker mb-4 text-gold">{t.sellPage.eyebrow}</p>
        <h1 className="display text-4xl text-bone md:text-6xl">
          {t.sellPage.title}
        </h1>
        <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-muted">
          {t.sellPage.intro}
        </p>
        <a
          href={waLink(t.sellPage.waMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
        >
          {t.sellPage.cta} <ArrowRight size={17} />
        </a>
      </header>

      <section className="mt-20">
        <p className="kicker mb-10 text-muted">{t.sellPage.stepsTitle}</p>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line md:grid-cols-3">
          {t.sellPage.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-4 bg-surface p-8">
                <span className="display text-4xl text-gold/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-medium text-bone">{step.title}</h3>
                <p className="text-sm font-light leading-relaxed text-muted">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <ul className="flex flex-wrap gap-6">
          {t.sell.points.map((p) => (
            <li key={p} className="flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold text-[#0a0a0b]">
                <Check size={15} />
              </span>
              <span className="text-base font-light text-bone">{p}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
