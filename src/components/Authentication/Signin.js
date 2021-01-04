import React, { useState } from "react";
import { observer } from "mobx-react";
import { Redirect, useHistory } from "react-router";

//Stores
import authStore from "../../stores/authStore";
import SignupButton from "../Buttons/SignupButton";

// Styles
import { SpanStyled, InputStyled, LabelStyled, TitleStyled } from "./Styles";

const Signin = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signin(user);
    // history.push("/pastas");
    // setUser({
    //   username: "",
    //   password: "",
    // });
  };

  if (authStore.user)
    return <Redirect to={`/shops/${authStore.user.shopSlug}` || "/"} />;

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        textAlign: "center",

        border: "1px solid #D6D6D6",
        borderRadius: 4,
        padding: 10,
        width: "21rem",
        margin: "auto",
        marginTop: "8rem",
      }}
    >
      <div className="form-row">
        <div className="form-group col-md-12  ">
          {/* <LabelStyled for="inputEmail4">
            Username <SpanStyled>*</SpanStyled>
          </LabelStyled> */}
          <InputStyled
            required
            type="text"
            className="form-control"
            onChange={handleChange}
            name="username"
            placeholder="Username*"
            value={user.username}
          />
        </div>

        <div className="form-group col-md-12 ">
          <InputStyled
            required
            type="password"
            className="form-control"
            onChange={handleChange}
            name="password"
            placeholder="Abcd123@?*"
            value={user.password}
          />
        </div>
      </div>

      <SignupButton />
      <button
        style={{ backgroundColor: "black" }}
        type="submit"
        className="btn btn-primary"
        onClick={handleSubmit}
      >
        Sign In
      </button>
    </form>
  );
};

export default observer(Signin);
