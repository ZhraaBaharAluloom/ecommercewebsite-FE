import React, { useState } from "react";
import { observer } from "mobx-react";
import Modal from "react-modal";

// Stores
import shopStore from "../../stores/shopStore";

// Styles
import { SpanStyled, InputStyled, LabelStyled, TitleStyled } from "./Styles";
import { AiFillCloseCircle } from "react-icons/ai";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "10%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#242423",
  },
};

const ShopModal = ({ isOpen, closeModal, oldShop }) => {
  const [shop, setShop] = useState(
    oldShop
      ? {
          name: oldShop.name,
          image: oldShop.image,
          description: oldShop.description,
          id: oldShop.id,
          UserId: oldShop.UserId,
        }
      : {
          name: "",
          image: "",
          description: "",
          pastas: [],
        }
  );

  const handleChange = (event) => {
    setShop({ ...shop, [event.target.name]: event.target.value });
  };

  const handleImage = (event) =>
    setShop({ ...shop, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    shopStore[oldShop ? "updateShop" : "createShop"](shop);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Shop Modal"
      ariaHideApp={false}
    >
      <form onSubmit={handleSubmit}>
        <AiFillCloseCircle
          style={{ color: "#FEF9EC", marginBottom: 10 }}
          onClick={closeModal}
        />
        <TitleStyled>{oldShop ? "Update Shop" : "Add New Shop"}</TitleStyled>

        <div className="form-row">
          <div className="form-group col-md-6">
            <LabelStyled for="inputEmail4">
              Shop Name <SpanStyled>*</SpanStyled>
            </LabelStyled>
            <InputStyled
              required
              type="text"
              className="form-control"
              onChange={handleChange}
              name="name"
              placeholder="Restaurant's Name"
              value={shop.name}
            />
          </div>

          <div className="form-group col-md-6">
            <LabelStyled for="inputEmail4">
              Description <SpanStyled>*</SpanStyled>
            </LabelStyled>
            <InputStyled
              required
              type="text"
              className="form-control"
              onChange={handleChange}
              name="description"
              placeholder="EX: Desserts, Breakfast , Turkish, Seafood..etc"
              value={shop.description}
            />
          </div>

          <div className="form-group col-md-6">
            <LabelStyled for="inputPassword4">
              Insert Image <SpanStyled>*</SpanStyled>
            </LabelStyled>
            <InputStyled
              type="file"
              className="form-control"
              onChange={handleImage}
              name="image"
            />
          </div>
        </div>

        <button
          style={{ float: "right" }}
          type="submit"
          className="btn btn-primary"
          onSubmit={handleSubmit}
        >
          {oldShop ? "Update" : "Create"}
        </button>
      </form>
    </Modal>
  );
};

export default observer(ShopModal);
