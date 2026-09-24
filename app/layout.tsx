import './globals.css';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import Header from '@/components/Header';
import CartDrawer from '@/components/CartDrawer';
import ThemeProvider from '@/components/ThemeProvider';

export const metadata = {
  title: 'Sticker Hub — Premium Vinyl Stickers',
  description:
    'Premium vinyl stickers for laptops, gaming setups, phones, notebooks and cars. Stick Your Style.',
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