import React, { useState } from "react";
import { Redirect } from "react-router";
import { observer } from "mobx-react";

//Stores
import authStore from "../../stores/authStore";

// Components
import SignupButton from "../Buttons/SignupButton";

// Styles
import { InputStyled, AuthButtonStyled } from "./Styles";

const Signin = () => {
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
        padding: 15,
        width: "21rem",
        margin: "auto",
        marginTop: "15rem",
      }}
    >
      <div className="form-row">
        <div className="form-group col-md-12  ">
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
      <AuthButtonStyled type="submit" onClick={handleSubmit}>
        Sign In
      </AuthButtonStyled>
    </form>
  );
};

export default observer(Signin);
