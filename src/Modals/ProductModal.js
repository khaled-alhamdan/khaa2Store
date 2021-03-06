import React, { useState } from "react";
// Importing products store
import productStore from "../Stores/productsStore";
// import { useParams } from "react-router-dom";

import Modal from "react-modal";
import {
  CreateButtonStyled,
  ModalInput,
  ModalInputDiv,
  ModalLabels,
  ClosingModalX,
} from "../styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    // background: "black",
  },
};

const ProductModal = ({ oldProduct, modalStatus, isOpen, closeModal }) => {
  // const { storeId } = useParams();

  const [product, setProduct] = useState(
    oldProduct ?? {
      name: "",
      price: "",
      description: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]:
        event.target.name === "image"
          ? event.target.files[0]
          : event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent refreshing the page
    productStore[oldProduct ? "updateProduct" : "createProduct"](
      product
      // storeId
    );
    closeModal();
  };

  return (
    <>
      {isOpen ? (
        <Modal
          modalStatus={modalStatus}
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
          contentLabel="Example Modal"
        >
          <form onSubmit={handleSubmit}>
            <ClosingModalX onClick={closeModal} />
            <div>
              <div>
                <ModalLabels>Name :</ModalLabels>
                <ModalInputDiv>
                  <ModalInput
                    type="text"
                    placeholder="Enter Product Name"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                  />
                </ModalInputDiv>
              </div>
              <div>
                <ModalLabels>Price :</ModalLabels>
                <ModalInputDiv>
                  <ModalInput
                    type="number"
                    min="1"
                    placeholder="Enter Product Price"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                  />
                </ModalInputDiv>
              </div>
              <div>
                <ModalLabels>Image :</ModalLabels>
                <ModalInputDiv>
                  <ModalInput
                    type="file"
                    placeholder="Enter Product Image"
                    name="image"
                    onChange={handleChange}
                  />
                </ModalInputDiv>
              </div>
              <div>
                <ModalLabels>Description :</ModalLabels>
                <ModalInputDiv>
                  <ModalInput
                    type="text"
                    placeholder="Enter Product Description"
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                  />
                </ModalInputDiv>
              </div>
            </div>
            <CreateButtonStyled
              className="btn float-right"
              onSubmit={handleSubmit}
            >
              {oldProduct ? "Update" : "Create"}
            </CreateButtonStyled>
          </form>
        </Modal>
      ) : null}
    </>
  );
};

export default ProductModal;
