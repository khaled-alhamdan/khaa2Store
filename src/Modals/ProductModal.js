import React, { useState } from "react";
// Importing products store
import productStore from "../Stores/productsStore";

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
  const [product, setProduct] = useState(
    oldProduct ?? {
      name: "",
      price: "",
      description: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent refreshing the page
    productStore[oldProduct ? "updateProduct" : "createProduct"](product);
  };

  return (
    <>
      {isOpen ? (
        <Modal
          modalStatus={modalStatus}
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={customStyles}
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
                    type="test"
                    placeholder="Enter Product Image"
                    name="image"
                    value={product.image}
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
              onSubmit={{ handleSubmit }}
            >
              {oldProduct ? "Update" : "Create"}
            </CreateButtonStyled>
          </form>
        </Modal>
      ) : null}
    </>
  );
};
// {
//   /* <ModalInput placeholder="Enter Product Name" /> */
// }
// {
//   /* <ModalInput placeholder="Enter Product Price" /> */
// }
// {
//   /* <ModalInput placeholder="Enter Product Image" /> */
// }
// {
//   /* <ModalInput placeholder="Enter Product Description" /> */
// }

export default ProductModal;
