import React, { useState } from "react";
// Importing Auth Store
import authStore from "../Stores/authStore";
// import { useParams } from "react-router-dom";
import Modal from "react-modal";
import { observer } from "mobx-react";

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

const SignUpModal = ({ modalStatus, isOpen, closeModal }) => {
  // useState
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  // Change handler
  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent refreshing the page
    authStore.signup(userData);
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
          <h3> Sign up </h3>
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
                <ModalLabels>First name :</ModalLabels>
                <ModalInputDiv>
                  <ModalInput
                    type="text"
                    placeholder="Enter your first name"
                    name="firstName"
                    value={userData.firstName}
                    onChange={handleChange}
                    // required
                  />
                </ModalInputDiv>
              </div>
              <div>
                <ModalLabels>Last name :</ModalLabels>
                <ModalInputDiv>
                  <ModalInput
                    type="text"
                    placeholder="Enter your last name"
                    name="lastName"
                    value={userData.lastName}
                    onChange={handleChange}
                  />
                </ModalInputDiv>
              </div>
              <div>
                <ModalLabels>Email :</ModalLabels>
                <ModalInputDiv>
                  <ModalInput
                    type="text"
                    placeholder="Enter your email"
                    name="email"
                    value={userData.email}
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
                    value={userData.password}
                    onChange={handleChange}
                  />
                </ModalInputDiv>
              </div>
            </div>
            <CreateButtonStyled
              className="btn float-right"
              onSubmit={{ handleSubmit }}
            >
              Sign up
            </CreateButtonStyled>
          </form>
        </Modal>
      ) : null}
    </>
  );
};

export default observer(SignUpModal);
