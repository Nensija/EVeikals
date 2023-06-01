const categoryData = [
  { id: 0, name: "Visi" },
  { id: 1, name: "Apģēri" },
  { id: 2, name: "Apavi" },
  { id: 3, name: "Sports" },
  { id: 4, name: "Aksesuāri" },
  { id: 5, name: "Rotaļlietas" }
];

const sizeData = [
  { id: 1, name: "XXS" },
  { id: 2, name: "XS" },
  { id: 3, name: "S" },
  { id: 4, name: "M" },
  { id: 5, name: "L" },
  { id: 6, name: "XL" }
];
const brandData = [
  { id: 1, name: "Nike" },
  { id: 2, name: "Adidas" },
  { id: 3, name: "Reebook" },
  { id: 4, name: "Guess" },
  { id: 5, name: "Puma" },
  { id: 6, name: "Calvin Klein" }
];
const cartData = {
  totalPrice: 70.0,
  totalQuantity: 5,
  items: [
    { productid: 1, price: 20.0, quantity: 1 },
    { productid: 2, price: 10.0, quantity: 3 }
  ]
};

const colorData = [
  { id: 1, name: "Red", color: "#f54242" },
  { id: 2, name: "Blue", color: "#f54242" },
  { id: 3, name: "Yellow", color: "#f54242" },
  { id: 4, name: "Green", color: "#f54242" },
  { id: 5, name: "Purple", color: "#f54242" }
];

