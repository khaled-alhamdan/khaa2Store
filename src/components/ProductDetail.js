import React from "react";
// Importing products store
// import productStore from "../Stores/productsStore";
import {
  ProductDetailImagesAdjustments,
  PriceAndNameTag,
  NameTagDiv,
} from "../styles";
// import { useParams } from "react-router-dom";

export const ProductDetail = (props) => {
  const product = props.product;

  // const { productId } = useParams();
  // const productId = useParams().productId;
  // const product = productStore.products.find(
  //   (product) => product.id === +productId
  // );

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <ProductDetailImagesAdjustments alt={product.name} src={product.image} />
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
        <PriceAndNameTag>Price: {product.price}</PriceAndNameTag>
        <button>back</button>
        {/* onClick={() => setProduct(null)} */}
      </div>
    </div>
  );
};

export default ProductDetail;
