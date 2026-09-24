'use client';

import { useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import {
  Minus,
  Plus,
  Star,
  ShieldCheck,
  ShoppingBag,
} from 'lucide-react';
import { toast } from 'sonner';
import { getProduct, products } from '@/lib/data';
import { formatEGP } from '@/lib/utils';
import { useCart } from '@/store/cart';
import ProductCard from '@/components/ProductCard';

export default function ProductPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;

  const p = slug ? getProduct(slug) : null;

  const [finish, setFinish] = useState<'matte' | 'glossy'>('matte');
  const [type, setType] = useState<'single' | 'sheet-a4' | 'sheet-a5'>(
    'single'
  );
  const [qty, setQty] = useState(1);

  const add = useCart((s) => s.add);

  if (!p) return notFound();

  const price =
    p.price +
    (type === 'sheet-a4' ? 90 : type === 'sheet-a5' ? 55 : 0) +
    (finish === 'glossy' ? 10 : 0);

  const total = price * qty;

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-[2rem] bg-zinc-100">
          <img
            src={p.image}
            alt={p.name}
            className="aspect-square h-full w-full object-cover"
          />
        </div>

        <div className="py-2">
          <div className="mb-3 flex items-center gap-2 text-sm">
            <span className="text-amber-500">★★★★★</span>
            <span className="text-zinc-500">
              {p.rating} ({p.reviews} reviews)
            </span>
          </div>

          <h1 className="text-4xl font-black">{p.name}</h1>

          <p className="mt-4 leading-7 text-zinc-500">
            {p.description}
          </p>

          <div className="my-6 text-3xl font-black">
            {formatEGP(total)}
          </div>

          <div className="space-y-5">
            <div>
              <p className="mb-2 font-bold">Finish</p>

              <div className="flex gap-2">
                {[
                  ['matte', 'Matte'],
                  ['glossy', 'Glossy'],
                ].map(([v, t]) => (
                  <button
                    key={v}
                    onClick={() => setFinish(v as 'matte' | 'glossy')}
                    className={`rounded-xl border px-5 py-3 ${
                      finish === v
                        ? 'border-violet-600 bg-violet-50 text-violet-700'
                        : ''
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 font-bold">Sticker Type</p>

              <div className="grid grid-cols-3 gap-2">
                {[
                  ['single', 'Single Die-Cut'],
                  ['sheet-a5', 'A5 Sheet'],
                  ['sheet-a4', 'A4 Sheet'],
                ].map(([v, t]) => (
                  <button
                    key={v}
                    onClick={() =>
                      setType(
                        v as 'single' | 'sheet-a4' | 'sheet-a5'
                      )
                    }
                    className={`rounded-xl border px-3 py-3 text-sm ${
                      type === v
                        ? 'border-violet-600 bg-violet-50 text-violet-700'
                        : ''
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 font-bold">Quantity</p>

              <div className="flex w-fit items-center gap-5 rounded-xl border px-4 py-3">
                <button onClick={() => setQty(Math.max(1, qty - 1))}>
                  <Minus size={17} />
                </button>

                <span>{qty}</span>

                <button onClick={() => setQty(qty + 1)}>
                  <Plus size={17} />
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              add({
                product: p,
                quantity: qty,
                finish,
                type,
              });

              toast.success('اتضاف للسلة');
            }}
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-violet-600 py-4 font-bold text-white hover:bg-violet-700"
          >
            <ShoppingBag size={19} />
            أضف للسلة
          </button>

          <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl bg-zinc-100 p-4 dark:bg-zinc-900">
              <ShieldCheck className="mb-2" size={20} />
              <b>Waterproof</b>
              <p className="text-zinc-500">مقاوم للمياه</p>
            </div>

            <div className="rounded-2xl bg-zinc-100 p-4 dark:bg-zinc-900">
              <Star className="mb-2" size={20} />
              <b>Premium Vinyl</b>
              <p className="text-zinc-500">خامة عالية الجودة</p>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="mb-6 text-2xl font-black">
          You May Also Like
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {products
            .filter((x) => x.id !== p.id)
            .slice(0, 4)
            .map((x) => (
              <ProductCard key={x.id} product={x} />
            ))}
        </div>
      </section>
    </main>
  );
}