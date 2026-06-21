"use client";

import { useRef, type ReactNode } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Envoltorio con efecto magnético sutil para CTAs (se mueve hacia el cursor).
export function MagneticButton({
  href,
  children,
  className = "",
  wrapperClassName = "",
  external = false,
  strength = 0.35,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  wrapperClassName?: string;
  external?: boolean;
  strength?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const inner = <span className={className}>{children}</span>;

  return (
    <motion.span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={`inline-block ${wrapperClassName}`}
    >
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
          {inner}
        </a>
      ) : (
        <Link href={href} className="block">
          {inner}
        </Link>
      )}
    </motion.span>
  );
}
