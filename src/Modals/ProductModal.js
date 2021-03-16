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

const ProductModal = (props) => {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent refreshing the page
    productStore.createProduct(product);
  };

  return (
    <>
      {props.isOpen ? (
        <Modal
          modalStatus={props.modalStatus}
          isOpen={props.isOpen}
          onRequestClose={props.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form onSubmit={handleSubmit}>
            <ClosingModalX onClick={props.closeModal} />
            <div>
              <div>
                <ModalLabels>Name :</ModalLabels>
                <ModalInputDiv>
                  <ModalInput
                    type="text"
                    placeholder="Enter Product Name"
                    name="name"
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
                    onChange={handleChange}
                  />
                </ModalInputDiv>
              </div>
              <div>
                <ModalLabels>Image :</ModalLabels>
                <ModalInputDiv>
                  <ModalInput
                    type="text"
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
                    onChange={handleChange}
                  />
                </ModalInputDiv>
              </div>
            </div>
            <CreateButtonStyled
              className="btn float-right"
              onSubmit={() => handleSubmit}
            >
              Create
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
