import { MenuData } from '../types';

export const menuData: MenuData = {
  categories: [
    { id: "c-featured", name: "Öne Çıkanlar" },
    { id: "c-starters", name: "Başlangıçlar" },
    { id: "c-salads", name: "Salatalar" },
    { id: "c-burgers", name: "Burgerler & Sandviçler" },
    { id: "c-mains", name: "Ana Yemekler" },
    { id: "c-desserts", name: "Tatlılar" },
    { id: "c-drinks", name: "İçecekler" },
  ],
  items: [
    // Öne Çıkanlar (These IDs could also just be in their respective categories and filtered, but we'll use a specific category for explicit ordering)
    {
      id: "i-1",
      categoryId: "c-featured",
      name: "Mac Royal Signature Burger",
      description: "180gr dana köfte, karamelize soğan, cheddar, özel trüf sos, patates kızartması ile",
      price: 320,
      currency: "₺",
      featured: true,
      popular: true,
      available: true,
      allergens: ["Glüten", "Süt Ürünleri"]
    },
    {
      id: "i-2",
      categoryId: "c-featured",
      name: "Çıtır Tavuk Kase",
      description: "Panko kaplı çıtır tavuk parçaları, yasemin pirinci, edamame, avokado, özel teriyaki sos",
      price: 280,
      currency: "₺",
      popular: true,
      available: true,
      allergens: ["Soya", "Glüten"]
    },
    
    // Başlangıçlar
    {
      id: "i-3",
      categoryId: "c-starters",
      name: "Trüflü Patates Kızartması",
      description: "Parmesan peyniri, trüf yağı ve taze baharatlar ile harmanlanmış ince kesim patates",
      price: 140,
      currency: "₺",
      badges: ["vegetarian"],
      available: true,
    },
    {
      id: "i-4",
      categoryId: "c-starters",
      name: "Çıtır Mozzarella Çubukları",
      description: "Ev yapımı marinara sos eşliğinde panelenmiş taze mozzarella",
      price: 160,
      currency: "₺",
      badges: ["vegetarian"],
      available: true,
      allergens: ["Süt Ürünleri", "Glüten"]
    },

    // Salatalar
    {
      id: "i-5",
      categoryId: "c-salads",
      name: "Izgara Tavuklu Sezar",
      description: "Körpe marul yaprakları, ızgara tavuk dilimleri, parmesan, kruton ve ev yapımı sezar sos",
      price: 240,
      currency: "₺",
      available: true,
      allergens: ["Süt Ürünleri", "Glüten", "Yumurta"]
    },
    {
      id: "i-6",
      categoryId: "c-salads",
      name: "Kinoa & Avokado Kasesi",
      description: "Üç renkli kinoa, taze avokado dilimleri, çeri domates, nar ekşili özel vinegret sos",
      price: 260,
      currency: "₺",
      badges: ["vegan"],
      available: true,
    },

    // Burgerler
    {
      id: "i-7",
      categoryId: "c-burgers",
      name: "Classic Cheeseburger",
      description: "160gr dana köfte, çift kat cheddar, turşu, domates, marul, ev yapımı burger sosu",
      price: 290,
      currency: "₺",
      available: true,
    },
    {
      id: "i-8",
      categoryId: "c-burgers",
      name: "BBQ Smoked Burger",
      description: "160gr dana köfte, tütsülenmiş dana füme, onion rings, barbekü sos, cheddar",
      price: 340,
      currency: "₺",
      available: true,
    },

    // Ana Yemekler
    {
      id: "i-9",
      categoryId: "c-mains",
      name: "Café de Paris Soslu Bonfile",
      description: "200gr dinlendirilmiş dana bonfile, orijinal Café de Paris sosu, kibrit patates ile",
      price: 650,
      currency: "₺",
      featured: true,
      available: true,
      allergens: ["Süt Ürünleri"]
    },
    {
      id: "i-10",
      categoryId: "c-mains",
      name: "Izgara Somon",
      description: "Taze norveç somonu, sote ıspanak, limonlu tereyağı sosu, püre eşliğinde",
      price: 520,
      currency: "₺",
      available: true,
      allergens: ["Balık", "Süt Ürünleri"]
    },

    // Tatlılar
    {
      id: "i-11",
      categoryId: "c-desserts",
      name: "San Sebastian Cheesecake",
      description: "Orijinal İspanyol tarifi, akışkan çikolata sosu ile",
      price: 180,
      currency: "₺",
      popular: true,
      available: true,
      allergens: ["Süt Ürünleri", "Yumurta"]
    },
    {
      id: "i-12",
      categoryId: "c-desserts",
      name: "Tiramisu",
      description: "Espresso ile ıslatılmış kedi dili, mascarpone kreması",
      price: 160,
      currency: "₺",
      available: true,
    },

    // İçecekler
    {
      id: "i-13",
      categoryId: "c-drinks",
      name: "Filtre Kahve",
      description: "%100 Arabica çekirdeklerinden taze demlenmiş",
      price: 80,
      currency: "₺",
      available: true,
    },
    {
      id: "i-14",
      categoryId: "c-drinks",
      name: "Iced Latte",
      description: "Buzlu espresso ve süt",
      price: 110,
      currency: "₺",
      available: true,
    },
    {
      id: "i-15",
      categoryId: "c-drinks",
      name: "Ev Yapımı Limonata",
      description: "Taze nane yaprakları ile",
      price: 90,
      currency: "₺",
      available: true,
    },
    {
      id: "i-16",
      categoryId: "c-drinks",
      name: "Su (Cam Şişe)",
      price: 45,
      currency: "₺",
      available: true,
    }
  ]
};
