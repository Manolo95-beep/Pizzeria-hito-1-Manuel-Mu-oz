export const pizzas = [
  {
    desc: "La pizza napolitana, de masa tierna y delgada pero bordes altos, es la versión propia de la cocina napolitana de la pizza redonda. El término pizza napoletana, por su importancia histórica o regional, se emplea en algunas zonas como sinónimo de pizza tonda.",
    id: "P001",
    img: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/48a49653c8716457eb0b2f7eb3c7d74c/Derivates/8d83d9ed4567fa15456d8eec7557e60006a15576.jpg",
    ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
    name: "napolitana",
    price: 5950,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P002",
    img: "https://sultanalpaso.cl/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-24-at-4.23.42-PM-11.jpeg",
    ingredients: ["mozzarella", "tomates", "jamón", "choricillo"],
    name: "española",
    price: 7250,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P003",
    img: "https://tofuu.getjusto.com/orioneat-local/resized2/vt9gk6r8urcyPNRr8-2400-x.webp",
    ingredients: ["mozzarella", "tomates", "salame", "orégano"],
    name: "salame",
    price: 5990,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P004",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKc3LvL9Z2ap52oTGTFkVd-UPjwILFawxeTA&s",
    ingredients: ["mozzarella", "salame", "aceitunas", "champiñones"],
    name: "cuatro estaciones",
    price: 9590,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P005",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz2zmty4v1MYy_nhG1AGLMdV3fHCw5biqlOw&s",
    ingredients: ["mozzarella", "tomates cherry", "bacon", "orégano"],
    name: "bacon",
    price: 6450,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P006",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwKUttTHYFEVBgm_8sTTyWJvMpGXmspHYuQ&s",
    ingredients: ["mozzarella", "pimientos", "pollo grillé", "orégano"],
    name: "pollo picante",
    price: 8500,
  },
];


// Simulación de un carrito de compras
export const pizzaCart = [
  {
    id: "P001",
    name: "napolitana",
    price: 5950,
    count: 1,
    img: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/48a49653c8716457eb0b2f7eb3c7d74c/Derivates/8d83d9ed4567fa15456d8eec7557e60006a15576.jpg",
  },
  {
    id: "P002",
    name: "española",
    price: 7250,
    count: 1,
    img: "https://sultanalpaso.cl/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-24-at-4.23.42-PM-11.jpeg",
  },
  {
    id: "P003",
    name: "salame",
    price: 5990,
    count: 1,
    img: "https://tofuu.getjusto.com/orioneat-local/resized2/vt9gk6r8urcyPNRr8-2400-x.webp",
  },
];

export default pizzas;
