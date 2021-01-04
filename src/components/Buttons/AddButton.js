import React, { useState } from "react";

// Styles
import { AddButtonStyle } from "./Styles";
import { GoPlus } from "react-icons/go";

// Modals
import PastaModal from "../modals/PastaModal";
import ShopModal from "../modals/ShopModal";

const AddButton = ({ shop }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <AddButtonStyle onClick={openModal}>
        {!shop ? "Create Shop" : " Add Pasta"} <GoPlus />
      </AddButtonStyle>
      {shop ? (
        <PastaModal shop={shop} isOpen={isOpen} closeModal={closeModal} />
      ) : (
        <ShopModal isOpen={isOpen} closeModal={closeModal} />
      )}
    </>
  );
};

export default AddButton;
