// Importing react
import React, { useState } from "react";
// Importing sign up button
import SignUpButton from "../Buttons/SignUpButton";
// Importing sign in button
import SignInButton from "../Buttons/SignInButton";
// Importing styles
import {
  StyledBurger,
  NavbarButtons,
  NavBarUL,
  StyledLink,
} from "../../styles";
// Importing Auth store
import authStore from "../../Stores/authStore";
// Importing observer
import { observer } from "mobx-react";
// Importing sign out button
import { FiLogOut } from "react-icons/fi";

const NavbarButtonsList = ["home", "products", "about"];

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <div style={{ display: "flex" }} open={open}>
        <NavBarUL open={open}>
          {NavbarButtonsList.map((props) => (
            <StyledLink to={`/${props}`} key={props}>
              <NavbarButtons>{props}</NavbarButtons>
            </StyledLink>
          ))}
          {/* <StyledLink to={"/signup"}> */}
          {authStore.user ? (
            <>
              <NavbarButtons style={{ color: "red" }}>
                hello {authStore.user.username}
              </NavbarButtons>
              <FiLogOut onClick={authStore.signout} size="2em" color="red" />
            </>
          ) : (
            <>
              <SignUpButton />
              <SignInButton />
            </>
          )}
          {/* </StyledLink> */}
        </NavBarUL>
      </div>
    </>
  );
};

export default observer(Burger);
