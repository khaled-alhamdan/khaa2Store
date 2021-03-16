import tabasco from "./Images/download.jpeg";
import eyemask from "./Images/eyemask.jpeg";
import calculator from "./Images/calculator.jpeg";

const products = [
  {
    id: 1,
    slug: "calculator",
    name: "Calculator",
    price: "5 K.D.",
    image: calculator,
    description: `"World best calculator"`,
  },
  {
    id: 2,
    slug: "special-eye-mask",
    name: "Special Eye Mask",
    price: "2 K.D.",
    image: eyemask,
    description: `"Sleep well"`,
  },
  {
    id: 3,
    slug: "tabasco",
    name: "Tabasco",
    price: "7 K.D.",
    image: tabasco,
    description: `"Incredibly HOT!"`,
  },
];

export default products;
