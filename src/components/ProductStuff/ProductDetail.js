import React from "react";
// Importing products store
import productStore from "../../Stores/productsStore";
import {
  ProductDetailImagesAdjustments,
  PriceAndNameTag,
  NameTagDiv,
  StyledLink,
  BackDetailButton,
} from "../../styles";
import { observer } from "mobx-react";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  // const product = props.product;
  const { productId } = useParams();
  let product = [];

  if (productStore.loading === false)
    product = productStore.products.find(
      (product) => product.id === +productId
    );

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      {product.image ? (
        <ProductDetailImagesAdjustments
          alt={product.name}
          src={product.image}
        />
      ) : (
        <ProductDetailImagesAdjustments />
      )}
      {/* <ProductDetailImagesAdjustments alt={product.name} src={product.image} /> */}
      <div>
        <NameTagDiv>
          <PriceAndNameTag>
            <b> {product.name}</b>
          </PriceAndNameTag>
        </NameTagDiv>
        <div style={{ marginBottom: "15px" }}>
          <PriceAndNameTag>
            <b>{product.description}</b>
          </PriceAndNameTag>
        </div>
        <PriceAndNameTag>Price: {product.price} K.D.</PriceAndNameTag>
        <div>
          <StyledLink to={`/products`}>
            <BackDetailButton>return to products</BackDetailButton>
          </StyledLink>
        </div>
      </div>
    </div>
  );
};

export default observer(ProductDetail);
