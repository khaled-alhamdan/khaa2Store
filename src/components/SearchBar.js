import React from "react";
import { SearchBarStyled } from "../styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      placeholder="Search for products"
      onChange={(event) => props.setSearch(event.target.value)}
    />
  );
};

export default SearchBar;
