"use client";

import { Quote } from "lucide-react";
import { useI18n } from "./LanguageProvider";
import { SectionHeader } from "./Section";
import { Reveal } from "./Reveal";

export function Testimonials() {
  const { t } = useI18n();

  return (
    <section className="mx-auto max-w-[1340px] px-6 py-20 md:px-10 md:py-28">
      <SectionHeader
        index="04"
        eyebrow={t.testimonials.eyebrow}
        title={t.testimonials.title}
      />
      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {t.testimonials.items.map((item, i) => (
          <Reveal key={item.name} delay={(i % 3) * 0.08}>
            <figure className="card flex h-full flex-col gap-6 rounded-2xl p-8">
              <Quote size={28} className="text-gold" />
              <blockquote className="flex-1 text-base font-light leading-relaxed text-bone/90">
                “{item.quote}”
              </blockquote>
              <figcaption>
                <p className="font-medium text-bone">{item.name}</p>
                <p className="kicker mt-1 text-gold">{item.role}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
