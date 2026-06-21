"use client";

import { ShieldCheck } from "lucide-react";
import { useI18n } from "./LanguageProvider";
import { Reveal } from "./Reveal";

export function AboutPage() {
  const { t } = useI18n();

  return (
    <main className="mx-auto max-w-[1340px] px-6 pb-24 pt-32 md:px-10 md:pt-40">
      <header className="max-w-3xl">
        <p className="kicker mb-4 text-gold">{t.aboutPage.eyebrow}</p>
        <h1 className="display text-4xl text-bone md:text-6xl">
          {t.aboutPage.title}
        </h1>
        <p className="mt-6 text-xl font-light leading-relaxed text-bone/90">
          {t.aboutPage.lead}
        </p>
      </header>

      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <p className="text-base font-light leading-relaxed text-muted">
            {t.aboutPage.body1}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-base font-light leading-relaxed text-muted">
            {t.aboutPage.body2}
          </p>
        </Reveal>
      </div>

      {/* Estadísticas */}
      <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line sm:grid-cols-3">
        {t.aboutPage.stats.map((s) => (
          <div key={s.label} className="bg-surface p-8 text-center">
            <p className="display text-4xl text-gold-light md:text-5xl">
              {s.value}
            </p>
            <p className="kicker mt-3 text-muted">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Promesa de autenticidad */}
      <Reveal>
        <div className="gold-border noise relative mt-12 overflow-hidden rounded-3xl p-10 md:p-14">
          <div className="gold-glow absolute inset-0 opacity-50" />
          <div className="relative flex flex-col gap-5">
            <ShieldCheck size={36} className="text-gold" strokeWidth={1.5} />
            <h2 className="display text-2xl text-bone md:text-3xl">
              {t.aboutPage.pledgeTitle}
            </h2>
            <p className="max-w-2xl text-base font-light leading-relaxed text-bone/80">
              {t.aboutPage.pledge}
            </p>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
