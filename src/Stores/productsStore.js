// // Importing the products list
// import products from "../products";
// Importing slugify
import slugify from "react-slugify";
// Importing axios
import axios from "axios";
import { makeObservable, observable, action } from "mobx";

class ProductStore {
  products = [];

  constructor() {
    makeObservable(this, {
      products: observable,
      createProduct: action,
      deleteProduct: action,
      fetchProducts: action,
    });
  }

  fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8001/products");
      this.products = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  createProduct = async (newProduct) => {
    try {
      const res = await axios.post(
        "http://localhost:8001/products",
        newProduct
      );
      this.products.push(res.data);
    } catch (error) {
      console.log(error);
    }
    // product.id = this.products[this.products.length - 1].id + 1;
    // // product.id = this.products.length + 1;
    // product.slug = slugify(product.name);
    // this.products.push(product);
    // console.log(this.products);
  };

  deleteProduct = async (productId) => {
    await axios.delete(`http://localhost:8001/products/${productId}`);
    this.products = this.products.filter(
      (product) => product.id !== +productId
    );
    try {
    } catch (error) {
      console.log(error);
    }
  };
}

const productStore = new ProductStore();
productStore.fetchProducts();

export default productStore;
