import { Reveal } from "./Reveal";
import { ProductCard } from "./ProductCard";
import type { Watch } from "@/lib/products";

export function ProductGrid({ watches }: { watches: Watch[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {watches.map((w, i) => (
        <Reveal key={w.slug} delay={(i % 3) * 0.08}>
          <ProductCard watch={w} />
        </Reveal>
      ))}
    </div>
  );
}
