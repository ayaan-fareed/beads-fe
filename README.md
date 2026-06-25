# Stainless Sparkle React

Converted from the original single HTML/CSS/JavaScript file into a professional Vite + React structure.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Structure

- `src/components/Navbar` — navbar with cart counter
- `src/components/Home` — home hero, features, CTA
- `src/components/Shop` — product filters and grid
- `src/components/ProductCard` — reusable product card
- `src/components/About` — about page and contact block
- `src/components/CartDrawer` — cart drawer and WhatsApp order flow
- `src/components/Footer` — reusable footer
- `src/components/Toast` — add-to-cart notification
- `src/data/products.js` — products, categories, WhatsApp number

## Cloudinary Image Upload

Product images can be uploaded directly from the admin product form to Cloudinary.

1. Copy `.env.example` to `.env`.
2. Set your Cloudinary values:
   - `VITE_CLOUDINARY_CLOUD_NAME` — from your Cloudinary dashboard.
   - `VITE_CLOUDINARY_UPLOAD_PRESET` — create an **unsigned** upload preset in Cloudinary and use its name.
3. Restart the dev server.
4. In the admin product form, choose a file under "Product Image" — the generated Cloudinary URL appears in "Image URL" once the upload completes.
