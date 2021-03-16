import React, { useState } from "react";
// Importing product modal component
import ProductModal from "../Modals/ProductModal";
import { AddNewProductButton, IconPlusCircle, PlusAndAddDiv } from "../styles";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const modalStatus = () => {
    setIsOpen(!isOpen);
  };
  const closeModal = () => setIsOpen(false);
  //   const openModal = () => setIsOpen(true);

  return (
    <>
      <PlusAndAddDiv>
        <IconPlusCircle onClick={modalStatus} />
        <AddNewProductButton onClick={modalStatus}>
          Add new Product
        </AddNewProductButton>
      </PlusAndAddDiv>
      <ProductModal
        isOpen={isOpen}
        modalStatus={modalStatus}
        closeModal={closeModal}
      />
    </>
  );
};

export default AddButton;
