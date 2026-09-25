import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { categories, products } from '@/lib/data';
import ProductCard from '@/components/ProductCard';

const siteUrl = 'https://sticker-shop-sandy.vercel.app';

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { category } = await params;
  const c = categories.find((x) => x.slug === category);

  if (!c) {
    return {
      title: 'Category Not Found | Sticker Hub',
    };
  }

  const title = `${c.name} Stickers`;
  const description = `Shop premium ${c.name.toLowerCase()} vinyl stickers from Sticker Hub. Waterproof stickers for laptops, phones, notebooks and more.`;

  return {
    title,
    description,

    alternates: {
      canonical: `${siteUrl}/shop/${c.slug}`,
    },

    openGraph: {
      type: 'website',
      url: `${siteUrl}/shop/${c.slug}`,
      title: `${title} | Sticker Hub`,
      description,
      siteName: 'Sticker Hub',
    },

    twitter: {
      card: 'summary',
      title: `${title} | Sticker Hub`,
      description,
    },
  };
}

export default async function Category({ params }: Props) {
  const { category } = await params;

  const c = categories.find((x) => x.slug === category);

  if (!c) return notFound();

  const categoryProducts = products.filter(
    (p) => p.category === category
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-10">
        <div className="text-5xl">{c.emoji}</div>

        <h1 className="mt-3 text-4xl font-black">
          {c.name}
        </h1>

        <p className="mt-3 max-w-2xl text-zinc-500">
          Shop premium {c.name.toLowerCase()} vinyl stickers
          from Sticker Hub.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {categoryProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}