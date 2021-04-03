import React, { useState } from "react";
import { observer } from "mobx-react";
// Importing products store
import productStore from "../../Stores/productsStore";
// Importing styled components
import { ProductInfoWrapperDiv, ProductInfoConatinerDiv } from "../../styles";
// Importing add product button
import AddButton from "../Buttons/AddButton";
// Importing product item
import ProductItem from "./ProductItem";
// Importing search bar
import SearchBar from "../Navbar/SearchBar";

export const ProductsList = () => {
  const [search, setSearch] = useState("");

  productStore.products.forEach((product) => console.log(product));

  const productsList = productStore.products
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .map((product) => (
      <ProductItem
        product={product}
        key={product.id}
        // setProduct={setProduct}
        // deleteMethod={deleteMethod}
      />
    ));

  return (
    <div>
      <SearchBar setSearch={setSearch} />
      <ProductInfoConatinerDiv>
        <ProductInfoWrapperDiv>{productsList}</ProductInfoWrapperDiv>
      </ProductInfoConatinerDiv>
      <AddButton />
    </div>
  );
};

export default observer(ProductsList);