const productData = [
  {
    id: 1,
    name: "Pludmales jaka",
    description:
      "Laba jaka vējainai dienai ,lai aizietu uz pludmali pastaigāties",
    price: 20.0,
    category: [1],
    size: [1, 2, 4],
    brand: [1, 4],
    color: [2, 5],
    isFreeShipping: true,
    image: "images/Bilde 1.jpg"
  },
  {
    id: 2,
    name: "Pludmales čības",
    description: "Čības lai varētu izbaudīt smiltij pludmalē",
    price: 10.0,
    category: [2],
    size: [1, 2, 3, 4],
    brand: 2,
    color: [2, 3, 4],
    isFreeShipping: true,
    image: "images/Bilde 2.jpg"
  },
  {
    id: 3,
    name: "Pikačū Botas",
    description: "Ērtas,ikdienišķas un izskatīgas botas",
    price: 30.5,
    category: [2, 3],
    size: [5, 3, 1, 6],
    brand: 1,
    color: [3],
    isFreeShipping: false,
    image: "images/Bilde 3.jpg"
  },
  {
    id: 4,
    name: "Botas",
    price: 30,
    description: "Ērtas ikdienišķas botas",
    category: [2, 3],
    size: [6],
    brand: 2,
    color: [1],
    isFreeShipping: false,
    image: "images/Bilde 4.jpg"
  },
  {
    id: 5,
    name: "Mīkstā mantiņa",
    description: "Mīkstā mantiņa ar kuru bērniem ātrāk aizmigt +0 ",
    price: 25.5,
    category: [5],
    size: [1, 2, 3, 4, 5],
    brand: [1, 2, 3, 4],
    color: [1, 2, 3, 4, 5],
    isFreeShipping: true,
    image: "images/Bilde 5.webp"
  },
  {
    id: 6,
    name: "Lego",
    description: "Atīsta motoriku 6+",
    price: 40.0,
    category: [5],
    size: [1, 2, 3, 4, 5],
    brand: [1, 2, 3, 4],
    color: [1, 2, 3, 4, 5],
    isFreeShipping: false,
    image: "images/Bilde 6.webp"
  },
  {
    id: 7,
    name: "Mīkstā mantiņa (Pingvīns)",
    description: "Mīkstā mantiņa ar kuru bērniem ātrāk aizmigt +0 ",
    price: 12.9,
    category: [5],
    size: [1, 2, 3, 4],
    brand: [1, 2, 3, 4],
    color: [1, 2, 4, 5],
    isFreeShipping: false,
    image: "images/Bilde7.jpg"
  },
  {
    id: 8,
    name: "Rudens pufaika",
    description: "Kvalitatīva pufaika rudenim silta nelaiž vēju cauri",
    price: 50.0,
    category: [1],
    size: [1, 4, 6],
    brand: [1, 3, 4],
    color: [1, 2, 5],
    isFreeShipping: false,
    image: "images/Bilde 8.jpg"
  },
  {
    id: 9,
    name: "Ziemas pufaika",
    description: "Jauna-sieviešu-jaka-vidēja",
    price: 16.8,
    category: [1],
    size: [1, 2, 3, 4, 5],
    brand: [2, 3],
    color: [2, 3, 5],
    isFreeShipping: false,
    image: "images/Bilde 9.jpg"
  },
  {
    id: 10,
    name: "Ziemas pufaika",
    description: "Jauna-Vīriešū-jaka-Liela-izmēra",
    price: 20.59,
    category: [1],
    size: [6],
    brand: [1, 2],
    color: [1, 5],
    isFreeShipping: false,
    image: "images/Bilde 10.jpg"
  },
  {
    id: 11,
    name: "Matu krabītis",
    description: "Palīdz sataisīt,noturēt matus 4 pāri ",
    price: 6.8,
    category: [4],
    size: [3],
    brand: [1, 2],
    color: [1, 2, 3, 4],
    isFreeShipping: true,
    image: "images/Bilde 11.jpg"
  },
  {
    id: 12,
    name: "Cepure",
    description: "SievieSu cepure",
    price: 9.99,
    category: [4],
    size: [3, 4, 5],
    brand: [6],
    color: [1, 5],
    isFreeShipping: false,
    image: "images/Bilde 12.webp"
  },
  {
    id: 13,
    name: "Auskari",
    description: "Sieviešu auskari",
    price: 20.59,
    category: [4],
    size: [1, 2, 3],
    brand: [1, 2],
    color: [1, 5],
    isFreeShipping: true,
    image: "images/Bilde 13.jpg"
  },
  {
    id: 14,
    name: "Siksna",
    description: "Laba vīriešu ādas siksna",
    price: 44.9,
    category: [4],
    size: [3],
    brand: [1, 3],
    color: [1, 3, 5],
    isFreeShipping: false,
    image: "images/Bilde 14.jpg"
  },
  {
    id: 15,
    name: "Sieviešu rokas somiņa",
    description: "Ērta un kompakta sieviešu rokas somiņa",
    price: 20.66,
    category: [4],
    size: [1, 2, 3, 4],
    brand: [1],
    color: [1, 2, 3, 5],
    isFreeShipping: false,
    image: "images/Bilde 15.webp"
  },
  {
    id: 16,
    name: "Basketbola bumba",
    description: "Basketbola bumba no Nike",
    price: 50.7,
    category: [3],
    size: [6],
    brand: [1],
    color: [4],
    isFreeShipping: false,
    image: "images/Bilde 16.jpg"
  },
  {
    id: 17,
    name: "Volejbola bumba",
    description: "Volejbola bumba no Adidas",
    price: 51.0,
    category: [3],
    size: [4],
    brand: [2],
    color: [1],
    isFreeShipping: false,
    image: "images/Bilde 17.jpg"
  },
  {
    id: 18,
    name: "Lecamauklu komplekts",
    description: "4 Krāsainas lecamauklas",
    price: 10.6,
    category: [3],
    size: [6],
    brand: [4, 5],
    color: [1, 2, 3, 4, 5],
    isFreeShipping: false,
    image: "images/Bilde 18.jpg"
  },
  {
    id: 19,
    name: "Futbola botes",
    description: "Futbola botes no Nike",
    price: 80.0,
    category: [3],
    size: [1, 2, 3, 4, 5, 6],
    brand: [1],
    color: [3, 4],
    isFreeShipping: false,
    image: "images/Bilde 19.jpg"
  },
  {
    id: 20,
    name: "Ūdens pudele",
    description: "Ērta līdz ņemšanai ūdens pudele",
    price: 9.8,
    category: [3],
    size: [6],
    brand: [1, 2],
    color: [1, 5],
    isFreeShipping: false,
    image: "images/Bilde 20.jpg"
  },

  {
    id: 21,
    name: "Saules briles",
    description: "Sieviešu saules briles",
    price: 3.7,
    category: [4],
    size: [4],
    brand: [1, 2, 4, 5],
    color: [2, 5],
    isFreeShipping: true,
    image: "images/Bildes 21.jpg"
  },
  {
    id: 22,
    name: "Saules briles",
    description: "Vīriešu saules briles",
    price: 3.7,
    category: [4],
    size: [1, 2, 3, 4],
    brand: [5],
    color: [1],
    isFreeShipping: false,
    image: "images/Bilde 22.jpg"
  },
  {
    id: 23,
    name: "Pūkainas čības ",
    description: "Pūkainas sieviešu čības",
    price: 5.8,
    category: [2],
    size: [2, 4, 5],
    brand: [2, 4],
    color: [1, 5],
    isFreeShipping: false,
    image: "images/Bilde 23.jpg"
  },
  {
    id: 24,
    name: "Džemperis",
    description: "Džemperis no Calvin klein",
    price: 60.0,
    category: [1],
    size: [4, 5],
    brand: [6],
    color: [3, 5],
    isFreeShipping: false,
    image: "images/Bilde 24.jpg"
  },
  {
    id: 25,
    name: "Zeķu pāris",
    description: "JZeķu pāris no Guess",
    price: 40.0,
    category: [4],
    size: [2, 4, 5, 6],
    brand: [4],
    color: [1, 4, 5],
    isFreeShipping: true,
    image: "images/Bilde 25.jpg"
  }
];

export default {
  categoryData,
  productData,
  sizeData,
  brandData,
  colorData,
  cartData
};
