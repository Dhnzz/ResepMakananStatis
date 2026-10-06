/**
 * @typedef {Object} Recipe
 * @property {string} id - kebab-case slug, unik, URL-safe (dipakai /resep/{id})
 * @property {string} title
 * @property {string} description - 1 kalimat untuk card list
 * @property {string} image - URL eksternal / placeholder
 * @property {string[]} ingredients
 * @property {string[]} steps
 */

// ponytail: ceiling 20 resep hardcoded — skip category/cookTime/servings/difficulty,
// add sebagai field optional tanpa breaking saat tiket filter/search butuh.

/** @type {Recipe[]} */
export const recipes = [
  {
    id: "ayam-goreng-mentega",
    title: "Ayam Goreng Mentega",
    description: "Ayam goreng manis gurih dengan saus mentega.",
    image: "https://picsum.photos/seed/ayam-goreng-mentega/600/400",
    ingredients: [
      "500g ayam potong",
      "2 sdm mentega",
      "3 siung bawang putih cincang",
      "2 sdm kecap manis",
      "1 sdm kecap inggris",
      "Garam dan merica secukupnya",
    ],
    steps: [
      "Marinasi ayam dengan garam dan merica 15 menit.",
      "Goreng ayam hingga matang keemasan, tiriskan.",
      "Lelehkan mentega, tumis bawang putih hingga harum.",
      "Masukkan kecap manis dan kecap inggris, aduk rata.",
      "Masukkan ayam goreng, aduk hingga terbalut saus.",
    ],
  },
  {
    id: "nasi-goreng-spesial",
    title: "Nasi Goreng Spesial",
    description: "Nasi goreng klasik dengan telur dan ayam suwir.",
    image: "https://picsum.photos/seed/nasi-goreng-spesial/600/400",
    ingredients: [
      "400g nasi putih dingin",
      "2 butir telur",
      "100g ayam suwir",
      "2 sdm kecap manis",
      "2 siung bawang merah iris",
      "1 siung bawang putih cincang",
    ],
    steps: [
      "Panaskan minyak, orak-arik telur, sisihkan.",
      "Tumis bawang merah dan bawang putih hingga harum.",
      "Masukkan nasi dan ayam suwir, aduk rata.",
      "Tambahkan kecap manis, aduk hingga warna merata.",
      "Masukkan telur orak-arik, aduk sebentar dan sajikan.",
    ],
  },
];
