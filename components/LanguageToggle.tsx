"use client";

import { useI18n } from "./LanguageProvider";
import { LANGS } from "@/lib/i18n";

export function LanguageToggle({ light = false }: { light?: boolean }) {
  const { lang, setLang } = useI18n();

  return (
    <div
      className={`flex items-center rounded-full border p-0.5 text-[0.7rem] font-semibold tracking-wider ${
        light ? "border-white/30" : "border-line-strong"
      }`}
      role="group"
      aria-label="Language"
    >
      {LANGS.map((l) => {
        const active = l === lang;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={active}
            className={`cursor-pointer rounded-full px-2.5 py-1 uppercase transition-colors ${
              active
                ? "bg-gold text-[#0a0a0b]"
                : light
                  ? "text-white/70 hover:text-white"
                  : "text-muted hover:text-bone"
            }`}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}
