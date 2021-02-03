import React from "react";

// Styles
import {
  SearchbarStyled,
  SearchbarWrapper,
  SearchbarWrapper2,
  SearchButtonStyle,
} from "./Styles";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setQuery, shop }) => {
  return (
    <SearchbarWrapper>
      <SearchbarWrapper2>
        <SearchbarStyled
          placeholder={shop ? "Search for Restaurant " : "Search for Pasta"}
          onChange={(event) => setQuery(event.target.value)}
        />
        <SearchButtonStyle type="submit">
          <FaSearch />
        </SearchButtonStyle>
      </SearchbarWrapper2>
    </SearchbarWrapper>
  );
};

export default SearchBar;
