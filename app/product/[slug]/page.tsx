import type { Metadata } from 'next';
import ProductView from './ProductView';
import { getProduct } from '@/lib/data';

const siteUrl = 'https://sticker-shop-sandy.vercel.app';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {
      title: 'Product Not Found | Sticker Hub',
    };
  }

  return {
    title: product.name,
    description: product.description,

    keywords: product.tags,

    alternates: {
      canonical: `${siteUrl}/product/${product.slug}`,
    },

    openGraph: {
      type: 'website',
      url: `${siteUrl}/product/${product.slug}`,
      title: `${product.name} | Sticker Hub`,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 900,
          height: 900,
          alt: product.name,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Sticker Hub`,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({
  params,
}: Props) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return <ProductView slug={slug} />;
  }

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: [product.image],
    url: `${siteUrl}/product/${product.slug}`,

    brand: {
      '@type': 'Brand',
      name: 'Sticker Hub',
    },

    offers: {
      '@type': 'Offer',
      url: `${siteUrl}/product/${product.slug}`,
      priceCurrency: 'EGP',
      price: product.price,
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
    },

    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviews,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />

      <ProductView slug={slug} />
    </>
  );
}