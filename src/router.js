/**
 * @param {string} hash - location.hash ("" | "#/" | "#/resep/:id")
 * @returns {{ view: "list" } | { view: "detail", id: string }}
 * ponytail: ceiling hash SPA — upgrade ke history+rewrites saat butuh URL bersih/SEO; ganti parseRoute + firebase.json rewrites.
 */
export function parseRoute(hash) {
  const h = hash || "#/";
  const m = h.match(/^#\/resep\/([^/]+)\/?$/);
  if (m) return { view: "detail", id: decodeURIComponent(m[1]) };
  return { view: "list" };
}
