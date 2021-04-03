import React from "react";
import {
  HeaderDiv,
  HeaderTitleDiv,
  AllinOne,
  HeaderNavbarDiv,
  // NavbarButtons,
  KhaImgDiv,
  KhaImg,
  // NavBarUL,
} from "../../styles";
import background from "../../Images/khaaStoreImg.jpg";
import { Link } from "react-router-dom";
import Burger from "./Burger";

// const NavbarButtonsList = ["Home", "Products", "About"];

// const [search, setSearch] = useState("");

export const HeaderNavbar = () => {
  return (
    <div>
      <HeaderDiv>
        <HeaderTitleDiv>
          <Link to="/">
            <AllinOne style={{ fontSize: "20px" }}>KHA'A Store</AllinOne>
            <div>
              <AllinOne> All In One</AllinOne>
            </div>
          </Link>
        </HeaderTitleDiv>
        <HeaderNavbarDiv>
          <Burger />
          {/* <div style={{ display: "flex" }}>
            <NavBarUL>
              {NavbarButtonsList.map((props) => (
                <Link to={`/${props}`}>
                  <NavbarButtons>{props}</NavbarButtons>
                </Link>
              ))}
            </NavBarUL>
          </div> */}
        </HeaderNavbarDiv>
      </HeaderDiv>
      <KhaImgDiv>
        <KhaImg src={background} />
      </KhaImgDiv>
    </div>
  );
};

export default HeaderNavbar;
