import laptop2 from './images/item1.webp';
import laptop1 from './images/laptop1.jpg';
import laptop3 from './images/item2.webp';
import phone1 from './images/phone1.webp';
import phone2 from './images/phone2.jpg';
import gaming1 from './images/gaming1.jpg';
import Sofa1 from './images/Sofa1.webp';
import Sofa2 from './images/Sofa2.webp';
import man1 from './images/man1.jpg';
import man2 from './images/man2.jpg';
import kids1 from './images/kids1.jpg';
import kids2 from './images/kids2.jpg';
import kids3 from './images/kids3.jpg';

export const categories = [
  "Men",
  "Kids",
  "Electronics",
  "Accessories",
  "Furniture"
];
const products = [
  {
    id: 1,
    name: "Men's Casual Shirt",
    category: "Men",
    price: 899,
    image: man1,
    rating: 4.5,
    stock: 20,
    description: "A stylish and comfortable casual shirt for men.",
  },
  {
    id: 2,
    name: "Men's Formal Shirt",
    category: "Men",
    price: 1299,
    image: man2,
    rating: 4.7,
    stock: 15,
    description: "A sleek and elegant formal shirt for office wear.",
  },
  {
    id: 3,
    name: "Kids' T-Shirt",
    category: "Kids",
    price: 499,
    image: kids1,
    rating: 4.6,
    stock: 25,
    description: "Soft and comfortable T-shirt for kids.",
  },
  {
    id: 4,
    name: "Kids' Hoodie",
    category: "Kids",
    price: 1199,
    image: kids2,
    rating: 4.8,
    stock: 15,
    description: "Warm and stylish hoodie for kids.",
  },
  {
    id: 5,
    name: "Kids' Denim Jacket",
    category: "Kids",
    price: 1499,
    image: kids3,
    rating: 4.7,
    stock: 10,
    description: "Trendy denim jacket for kids.",
  },
  {
    id: 6,
    name: "Gaming Laptop",
    category: "Electronics",
    price: 89999,
    image: laptop1,
    rating: 4.8,
    stock: 10,
    description: "High-performance gaming laptop with powerful specs.",
  },
  {
    id: 7,
    name: "Budget Laptop",
    category: "Electronics",
    price: 42999,
    image: laptop2,
    rating: 4.3,
    stock: 12,
    description: "Affordable laptop for everyday tasks.",
  },
  {
    id: 8,
    name: "Ultrabook Laptop",
    category: "Electronics",
    price: 59999,
    image: laptop3,
    rating: 4.5,
    stock: 8,
    description: "Lightweight ultrabook with long battery life.",
  },
  {
    id: 9,
    name: "Smartphone",
    category: "Electronics",
    price: 24999,
    image: phone1,
    rating: 4.6,
    stock: 25,
    description: "Feature-packed smartphone with a great camera.",
  },
  {
    id: 10,
    name: "Gaming Console",
    category: "Electronics",
    price: 49999,
    image: gaming1,
    rating: 4.9,
    stock: 8,
    description: "Next-gen gaming console for an immersive experience.",
  },
  {
    id: 11,
    name: "Luxury Sofa",
    category: "Furniture",
    price: 29999,
    image: Sofa1,
    rating: 4.5,
    stock: 5,
    description: "Elegant and comfortable sofa for your living room.",
  },
  {
    id: 12,
    name: "Classic Sofa",
    category: "Furniture",
    price: 25999,
    image: Sofa2,
    rating: 4.4,
    stock: 7,
    description: "Classic-style sofa with premium fabric.",
  },
];

export default products;
