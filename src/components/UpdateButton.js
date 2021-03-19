import React, { useState } from "react";
import { UpdateButtonStyled } from "../styles";
import ProductModal from "../Modals/ProductModal";

const UpdateButton = ({ oldProduct }) => {
  const [isOpen, setIsOpen] = useState(false);

  const modalStatus = () => {
    setIsOpen(!isOpen);
  };
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <UpdateButtonStyled onClick={modalStatus}> Update </UpdateButtonStyled>
      <ProductModal
        isOpen={isOpen}
        modalStatus={modalStatus}
        closeModal={closeModal}
        oldProduct={oldProduct}
      />
    </>
  );
};

export default UpdateButton;
