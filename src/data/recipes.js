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
    id: "rendang-daging",
    title: "Rendang Daging",
    description: "Rendang padang kaya rempah dengan daging empuk berminyak.",
    image: "https://picsum.photos/seed/rendang-daging/600/400",
    ingredients: [
      "500g daging sapi potong",
      "800ml santan kental",
      "3 siung bawang putih",
      "5 siung bawang merah",
      "2 batang serai memarkan",
      "Garam dan cabai giling secukupnya",
    ],
    steps: [
      "Haluskan bawang dan cabai, tumis hingga harum.",
      "Masukkan daging, aduk hingga berubah warna.",
      "Tuang santan dan serai, masak api kecil sambil diaduk.",
      "Masak 2-3 jam hingga santan menyusut dan daging empuk.",
      "Koreksi rasa, sajikan dengan nasi hangat.",
    ],
  },
  {
    id: "soto-ayam",
    title: "Soto Ayam",
    description: "Soto ayam kuning segar dengan suwiran ayam dan telur.",
    image: "https://picsum.photos/seed/soto-ayam/600/400",
    ingredients: [
      "500g ayam kampung",
      "2 lembar daun salam",
      "2 batang serai",
      "3 cm kunyit bakar",
      "100g soun seduh",
      "Telur rebus dan jeruk nipis",
    ],
    steps: [
      "Rebus ayam dengan salam dan serai hingga empuk, suwir daging.",
      "Haluskan kunyit dan bawang, tumis hingga harum.",
      "Masukkan bumbu tumis ke kaldu, didihkan kembali.",
      "Tata soun, ayam suwir, dan telur di mangkok.",
      "Siram kuah panas, beri perasan jeruk nipis.",
    ],
  },
  {
    id: "gado-gado",
    title: "Gado-Gado",
    description: "Sayur rebus siram saus kacang gurih manis.",
    image: "https://picsum.photos/seed/gado-gado/600/400",
    ingredients: [
      "200g kacang tanah goreng",
      "100g tauge seduh",
      "100g kangkung rebus",
      "2 buah lontong potong",
      "3 siung bawang putih",
      "Gula merah dan cabai secukupnya",
    ],
    steps: [
      "Haluskan kacang, bawang putih, cabai, dan gula merah.",
      "Encerkan dengan air hangat hingga kental pas.",
      "Tata lontong dan sayuran di piring.",
      "Siram saus kacang merata.",
      "Taburi bawang goreng dan kerupuk.",
    ],
  },
  {
    id: "sate-ayam-madura",
    title: "Sate Ayam Madura",
    description: "Sate ayam bakar saus kacang khas Madura.",
    image: "https://picsum.photos/seed/sate-ayam-madura/600/400",
    ingredients: [
      "500g fillet ayam potong dadu",
      "20 tusuk sate",
      "150g kacang tanah goreng",
      "3 sdm kecap manis",
      "2 siung bawang putih",
      "Garam dan merica secukupnya",
    ],
    steps: [
      "Tusuk ayam ke tusukan sate, marinasi kecap dan garam 15 menit.",
      "Haluskan kacang dan bawang, masak dengan air jadi saus.",
      "Bakar sate sambil dioles saus hingga matang.",
      "Sajikan sate dengan sisa saus kacang.",
      "Lengkapi dengan lontong dan acar.",
    ],
  },
  {
    id: "bakso-sapi",
    title: "Bakso Sapi",
    description: "Bakso sapi kenyal kuah kaldu gurih.",
    image: "https://picsum.photos/seed/bakso-sapi/600/400",
    ingredients: [
      "300g daging sapi giling",
      "50g tepung tapioka",
      "1 butir telur",
      "1 liter kaldu sapi",
      "3 siung bawang putih goreng",
      "Garam, merica, dan daun bawang",
    ],
    steps: [
      "Campur daging giling, tapioka, telur, dan bumbu, uleni rata.",
      "Bentuk bulatan bakso, rebus hingga mengapung, tiriskan.",
      "Didihkan kaldu dengan bawang putih goreng.",
      "Masukkan bakso ke kuah, masak sebentar.",
      "Sajikan dengan mie, sawi, dan sambal.",
    ],
  },
  {
    id: "tempe-mendoan",
    title: "Tempe Mendoan",
    description: "Tempe tipis goreng tepung gurih setengah matang.",
    image: "https://picsum.photos/seed/tempe-mendoan/600/400",
    ingredients: [
      "1 papan tempe iris tipis lebar",
      "100g tepung terigu",
      "2 batang daun bawang iris",
      "2 siung bawang putih haluskan",
      "1 sdt ketumbar bubuk",
      "Garam dan air secukupnya",
    ],
    steps: [
      "Campur tepung, bawang putih, ketumbar, garam, dan air jadi adonan kental.",
      "Masukkan daun bawang ke adonan.",
      "Celup tempe ke adonan hingga terbalut rata.",
      "Goreng cepat di minyak panas hingga tepung setengah matang.",
      "Angkat, sajikan dengan sambal kecap.",
    ],
  },
  {
    id: "gulai-ayam-padang",
    title: "Gulai Ayam Padang",
    description: "Gulai ayam santan kuning pedas khas Padang.",
    image: "https://picsum.photos/seed/gulai-ayam-padang/600/400",
    ingredients: [
      "600g ayam potong",
      "500ml santan kental",
      "3 lembar daun jeruk",
      "2 cm lengkuas memarkan",
      "5 siung bawang merah haluskan",
      "Cabai giling dan kunyit secukupnya",
    ],
    steps: [
      "Tumis bumbu halus dengan daun jeruk dan lengkuas hingga harum.",
      "Masukkan ayam, aduk hingga terbalut bumbu.",
      "Tuang santan, masak api kecil sambil diaduk agar tidak pecah.",
      "Masak hingga ayam empuk dan kuah mengental.",
      "Koreksi rasa, angkat dan sajikan.",
    ],
  },
  {
    id: "rawon-daging",
    title: "Rawon Daging",
    description: "Sup daging hitam pekat dengan kluwek khas Jawa Timur.",
    image: "https://picsum.photos/seed/rawon-daging/600/400",
    ingredients: [
      "500g daging sapi sandung lamur",
      "3 buah kluwek ambil isinya",
      "4 siung bawang merah",
      "3 siung bawang putih",
      "2 batang serai",
      "Tauge pendek dan telur asin pelengkap",
    ],
    steps: [
      "Haluskan kluwek, bawang merah, dan bawang putih.",
      "Tumis bumbu halus dengan serai hingga harum.",
      "Masukkan daging, aduk hingga berubah warna.",
      "Tuang air, rebus hingga daging empuk dan kuah hitam pekat.",
      "Sajikan dengan tauge, telur asin, dan sambal.",
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
