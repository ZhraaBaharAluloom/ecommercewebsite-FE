import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";

// Components
import PastaModal from "../modals/PastaModal";
import ShopModal from "../modals/ShopModal";

// Styles
import { UpdateShopButtonStyle } from "./Styles";

const UpdateButton = ({ pasta, shop }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div style={{ display: "inline" }}>
      {shop ? (
        <>
          <UpdateShopButtonStyle onClick={openModal}>
            Edit
          </UpdateShopButtonStyle>
          <ShopModal oldShop={shop} isOpen={isOpen} closeModal={closeModal} />
        </>
      ) : (
        <>
          <FiEdit
            style={{
              cursor: "pointer",
              marginLeft: 5,
            }}
            onClick={openModal}
          />
          <PastaModal
            oldPasta={pasta}
            isOpen={isOpen}
            closeModal={closeModal}
          />
        </>
      )}
    </div>
  );
};

export default UpdateButton;
