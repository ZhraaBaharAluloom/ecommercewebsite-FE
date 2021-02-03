import React from "react";
import HomeImage from "./HomeImage.png";

// Styles
import { HomeStyle, TextStyle } from "./Styles";

const Home = () => {
  return (
    <HomeStyle className="row">
      <img src={HomeImage} alt="pasta" />
      <TextStyle className="col-sm-12 col-md-6">
        Welcome to That Pasta
        <p>Where All Good Restaurants Gather!</p>
      </TextStyle>
    </HomeStyle>
  );
};

export default Home;
