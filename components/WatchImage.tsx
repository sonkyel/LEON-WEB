"use client";

import { useState } from "react";
import Image from "next/image";
import type { Tone } from "@/lib/products";

// Placeholder visual elegante de respaldo (si falta la foto real).
const tones: Record<Tone, { bg: string; ring: string; face: string }> = {
  steel: {
    bg: "radial-gradient(120% 120% at 30% 20%, #3a3d42 0%, #1a1c1f 60%, #0e0f11 100%)",
    ring: "#8b8f96",
    face: "#cfd3d8",
  },
  gold: {
    bg: "radial-gradient(120% 120% at 30% 20%, #5c4715 0%, #2a2008 60%, #100c03 100%)",
    ring: "#e8cd8c",
    face: "#f0dca0",
  },
  rose: {
    bg: "radial-gradient(120% 120% at 30% 20%, #5a3a30 0%, #2a1a15 60%, #120b08 100%)",
    ring: "#e0a98f",
    face: "#f0c6b2",
  },
  black: {
    bg: "radial-gradient(120% 120% at 30% 20%, #26282b 0%, #131416 60%, #0a0a0b 100%)",
    ring: "#5c6066",
    face: "#23252a",
  },
  blue: {
    bg: "radial-gradient(120% 120% at 30% 20%, #1c2f4a 0%, #111c2e 60%, #0a0f17 100%)",
    ring: "#6f93c4",
    face: "#21426d",
  },
  green: {
    bg: "radial-gradient(120% 120% at 30% 20%, #1d3a2c 0%, #122319 60%, #0a130d 100%)",
    ring: "#6fae8c",
    face: "#1f4632",
  },
};

function Placeholder({ tone, brand }: { tone: Tone; brand: string }) {
  const c = tones[tone];
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{ background: c.bg }}
      aria-hidden
    >
      <span className="kicker absolute left-4 top-4 text-[0.6rem] text-white/25">
        {brand}
      </span>
      <svg viewBox="0 0 160 200" width="52%">
        <rect x="58" y="6" width="44" height="46" rx="10" fill={c.face} opacity="0.85" />
        <rect x="58" y="148" width="44" height="46" rx="10" fill={c.face} opacity="0.85" />
        <circle cx="80" cy="100" r="58" fill={c.ring} />
        <circle cx="80" cy="100" r="48" fill={c.face} />
        <line x1="80" y1="100" x2="80" y2="66" stroke="#0a0a0b" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="80" y1="100" x2="106" y2="100" stroke="#0a0a0b" strokeWidth="3" strokeLinecap="round" />
        <circle cx="80" cy="100" r="3.5" fill="#0a0a0b" />
        <rect x="136" y="94" width="9" height="12" rx="2" fill={c.ring} />
      </svg>
    </div>
  );
}

export function WatchImage({
  slug,
  tone,
  brand,
  className = "",
  sizes = "(max-width: 768px) 90vw, 33vw",
  priority = false,
  zoom = true,
}: {
  slug: string;
  tone: Tone;
  brand: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  zoom?: boolean;
}) {
  const [error, setError] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-[#0a0a0b] ${className}`}>
      {error ? (
        <Placeholder tone={tone} brand={brand} />
      ) : (
        <Image
          src={`/watches/${slug}.png`}
          alt={`${brand} — CL Collectibles`}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setError(true)}
          className={`object-cover transition-transform duration-[900ms] ease-out ${
            zoom ? "group-hover:scale-105" : ""
          }`}
        />
      )}
    </div>
  );
}
