"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useI18n } from "./LanguageProvider";
import { SectionHeader } from "./Section";

export function Faq() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-line bg-surface">
      <div className="mx-auto max-w-[1340px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionHeader eyebrow={t.faq.eyebrow} title={t.faq.title} />
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ul className="divide-y divide-line border-y border-line">
              {t.faq.items.map((item, i) => {
                const isOpen = open === i;
                return (
                  <li key={item.q}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left"
                    >
                      <span className="text-base font-medium text-bone">
                        {item.q}
                      </span>
                      <span className="text-gold">
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] pb-5 opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-xl text-sm font-light leading-relaxed text-muted">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
