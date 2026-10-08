# 06 — Kriteria Selesai & Deploy Checklist

> Done = URL live `https://*.web.app` bisa dibuka orang, semua kotak di bawah tercentang.

## Pre-deploy (lokal)

```bash
npm ci
npm run build        # harus sukses, folder dist/ ada
npx vite preview     # http://localhost:4173
```

- [ ] `npm run build` sukses, `dist/index.html` + `dist/assets/*` ada
- [ ] `preview` — `http://localhost:4173/` 200, list render (grid card)
- [ ] `http://localhost:4173/#/resep/:id` — detail render (judul, gambar, bahan, langkah)
- [ ] `http://localhost:4173/#/resep/tidak-ada` — 404 "Resep tidak ditemukan" + link kembali
- [ ] Responsive minimal — 320px (1 kolom) & 1024px (grid) tidak overflow horizontal
- [ ] Console kosong — DevTools Console tanpa error/warning (F12), Network tanpa 404 asset

## Deploy

```bash
firebase deploy --only hosting
# ponytail: ceiling manual deploy — tambah hosting:channel:deploy saat butuh preview channel.
```

## Post-deploy (live)

Ganti `URL` dengan `https://<project>.web.app` dari output deploy / Firebase Console.

```bash
curl -I https://<URL>/
curl -I https://<URL>/assets/index-*.css
curl -I https://<URL>/assets/index-*.js
```

- [ ] `curl -I https://<URL>/` → `200`, `content-type: text/html`
- [ ] Buka `https://<URL>/` — list render, klik "Lihat Detail" → `#/resep/:id` navigate tanpa reload
- [ ] `https://<URL>/#/resep/tidak-ada` — 404 handling sama seperti lokal
- [ ] `https://<URL>/#/resep/ayam-goreng-mentega` refresh (F5) — tetap 200, tidak 404 hosting (jaminan hash SPA tanpa rewrites)
- [ ] Responsive & no console error — cek ulang di URL live (DevTools)
- [ ] Cache headers — `curl -I` pada `/assets/*` → `cache-control: public, max-age=31536000, immutable`
- [ ] `curl -I https://<URL>/` → `cache-control` tidak immutable (index.html fresh)

## Definisi Done

Semua kotak Pre + Post tercentang, satu `curl -I` + satu screenshot live dilampirkan di PR/issue.
