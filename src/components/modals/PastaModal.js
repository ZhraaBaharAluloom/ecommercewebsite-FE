import React, { useState } from "react";
import { observer } from "mobx-react";
import Modal from "react-modal";

// Stores
import pastaStore from "../../stores/pastaStore";

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

const PastaModal = ({ isOpen, closeModal, oldPasta, shop }) => {
  const [pasta, setPasta] = useState(
    oldPasta ?? {
      name: "",
      image: "",
      price: 30,
      description: "",
      shopId: shop.id,
    }
  );

  const handleChange = (event) => {
    setPasta({ ...pasta, [event.target.name]: event.target.value });
  };

  const handleImage = (event) =>
    setPasta({ ...pasta, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    pastaStore[oldPasta ? "updatePasta" : "createPasta"](pasta, shop);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Pasta Modal"
      ariaHideApp={false}
    >
      <form onSubmit={handleSubmit}>
        <AiFillCloseCircle
          style={{ color: "#FEF9EC", marginBottom: 10 }}
          onClick={closeModal}
        />
        <TitleStyled>{oldPasta ? "Update Pasta" : "Add New Pasta"}</TitleStyled>

        <div className="form-row">
          <div className="form-group col-md-6">
            <LabelStyled for="inputEmail4">
              Pasta Name <SpanStyled>*</SpanStyled>
            </LabelStyled>
            <InputStyled
              required
              type="text"
              className="form-control"
              onChange={handleChange}
              name="name"
              placeholder="Name of Meal"
              value={pasta.name}
            />
          </div>
          <div className="form-group col-md-6">
            <LabelStyled for="inputEmail4">
              Price <SpanStyled>*</SpanStyled>
            </LabelStyled>
            <InputStyled
              required
              type="number"
              min="20"
              className="form-control"
              onChange={handleChange}
              name="price"
              placeholder="The Price of the Meal"
              value={pasta.price}
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
              placeholder="Describe your Meal"
              value={pasta.description}
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
          {oldPasta ? "Update" : "Add"}
        </button>
      </form>
    </Modal>
  );
};

export default observer(PastaModal);
