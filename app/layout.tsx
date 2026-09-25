import './globals.css';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import CartDrawer from '@/components/CartDrawer';
import ThemeProvider from '@/components/ThemeProvider';

const siteUrl = 'https://sticker-shop-sandy.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Sticker Hub — Premium Vinyl Stickers',
    template: '%s | Sticker Hub',
  },

  description:
    'Premium vinyl stickers for laptops, phones, gaming setups, notebooks and cars. Stick Your Style.',

  keywords: [
    'stickers Egypt',
    'laptop stickers Egypt',
    'vinyl stickers',
    'gaming stickers',
    'anime stickers',
    'car stickers',
    'ستيكرات لاب توب',
    'استيكرات مصر',
  ],

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'ar_EG',
    url: siteUrl,
    siteName: 'Sticker Hub',
    title: 'Sticker Hub — Premium Vinyl Stickers',
    description:
      'Premium vinyl stickers for laptops, phones, gaming setups, notebooks and cars.',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Sticker Hub — Premium Vinyl Stickers',
    description:
      'Premium vinyl stickers for laptops, phones, gaming setups, notebooks and cars.',
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: 'fyJCRryMAI-bfI4PyMMESkswspJfLBUBHl9TIiw2oaQ',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <CartDrawer />
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}