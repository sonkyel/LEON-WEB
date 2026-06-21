"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Image from "next/image";

function Poster() {
  return (
    <Image
      src="/watches/hero-watch.png"
      alt="Reloj de lujo — CL Collectibles"
      fill
      priority
      sizes="(max-width: 1024px) 92vw, 50vw"
      className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
    />
  );
}

const Hero3D = dynamic(() => import("./Hero3D").then((m) => m.Hero3D), {
  ssr: false,
  loading: () => <Poster />,
});

export function HeroCanvas() {
  const [use3D, setUse3D] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 1024px)").matches;
    setUse3D(!reduce && !small);
  }, []);

  return (
    <div className="relative h-full w-full">
      {use3D ? <Hero3D /> : <Poster />}
    </div>
  );
}
