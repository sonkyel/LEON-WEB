"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useI18n } from "./LanguageProvider";
import { MagneticButton } from "./MagneticButton";

// Video activo del hero. Cambia a "/hero/deconstruct.mp4" para la versión de deconstrucción.
const HERO_VIDEO = "/hero/zoom.mp4";
const POSTER = "/watches/hero-watch.png";

const clamp = (v: number, a = 0, b = 1) => Math.min(Math.max(v, a), b);

export function HeroScrollVideo() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const claimRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);
  const [scrub, setScrub] = useState(false);

  // Scroll-zoom solo en desktop sin reduced-motion; en móvil el video va en loop simple.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 1024px)").matches;
    setScrub(!reduce && !small);
  }, []);

  // El scroll controla el zoom (scale CSS) y las transiciones de texto. Vía rAF → inmune a Lenis.
  useEffect(() => {
    if (!scrub) return;
    const section = sectionRef.current;
    if (!section) return;

    let raf = 0;
    const tick = () => {
      const rect = section.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = total > 0 ? clamp(-rect.top / total) : 0;

      // Zoom del reloj
      if (videoRef.current) {
        videoRef.current.style.transform = `scale(${1 + p * 0.45})`;
      }
      // Fase 1 (titular) se desvanece y sube
      const t1 = clamp(p / 0.3);
      if (titleRef.current) {
        titleRef.current.style.opacity = String(1 - t1);
        titleRef.current.style.transform = `translateY(${-t1 * 50}px)`;
        titleRef.current.style.pointerEvents = t1 >= 1 ? "none" : "auto";
      }
      // Fase 2 (claim) aparece
      const t2 = clamp((p - 0.5) / 0.25);
      if (claimRef.current) {
        claimRef.current.style.opacity = String(t2);
        claimRef.current.style.transform = `translateY(${(1 - t2) * 40}px)`;
      }
      // Indicador de scroll
      if (cueRef.current) cueRef.current.style.opacity = String(1 - clamp(p / 0.1));

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [scrub]);

  return (
    <section ref={sectionRef} className={`relative ${scrub ? "h-[220vh]" : "min-h-[100svh]"}`}>
      <div
        className={`flex w-full items-center overflow-hidden ${
          scrub
            ? "sticky top-0 h-[100svh]"
            : "min-h-[100svh] pb-24 pt-28"
        }`}
      >
        {/* Video (se reproduce solo en loop; el scroll le añade zoom) */}
        <video
          ref={videoRef}
          src={HERO_VIDEO}
          poster={POSTER}
          muted
          loop
          autoPlay
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
          style={{ transformOrigin: "center center" }}
        />

        {/* Capas oscuras para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/55 to-bg/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40" />
        <div className="noise absolute inset-0" />

        <div className="relative z-10 mx-auto w-full max-w-[1340px] px-6 md:px-10">
          {/* Fase 1 — titular + CTAs */}
          <div ref={titleRef} className="max-w-2xl will-change-transform">
            <p className="kicker text-gold">{t.hero.eyebrow}</p>
            <h1 className="display mt-5 text-[2rem] leading-[1.1] text-white sm:mt-6 sm:text-5xl sm:leading-[1.04] md:text-6xl xl:text-7xl">
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-bone/80 sm:mt-7 sm:text-lg">
              {t.hero.subtitle}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
              <MagneticButton
                href="/catalogo"
                wrapperClassName="w-full sm:w-auto"
                className="btn-gold inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold sm:w-auto"
              >
                {t.hero.ctaPrimary} <ArrowRight size={17} />
              </MagneticButton>
              <MagneticButton
                href="/vender"
                wrapperClassName="w-full sm:w-auto"
                className="btn-outline-light inline-flex w-full items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold sm:w-auto"
              >
                {t.hero.ctaSecondary}
              </MagneticButton>
            </div>
          </div>

          {/* Fase 2 — claim (solo con scroll-zoom; inicia oculto) */}
          {scrub && (
            <div
              ref={claimRef}
              style={{ opacity: 0 }}
              className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 px-6 text-center will-change-transform md:px-10"
            >
              <p className="display mx-auto max-w-3xl text-3xl text-white md:text-5xl">
                {t.hero.claim}
              </p>
            </div>
          )}
        </div>

        {/* Indicador de scroll (solo desktop / modo scroll-zoom) */}
        <div ref={cueRef} className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block">
          <div className="scroll-cue flex flex-col items-center gap-2 text-bone/60">
            <span className="kicker text-[0.6rem]">{t.hero.scroll}</span>
            <span className="mx-auto mt-2 h-10 w-px bg-gradient-to-b from-gold to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
