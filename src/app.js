import { recipes } from "./data/recipes.js";

const app = document.getElementById("app");

function renderList() {
  if (!recipes.length) {
    app.innerHTML = `<div class="empty"><h1>Belum ada resep</h1><p>Data akan muncul setelah seed 10 resep (tiket 05).</p></div>`;
    return;
  }
  app.innerHTML = `<h1>Daftar Resep</h1><div class="grid">${recipes
    .map(
      (r) => `<article class="card">
  <img src="${r.image}" alt="${r.title}" loading="lazy" />
  <div class="card-body">
    <h2 class="card-title">${r.title}</h2>
    <p class="card-desc">${r.description}</p>
    <a class="card-link" href="#/resep/${r.id}">Lihat Detail</a>
  </div>
</article>`
    )
    .join("")}</div>`;
}

function renderDetail(id) {
  const r = recipes.find((x) => x.id === id);
  if (!r) {
    app.innerHTML = `<div class="not-found"><h1>Resep tidak ditemukan</h1><p>ID: ${id}</p><a class="back" href="#/">← Kembali ke daftar</a></div>`;
    return;
  }
  app.innerHTML = `<article class="detail">
  <a class="back" href="#/">← Kembali</a>
  <img src="${r.image}" alt="${r.title}" />
  <h1>${r.title}</h1>
  <p>${r.description}</p>
  <div class="meta"><span>⏱ durasi —</span><span>🍽 porsi —</span></div>
  <h2>Bahan</h2><ul class="ingredients">${r.ingredients.map((x) => `<li>${x}</li>`).join("")}</ul>
  <h2>Langkah</h2><ol class="steps">${r.steps.map((x) => `<li>${x}</li>`).join("")}</ol>
</article>`;
  // ponytail: meta durasi/porsi hardcode "—" — tambah field recipe.duration/servings saat tiket filter butuh.
}

function route() {
  const hash = location.hash || "#/";
  const m = hash.match(/^#\/resep\/([^/]+)\/?$/);
  if (m) renderDetail(decodeURIComponent(m[1]));
  else renderList();
}

window.addEventListener("hashchange", route);
route();
