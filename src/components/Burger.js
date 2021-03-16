import React, { useState } from "react";
import { StyledBurger, NavbarButtons, NavBarUL } from "../styles";
import { Link } from "react-router-dom";

const NavbarButtonsList = ["Home", "Products", "About"];

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
            <Link to={`/${props}`}>
              <NavbarButtons>{props}</NavbarButtons>
            </Link>
          ))}
        </NavBarUL>
      </div>
    </>
  );
};

export default Burger;
