"use client";

import { useState } from "react";
import { MessageCircle, Mail, Send } from "lucide-react";
import { useI18n } from "./LanguageProvider";
import { InstagramIcon } from "./InstagramIcon";
import { site, waLink } from "@/lib/site";

export function ContactPage() {
  const { t } = useI18n();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `${t.contactPage.formMsgDefault} ${name ? `(${name}) ` : ""}${message}`.trim();
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  };

  const channels = [
    {
      icon: MessageCircle,
      label: t.contactPage.whatsapp,
      value: "+" + site.whatsapp,
      href: waLink(t.contactPage.waMsg),
    },
    {
      icon: InstagramIcon,
      label: t.contactPage.instagram,
      value: "@" + site.instagram,
      href: site.instagramUrl,
    },
    {
      icon: Mail,
      label: t.contactPage.email,
      value: site.email,
      href: `mailto:${site.email}`,
    },
  ];

  const fieldClass =
    "w-full rounded-xl border border-line-strong bg-surface px-4 py-3 text-sm text-bone outline-none transition-colors placeholder:text-muted focus-visible:border-gold";

  return (
    <main className="mx-auto max-w-[1340px] px-6 pb-24 pt-32 md:px-10 md:pt-40">
      <header className="max-w-3xl">
        <p className="kicker mb-4 text-gold">{t.contactPage.eyebrow}</p>
        <h1 className="display text-4xl text-bone md:text-6xl">
          {t.contactPage.title}
        </h1>
        <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-muted">
          {t.contactPage.intro}
        </p>
      </header>

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Canales */}
        <div className="space-y-4">
          {channels.map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card group flex items-center gap-5 rounded-2xl p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                  <Icon size={20} />
                </span>
                <span>
                  <span className="kicker block text-muted">{c.label}</span>
                  <span className="mt-1 block text-base font-medium text-bone transition-colors group-hover:text-gold-light">
                    {c.value}
                  </span>
                </span>
              </a>
            );
          })}
        </div>

        {/* Formulario → WhatsApp */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="kicker mb-2 block text-muted">
              {t.contactPage.formName}
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={fieldClass}
              autoComplete="name"
            />
          </div>
          <div>
            <label htmlFor="message" className="kicker mb-2 block text-muted">
              {t.contactPage.formMessage}
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${fieldClass} resize-none`}
            />
          </div>
          <button
            type="submit"
            className="btn-gold inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold sm:w-auto"
          >
            <Send size={17} /> {t.contactPage.formSend}
          </button>
        </form>
      </div>
    </main>
  );
}
