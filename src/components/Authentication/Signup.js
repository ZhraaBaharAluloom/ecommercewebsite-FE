import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SigninButton from "../Buttons/SigninButton";

//Stores
import authStore from "../../stores/authStore";

// Styles
import { InputStyled, AuthButtonStyled } from "./Styles";

const Signup = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "vendor",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signup(user);
    history.push("/shops");
  };

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
        <div className="form-group col-md-12 ">
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
            type="text"
            className="form-control"
            onChange={handleChange}
            name="firstName"
            placeholder="First Name*"
            value={user.firstName}
          />
        </div>
        <div className="form-group col-md-12 ">
          <InputStyled
            required
            type="text"
            className="form-control"
            onChange={handleChange}
            name="lastName"
            placeholder="Last Name*"
            value={user.lastName}
          />
        </div>

        <div className="form-group col-md-12 ">
          <InputStyled
            required
            type="email"
            className="form-control"
            onChange={handleChange}
            name="email"
            placeholder="example@example.com*"
            value={user.email}
          />
        </div>
        <div className="form-group col-md-12 ">
          <InputStyled
            required
            type="password"
            className="form-control"
            onChange={handleChange}
            name="password"
            placeholder="12lmdoiPQ@*"
            value={user.password}
          />
        </div>
      </div>

      <SigninButton signUp />
      <AuthButtonStyled type="submit" onClick={handleSubmit}>
        Sign Up
      </AuthButtonStyled>
    </form>
  );
};

export default Signup;
