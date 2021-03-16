import React from "react";
// Importing products store
import productStore from "../Stores/productsStore";
// import { Link } from "react-router-dom";
import {
  ImagesAdjustments,
  PriceAndNameTag,
  NameTagDiv,
  MoreInfoButton,
  DeleteButton,
} from "../styles";

export const ProductItem = (props) => {
  const product = props.product;

  const handelDelete = () => {
    productStore.deleteProduct(product.id);
  };

  return (
    <div>
      {/* <Link to={`/products/${product.id}`}> */}
      <ImagesAdjustments
        alt={product.name}
        src={product.image}
        onClick={() => props.setProduct(product)}
      />
      {/* </Link> */}
      <div>
        <NameTagDiv>
          <PriceAndNameTag>
            <b> {product.name}</b>
          </PriceAndNameTag>
        </NameTagDiv>
        <MoreInfoButton onClick={() => props.setProduct(product)}>
          More Info
        </MoreInfoButton>
        {/* line 32 and 33 onClicks are equivelent exept that in line 32 handelDelet is predefined on top */}
        {/* <DeleteButton onClick={() => alert(`Deleting ${product.name}`)}> */}
        <DeleteButton onClick={handelDelete}>Delete</DeleteButton>
      </div>
    </div>
  );
};

export default ProductItem;
