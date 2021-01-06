import React from "react";
import { Link } from "react-router-dom";

// Styles
import { SignupButtonStyled } from "./Styles";

const Signup = () => {
  return (
    <>
      <Link to="sign-up">
        <SignupButtonStyled className="btn">New Costumer?</SignupButtonStyled>
      </Link>
    </>
  );
};

export default Signup;
