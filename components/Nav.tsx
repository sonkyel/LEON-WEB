"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n } from "./LanguageProvider";
import { Logo } from "./Logo";
import { LanguageToggle } from "./LanguageToggle";

export function Nav() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/catalogo", label: t.nav.catalog },
    { href: "/vender", label: t.nav.sell },
    { href: "/nosotros", label: t.nav.about },
    { href: "/contacto", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú móvil al cambiar de ruta.
  useEffect(() => setOpen(false), [pathname]);

  // En la home, mientras no se hace scroll, el Nav está sobre el hero oscuro.
  const overHero = pathname === "/" && !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        overHero
          ? "border-b border-transparent bg-transparent"
          : "border-b border-line bg-bg/85 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-[1340px] items-center justify-between px-6 py-4 md:px-10 md:py-5">
        <Logo size={32} />

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => {
            const active = l.href === pathname;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`link-underline text-sm font-light transition-colors ${
                    active ? "text-gold-light" : "text-bone/75 hover:text-bone"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <LanguageToggle light={overHero} />
          <Link
            href="/contacto"
            className="kicker btn-gold hidden rounded-full px-5 py-2.5 sm:inline-block"
          >
            {t.nav.cta}
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className={`flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${
              overHero ? "btn-outline-light" : "btn-outline"
            }`}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      {open && (
        <div className="border-t border-line bg-bg/97 px-6 py-6 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => {
              const active = l.href === pathname;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`display-light block py-2 text-3xl ${
                      active ? "text-gold-light" : "text-bone"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/contacto"
            className="kicker btn-gold mt-5 inline-block rounded-full px-6 py-3"
          >
            {t.nav.cta}
          </Link>
        </div>
      )}
    </header>
  );
}
