import React, { useState } from "react";
import { observer } from "mobx-react";

// Styles
import { GlobalStyle, InstagramIconStyle, CartLinkStyle } from "./Styles";
import { ThemeProvider } from "styled-components";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";

// Components
import NavBar from "./components/NavBar/NavBar";
import Routes from "./components/routes/Routes";
import Loading from "./components/loading/Loading";

// Stores
import shopStore from "./stores/shopStore";
import pastaStore from "./stores/pastaStore";
import cartStore from "./stores/cartStore";

const theme = {
  light: {
    mainColor: "#242423",
    backgroundColor: "#FEF9EC",
  },
  dark: {
    mainColor: "#E9C46A",
    backgroundColor: "#242423",
  },
  pink: {
    mainColor: "white",
    backgroundColor: "black",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const handleToggle = () => {
    if (currentTheme === "light") {
      setCurrentTheme("dark");
    } else if (currentTheme === "dark") {
      setCurrentTheme("pink");
    } else {
      setCurrentTheme("light");
    }
    // setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar handleToggle={handleToggle} currentTheme={currentTheme} />
      <CartLinkStyle to="/cart">
        <AiOutlineShoppingCart style={{ fontSize: 30, color: "grey" }} />(
        {cartStore.totalQuantity})
      </CartLinkStyle>
      {/* <ThemeButton onClick={handleToggle}>
        {currentTheme === "light" ? "Dark Mode" : "Light Mode"}
      </ThemeButton> */}
      {shopStore.loading || pastaStore.loading ? <Loading /> : <Routes />}
      <InstagramIconStyle>
        <p>Follow us on</p>
        <a href="https://instagram.com/pasta.and.basta?igshid=pf8sfbp9qyd8">
          <FaInstagramSquare color="grey" size="20" />
        </a>
        <a href="/#">
          <IoLogoFacebook color="grey" size="24" />
        </a>
        <a href="/#">
          <FaTwitterSquare color="grey" size="21.5" />
        </a>
      </InstagramIconStyle>
    </ThemeProvider>
  );
}

export default observer(App);
