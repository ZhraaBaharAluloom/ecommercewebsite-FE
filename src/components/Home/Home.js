import React from "react";
import HomeImage from "./HomeImage.png";

// Styles
import { TextStyle } from "./Styles";

const Home = () => {
  return (
    <TextStyle>
      <img src={HomeImage} alt="pasta" />
      Welcome to That Pasta
    </TextStyle>
  );
};

export default Home;
