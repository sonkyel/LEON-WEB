"use client";

import { useI18n } from "./LanguageProvider";
import { SectionHeader } from "./Section";
import { Reveal } from "./Reveal";

export function BuyProcess() {
  const { t } = useI18n();

  return (
    <section className="border-t border-line bg-surface">
      <div className="mx-auto max-w-[1340px] px-6 py-20 md:px-10 md:py-28">
        <SectionHeader index="03" eyebrow={t.process.eyebrow} title={t.process.title} />
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step, i) => (
            <Reveal key={step.title} delay={(i % 4) * 0.08}>
              <div className="flex h-full flex-col gap-4 bg-bg p-8">
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
      </div>
    </section>
  );
}
