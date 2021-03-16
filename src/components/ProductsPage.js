import React from "react";
// Importing products list
import ProductsList from "./ProductsList";

export const ProductsPage = (props) => {
  const setProduct = props.setProduct;
  return (
    <div>
      <ProductsList setProduct={setProduct} />
    </div>
  );
};

export default ProductsPage;
