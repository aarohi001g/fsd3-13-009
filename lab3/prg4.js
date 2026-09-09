import http from 'http'
const server = http.createServer((req, res) => {
   const products = [
  {
    "id": 1,
    "name": "Wireless Headphones",
    "price": 2499,
    "image": "https://example.com/images/wireless-headphones.jpg",
    "desc": "Comfortable wireless headphones with clear sound and long battery life."
  },
  {
    "id": 2,
    "name": "Smart Watch",
    "price": 3999,
    "image": "https://example.com/images/smart-watch.jpg",
    "desc": "Smart watch with fitness tracking, notifications, and heart-rate monitoring."
  },
  {
    "id": 3,
    "name": "Bluetooth Speaker",
    "price": 1799,
    "image": "https://example.com/images/bluetooth-speaker.jpg",
    "desc": "Portable Bluetooth speaker with powerful audio and compact design."
  },
  {
    "id": 4,
    "name": "Mechanical Keyboard",
    "price": 3299,
    "image": "https://example.com/images/mechanical-keyboard.jpg",
    "desc": "Durable mechanical keyboard with responsive keys and RGB lighting."
  },
  {
    "id": 5,
    "name": "Gaming Mouse",
    "price": 1499,
    "image": "https://example.com/images/gaming-mouse.jpg",
    "desc": "Ergonomic gaming mouse with adjustable DPI and precise tracking."
  },
  {
    "id": 6,
    "name": "USB-C Power Bank",
    "price": 2199,
    "image": "https://example.com/images/power-bank.jpg",
    "desc": "High-capacity power bank with fast USB-C charging support."
  },
  {
    "id": 7,
    "name": "Laptop Stand",
    "price": 999,
    "image": "https://example.com/images/laptop-stand.jpg",
    "desc": "Adjustable aluminum laptop stand designed for a comfortable viewing angle."
  },
  {
    "id": 8,
    "name": "Smartphone Tripod",
    "price": 1299,
    "image": "https://example.com/images/smartphone-tripod.jpg",
    "desc": "Lightweight adjustable tripod for photos, videos, and video calls."
  },
  {
    "id": 9,
    "name": "Wireless Charger",
    "price": 899,
    "image": "https://example.com/images/wireless-charger.jpg",
    "desc": "Compact wireless charging pad compatible with supported smartphones."
  },
  {
    "id": 10,
    "name": "LED Desk Lamp",
    "price": 1199,
    "image": "https://example.com/images/led-desk-lamp.jpg",
    "desc": "Adjustable LED desk lamp with multiple brightness levels."
  }
]

    if(req.url==='/api/products'){
        res.end(JSON.stringify(products));
    }
    else{
        res.statusCode = 404;
        res.end();
    }
});
server.listen(3000,() => console.log('prg4 is running on port 3000'))