"use client";

import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { useI18n } from "./LanguageProvider";
import { Logo } from "./Logo";
import { InstagramIcon } from "./InstagramIcon";
import { site, waLink } from "@/lib/site";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const explore = [
    { href: "/catalogo", label: t.nav.catalog },
    { href: "/vender", label: t.nav.sell },
    { href: "/nosotros", label: t.nav.about },
    { href: "/contacto", label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-[1340px] px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo size={40} className="text-bone" />
            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-muted">
              {t.footer.tagline}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="kicker mb-5 text-muted">{t.footer.explore}</p>
            <ul className="space-y-3">
              {explore.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="link-underline text-sm font-light text-bone/80"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="kicker mb-5 text-muted">{t.footer.contact}</p>
            <ul className="space-y-3 text-sm font-light text-bone/80">
              <li>
                <a
                  href={waLink(t.contactPage.waMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-2"
                >
                  <MessageCircle size={16} className="text-gold" /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-2"
                >
                  <InstagramIcon size={16} className="text-gold" /> @{site.instagram}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="link-underline inline-flex items-center gap-2"
                >
                  <Mail size={16} className="text-gold" /> {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-8">
          <p className="text-xs leading-relaxed text-muted">
            {t.footer.disclaimer}
          </p>
          <p className="mt-4 text-xs text-muted">
            © {year} {site.name}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
