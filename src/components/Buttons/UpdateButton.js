import React, { useState } from "react";
import { UpdateButtonStyled } from "../../styles";
import ProductModal from "../../Modals/ProductModal";
import { observer } from "mobx-react";

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

export default observer(UpdateButton);
