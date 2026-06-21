import Link from "next/link";

// Monograma hexagonal "CL" + wordmark "CL COLLECTIBLES".
// Usa currentColor, así que el color lo define la clase de texto del contenedor.
export function LogoMark({
  size = 34,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 110"
      width={(size * 100) / 110}
      height={size}
      className={className}
      role="img"
      aria-label="CL Collectibles"
    >
      {/* Hexágono */}
      <polygon
        points="50,3 94,29 94,81 50,107 6,81 6,29"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      {/* Monograma CL */}
      <text
        x="50"
        y="68"
        textAnchor="middle"
        fontFamily="var(--font-sans), Arial, sans-serif"
        fontSize="44"
        fontWeight="800"
        letterSpacing="-2"
        fill="currentColor"
      >
        CL
      </text>
    </svg>
  );
}

export function Logo({
  className = "",
  size = 34,
  showWordmark = true,
}: {
  className?: string;
  size?: number;
  showWordmark?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="CL Collectibles — inicio"
      className={`inline-flex items-center gap-3 ${className}`}
    >
      <LogoMark size={size} />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="text-[1.05rem] font-bold tracking-[0.18em]">CL</span>
          <span className="text-[0.6rem] font-medium tracking-[0.34em] opacity-70">
            COLLECTIBLES
          </span>
        </span>
      )}
    </Link>
  );
}
