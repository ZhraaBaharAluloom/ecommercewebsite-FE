import React from "react";
import ReactLoading from "react-loading";

// Styles
import { LoadingStyle } from "./Styles";

const Loading = () => {
  return (
    <LoadingStyle>
      <ReactLoading type={"bars"} color={"black"} height={300} width={200} />
    </LoadingStyle>
  );
};

export default Loading;
