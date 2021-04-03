import styled, { createGlobalStyle } from "styled-components";
import ImageCoomingSoon from "./Images/ImageComingSoon.jpg";

import { Link } from "react-router-dom";
// X icon
import { MdClose } from "react-icons/md";
// + icon
import { BsPlusCircle } from "react-icons/bs";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.fontColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;
export const HeaderDiv = styled.div`
  width: 100vw;
  height: 75px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: relative; // Removed the extra
  padding: 10px;
`;

export const HeaderTitleDiv = styled.div`
  text-align: center;
  font-family: monospace;
  width: 20%;
  min-width: 150px;
  height: auto;
  color: white;
  display: block;
  padding: 4px;
  letter-spacing: 1px;
  border: 2px solid white;
  font-weight: bold;
  background: none;
`;

export const HeaderNavbarDiv = styled.div`
  /* width: 150px; */
  display: flex;
`;

export const NavbarButtons = styled.li`
  text-decoration: none;
  width: 90px;
  height: 20px;
  text-align: center;
  background: white;
  color: black;
  border: none;
  margin: 2px;
  outline: none;
  text-transform: capitalize;
  cursor: pointer;
  :hover {
    background: gray;
    transition: 0.4s;
    color: white;
  }
`;

export const NavBarUL = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  /* transition: 0.7s; */

  @media (max-width: 760px) {
    flex-flow: column nowrap;
    transform: ${({ open }) => (open ? `translateX(0)` : `translateX(100%)`)};
    position: absolute;
    height: 100vh;
    width: 125px;
    top: 59px;
    right: 0;
    background: black;
    opacity: 70%;

    li {
      align-items: center;
      /* margin-left: 3px; */
      margin-top: 20px;
      color: white;
      background: none;
      font-weight: bold;
    }
  }
`;

export const StyledBurger = styled.div`
  display: none;
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 20px;
  right: 10px;

  @media (max-width: 760px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.4s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? `rotate(45deg)` : `rotate(0)`)};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? `translateX(100%)` : `translateX(0)`)};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? `rotate(-45deg)` : `rotate(0)`)};
    }
  }
`;

export const AllinOne = styled.button`
  font-size: 13px;
  font-family: monospace;
  background: none;
  border: none;
  outline: none;
  color: white;
  width: 100%;
`;

export const KhaImgDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
  height: 250px;
  background: gray;
`;
export const KhaImg = styled.img`
  width: 100vw;
  height: 250px;
  /* object-fit: cover; */
  /* object-position: center; */
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  font-family: sans-serif;
  margin: 1.25em;
  padding: 0.5em 2em;
  border-radius: 7px;
  background-color: ${(props) => props.theme.buttonBGColor};
  color: ${(props) => props.theme.buttonTextColor};
  transition-duration: 0.4s;
  outline: 0;
  border: none;
  :hover {
    background-color: grey;
    color: Black;
    transition: 1s;
    border: 1px solid white;
  }
`;

export const ThemeButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProductInfoConatinerDiv = styled.div`
  margin-right: auto;
  margin-left: auto;
  /* border: 5px solid black; */
  width: 80%;
  text-align: center;
  margin-top: 10px;
`;

export const ImagesAdjustments = styled.img`
  height: 225px;
  width: 200px;
  box-shadow: 0px 0px 12px ${(props) => props.theme.boxColor};
  margin-bottom: 15px;
  margin-top: 15px;
  background-image: url(${ImageCoomingSoon});
  background-size: cover;
`;

export const PriceAndNameTag = styled.label`
  text-align: center;
  font-size: 20px;
  color: ${(props) => props.theme.fontColor};
  font-family: monospace;
`;

export const MoreInfoButton = styled.button`
  text-align: center;
  /* text-transform: uppercase; */
  font-family: sans-serif;
  font-size: 15px;
  color: ${(props) => props.theme.moreInfoText};
  background-color: ${(props) => props.theme.buttonBGColor};
  border: 2px solid ${(props) => props.theme.moreInfoBorder};
  outline: none;
  padding: 3px;
  width: 165px;
  border-radius: 6px;
  margin: 2px;
  :hover {
    cursor: pointer;
    background-color: grey;
    color: Black;
    transition: 0.8s;
    border: 2px solid white;
  }
`;

export const DeleteButton = styled.button`
  text-align: center;
  font-family: sans-serif;
  font-size: 15px;
  color: white;
  background-color: ${(props) => props.theme.deleteButton};
  /* border: 2px solid ${(props) => props.theme.moreInfoBorder}; */
  border: 2px solid white;
  outline: none;
  padding: 3px;
  width: 80px;
  border-radius: 6px;
  margin: 2px;
  opacity: 50%;
  :hover {
    cursor: pointer;
    opacity: 100%;
    transition: 0.8s;
  }
`;

export const NameTagDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  width: 200px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
`;

export const ProductInfoWrapperDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  gap: 30px;
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 250px;
  outline: none;
  border: none;
  /* min-width: 350px; */
`;

export const ProductDetailImagesAdjustments = styled.img`
  height: 275px;
  width: 250px;
  box-shadow: 0px 0px 12px ${(props) => props.theme.boxColor};
  margin-bottom: 15px;
  margin-top: 15px;
  background-image: url(${ImageCoomingSoon});
  background-size: cover;
`;

export const IconPlusCircle = styled(BsPlusCircle)`
  cursor: pointer;
  width: 25px;
  height: 25px;
`;

export const PlusAndAddDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  margin-top: 25px;
`;

export const CreateButtonStyled = styled.button`
  color: white;
  background-color: black;
  opacity: 70%;
  border: none;
  border-radius: 4px;
  padding: 6px 10px;
  outline: none;
  margin-top: 15px;

  :hover {
    opacity: 100%;
    transition: 0.8s;
  }
`;
export const ModalInput = styled.input`
  width: 200px;
  height: 20px;
  outline: none;
  border: 2px solid grey;
  border-radius: 5px;
  margin: 5px;
  color: black;
`;

export const ModalInputDiv = styled.div`
  padding: 6px;
`;

export const ModalLabels = styled.label`
  font-family: sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: black;
`;

export const ClosingModalX = styled(MdClose)`
  cursor: pointer;
  width: 30px;
  height: 50px;
  color: black;
  position: absolute;
  right: 10px;
  top: 5px;
  padding: none;
`;

export const AddNewProductButton = styled.p`
  margin: 4px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
`;

export const UpdateButtonStyled = styled.button`
  text-align: center;
  font-family: sans-serif;
  font-size: 15px;
  color: white;
  background-color: ${(props) => props.theme.updateButton};
  /* border: 2px solid ${(props) => props.theme.moreInfoBorder}; */
  border: 2px solid white;
  outline: none;
  padding: 3px;
  width: 80px;
  border-radius: 6px;
  margin: 2px;
  opacity: 50%;
  :hover {
    cursor: pointer;
    opacity: 100%;
    transition: 0.8s;
  }
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
`;

export const BackDetailButton = styled.button`
  color: ${(props) => props.theme.buttonTextColor};
  background-color: ${(props) => props.theme.buttonBGColor};
  text-transform: uppercase;
  font-family: sans-serif;
  border: none;
  border-radius: 4px;
  padding: 6px 10px;
  outline: none;
  margin-top: 15px;

  :hover {
    background-color: grey;
    color: Black;
    transition: 0.6s;
    border: 1px solid white;
  }
`;
