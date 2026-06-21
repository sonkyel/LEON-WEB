import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/ProductDetail";
import { watches, getWatch, getRelated } from "@/lib/products";

export function generateStaticParams() {
  return watches.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const watch = getWatch(slug);
  if (!watch) return { title: "Reloj" };
  const title = `${watch.brand} ${watch.model} ${watch.ref}`;
  return {
    title,
    description: `${title} — ${watch.year}. Reloj de lujo certificado en CL Collectibles. Autenticidad garantizada.`,
    alternates: { canonical: `/reloj/${watch.slug}` },
  };
}

export default async function WatchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const watch = getWatch(slug);
  if (!watch) notFound();

  const related = getRelated(slug, 3);
  return <ProductDetail watch={watch} related={related} />;
}
