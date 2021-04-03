import React from "react";
// Importing products list
import ProductsList from "./ProductsList";
import { observer } from "mobx-react";

export const ProductsPage = () => {
  // const setProduct = props.setProduct;
  return (
    <div>
      <ProductsList />
    </div>
  );
};

export default observer(ProductsPage);

// setProduct={setProduct}
