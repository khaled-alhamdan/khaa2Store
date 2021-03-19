import React from "react";
// Importing products store
import productStore from "../Stores/productsStore";
import { observer } from "mobx-react";

import {
  ImagesAdjustments,
  PriceAndNameTag,
  NameTagDiv,
  MoreInfoButton,
  DeleteButton,
  StyledLink,
} from "../styles";
import UpdateButton from "./UpdateButton";

export const ProductItem = (props) => {
  const product = props.product;

  const handelDelete = () => {
    productStore.deleteProduct(product.id);
  };

  return (
    <div>
      <StyledLink to={`/products/${product.id}`}>
        {product.image ? (
          <ImagesAdjustments alt={product.name} src={product.image} />
        ) : (
          <ImagesAdjustments />
        )}
      </StyledLink>
      <div>
        <NameTagDiv>
          <PriceAndNameTag>
            <b> {product.name}</b>
          </PriceAndNameTag>
        </NameTagDiv>
        <UpdateButton oldProduct={product} />
        {/* line 32 and 33 onClicks are equivelent exept that in line 32 handelDelet is predefined on top */}
        {/* <DeleteButton onClick={() => alert(`Deleting ${product.name}`)}> */}
        <DeleteButton onClick={handelDelete}>Delete</DeleteButton>
        <div>
          <StyledLink to={`/products/${product.id}`}>
            <MoreInfoButton>Product Information</MoreInfoButton>
          </StyledLink>
        </div>
      </div>
    </div>
  );
};

export default observer(ProductItem);
