"use client";

import { ShieldCheck, Truck, MessageCircle } from "lucide-react";
import { useI18n } from "./LanguageProvider";
import { Reveal } from "./Reveal";

const icons = [ShieldCheck, Truck, MessageCircle];

export function TrustBand() {
  const { t } = useI18n();

  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto grid max-w-[1340px] grid-cols-1 gap-px overflow-hidden md:grid-cols-3">
        {t.trust.items.map((item, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-4 px-8 py-12 md:px-10">
                <Icon size={28} className="text-gold" strokeWidth={1.5} />
                <h3 className="text-lg font-medium text-bone">{item.title}</h3>
                <p className="text-sm font-light leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
