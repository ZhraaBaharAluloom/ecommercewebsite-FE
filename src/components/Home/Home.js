import React from "react";
import HomeImage from "./HomeImage.png";

// Styles
import { TextStyle } from "./Styles";

const Home = () => {
  return (
    <TextStyle>
      <img src={HomeImage} alt="pasta" />
      Welcome That Pasta Home
    </TextStyle>
  );
};

export default Home;
