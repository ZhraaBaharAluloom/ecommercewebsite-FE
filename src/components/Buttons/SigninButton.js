import React from "react";
import { Link } from "react-router-dom";

import { SigninButtonStyled, SigninTextStyled } from "./Styles";

const Signin = ({ signUp }) => {
  return (
    <>
      <Link to="sign-in">
        {signUp ? (
          <SigninTextStyled className="btn">
            Already have an account
          </SigninTextStyled>
        ) : (
          <SigninButtonStyled className="btn">Sign In </SigninButtonStyled>
        )}
      </Link>
    </>
  );
};

export default Signin;
