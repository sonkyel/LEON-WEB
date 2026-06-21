import { Hero } from "@/components/Hero";
import { TrustBand } from "@/components/TrustBand";
import { BrandMarquee } from "@/components/BrandMarquee";
import { FeaturedWatches } from "@/components/FeaturedWatches";
import { SpotlightPiece } from "@/components/SpotlightPiece";
import { CategoryTiles } from "@/components/CategoryTiles";
import { BuyProcess } from "@/components/BuyProcess";
import { SellCta } from "@/components/SellCta";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBand />
      <BrandMarquee />
      <FeaturedWatches />
      <SpotlightPiece />
      <CategoryTiles />
      <BuyProcess />
      <SellCta />
      <Testimonials />
      <Faq />
    </main>
  );
}
