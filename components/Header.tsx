'use client';

import Link from 'next/link';
import {
  Menu,
  Search,
  ShoppingBag,
  Sun,
  Moon,
  X,
} from 'lucide-react';
import { useCart } from '@/store/cart';
import { useState } from 'react';

export default function Header() {
  const [menu, setMenu] = useState(false);
  const { items, setOpen } = useCart();

  const toggle = () =>
    document.getElementById('theme-controller')?.click();

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link
          href="/"
          className="text-xl font-black tracking-tight"
        >
          Sticker Hub
        </Link>

        <nav className="hidden gap-7 md:flex">
          <Link href="/shop" className="hover:text-violet-500">
            المتجر
          </Link>

          <Link
            href="/custom-pack"
            className="hover:text-violet-500"
          >
            ابني باكدج
          </Link>

          <Link href="/#new" className="hover:text-violet-500">
            الجديد
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <button
            className="rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            onClick={toggle}
          >
            {typeof window !== 'undefined' &&
            document.documentElement.classList.contains('dark') ? (
              <Sun size={19} />
            ) : (
              <Moon size={19} />
            )}
          </button>

          <Link
            href="/shop"
            className="hidden rounded-full p-2 hover:bg-zinc-100 md:block"
          >
            <Search size={19} />
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="relative rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <ShoppingBag size={19} />

            {items.length > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-violet-600 text-xs text-white">
                {items.reduce((a, b) => a + b.quantity, 0)}
              </span>
            )}
          </button>

          <button
            className="md:hidden"
            onClick={() => setMenu((v) => !v)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {menu && (
        <div className="border-t p-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              onClick={() => setMenu(false)}
              href="/shop"
            >
              المتجر
            </Link>

            <Link
              onClick={() => setMenu(false)}
              href="/custom-pack"
            >
              ابني باكدج
            </Link>

            <Link
              onClick={() => setMenu(false)}
              href="/#new"
            >
              الجديد
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}