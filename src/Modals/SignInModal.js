import React, { useState } from "react";
// Importing Auth Store
import authStore from "../Stores/authStore";
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

const SignInModal = ({ modalStatus, isOpen, closeModal }) => {
  // useState
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  // Change handler
  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent refreshing the page
    authStore.signin(userData);
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
          contentLabel="Signup Modal"
        >
          <h3> Sign in</h3>
          <form onSubmit={handleSubmit}>
            <ClosingModalX onClick={closeModal} />
            <div>
              <div>
                <ModalLabels>Username :</ModalLabels>
                <ModalInputDiv>
                  <ModalInput
                    type="text"
                    placeholder="Enter a username"
                    name="username"
                    value={userData.username}
                    onChange={handleChange}
                  />
                </ModalInputDiv>
              </div>
              <div>
                <ModalLabels>Password :</ModalLabels>
                <ModalInputDiv>
                  <ModalInput
                    type="password"
                    placeholder="Enter a password"
                    name="password"
                    value={userData.firstName}
                    onChange={handleChange}
                  />
                </ModalInputDiv>
              </div>
            </div>
            <CreateButtonStyled
              className="btn float-right"
              onSubmit={{ handleSubmit }}
            >
              Sign in
            </CreateButtonStyled>
          </form>
        </Modal>
      ) : null}
    </>
  );
};

export default SignInModal;
