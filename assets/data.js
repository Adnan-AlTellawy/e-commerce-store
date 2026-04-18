
export const products = [
  {
    id: "1",
    name: "Wireless Headphones Pro",
    price: 120,
    description: "Pure sound with premium noise cancellation technology.",
    images: ["/images/headphone.jpg"],
    category: "Electronics",
  },
  {
    id: "2",
    name: "Smart Watch S3",
    price: 250,
    description: "Track your fitness activity and health 24/7.",
    images: ["/images/watch.jpg"],
    category: "Accessories",
  },
  {
    id: "3",
    name: "iPad Pro M4 - Ultra Thin",
    price: 999,
    description:
      "The thinnest Apple product ever, featuring the powerful M4 chip and Tandem OLED display.",
    images: ["/images/ipad.jpg"],
    category: "Tablets",
  },
  {
    id: "4",
    name: "Aura Bluetooth Speaker",
    price: 180,
    description:
      "Immersive 360-degree sound with deep bass and a sleek, minimalist design.",
    images: ["/images/speaker.jpg"],
    category: "Audio",
  },
];
export const orders = [
  {
    id: "ORD101",
    date: "2026-03-20", 
    total: 370,
    status: "Delivered",
    items: ["Headphones Pro", "Watch S3"],
  },
];
