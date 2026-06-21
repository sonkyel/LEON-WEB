import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  intro,
  index,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  index?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <Reveal>
          <p
            className={`kicker mb-4 flex items-center gap-3 text-gold ${
              center ? "justify-center" : ""
            }`}
          >
            {index && <span className="text-gold/55">{index}</span>}
            {index && <span className="h-px w-8 bg-gold/40" />}
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="display text-4xl text-bone md:text-5xl">{title}</h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p
            className={`mt-5 text-base font-light leading-relaxed text-muted ${
              center ? "mx-auto" : ""
            }`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
