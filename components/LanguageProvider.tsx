"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { dict, type Lang, type Dict } from "@/lib/i18n";

interface I18nValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Dict;
}

const I18nContext = createContext<I18nValue | null>(null);

const STORAGE_KEY = "cl-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Inicia en "es" tanto en servidor como en el primer render del cliente
  // para evitar desajustes de hidratación; luego se sincroniza con localStorage.
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "es" || stored === "en") {
      setLangState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l;
  };

  const toggle = () => setLang(lang === "es" ? "en" : "es");

  const value: I18nValue = {
    lang,
    setLang,
    toggle,
    t: dict[lang] as Dict,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n debe usarse dentro de <LanguageProvider>");
  }
  return ctx;
}
