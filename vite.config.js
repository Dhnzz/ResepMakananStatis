import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  build: { outDir: "dist" },
  // ponytail: ceiling SPA hash (B) — no history fallback, no SSR. Add server/preview/build.rollupOptions saat butuh MPA (tiket 02 opsi D).
});
