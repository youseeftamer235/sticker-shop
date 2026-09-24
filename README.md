# [اسم متجرك هنا] — Sticker Shop

Next.js + React + Tailwind CSS + Framer Motion + Zustand starter for an Egyptian vinyl-sticker store.

## Run
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Production checklist
- Replace the demo Unsplash images with licensed product photography in `/public/products` or an approved CDN.
- Add PostgreSQL/Prisma (or your chosen DB) and persist orders/products/users.
- Add server-side Paymob or Stripe Checkout integration; never collect raw card numbers.
- Add S3/Cloudinary upload flow for Instapay/Vodafone Cash transfer receipts.
- Validate and sanitize every checkout field server-side; add rate limiting and bot protection.
- Add transactional email/SMS/WhatsApp order notifications.
- Add admin dashboard for products, stock, orders, discounts and shipping rules.
- Configure real shipping rates and governorate/city data.
- Add legal pages: privacy, terms, returns, shipping.
- Add analytics/consent banner where required.
