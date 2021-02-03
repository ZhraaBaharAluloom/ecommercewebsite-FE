import React, { useState } from "react";
import contactStore from "../../stores/contactStore";

import { InputStyled, ContactWrapper, SubmitButtonStyled } from "./Styles";

const ContactUS = () => {
  const [_message, setComment] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setComment({ ..._message, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    contactStore.contactUs(_message);
    setComment({ name: "", email: "", message: "" });
  };
  return (
    <ContactWrapper>
      <p>Phone: +964 781 367 1642</p>
      <p> E-mail: zahraambaharaluloom@gmail.com</p>
      <form
        onSubmit={handleSubmit}
        style={{
          textAlign: "center",

          border: "1px solid #D6D6D6",
          borderRadius: 4,
          padding: 15,
          width: "21rem",
          margin: "auto",
          marginTop: "5rem",
        }}
      >
        <div className="form-row">
          <div className="form-group col-md-12  ">
            <InputStyled
              required
              type="text"
              className="form-control"
              onChange={handleChange}
              name="name"
              placeholder="  Full Name *"
              value={_message.name}
            />
          </div>
          <div className="form-group col-md-12  ">
            <InputStyled
              required
              type="email"
              className="form-control"
              onChange={handleChange}
              name="email"
              placeholder=" Your E-mail * "
              value={_message.email}
            />
          </div>

          <div className="form-group col-md-12 ">
            <textarea
              class="form-control"
              placeholder="Leave a message here *"
              id="floatingTextarea"
              required
              onChange={handleChange}
              name="message"
              value={_message.message}
            />
          </div>
        </div>

        <SubmitButtonStyled
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </SubmitButtonStyled>
      </form>
    </ContactWrapper>
  );
};

export default ContactUS;
