import React from "react";

//Stores
import pastaStore from "../../stores/pastaStore";
import shopStore from "../../stores/shopStore";

// Styles
import { DeleteShopButtonStyle } from "./Styles";
import { FaRegTrashAlt } from "react-icons/fa";

const DeleteButton = ({ pastaId, shopId }) => {
  const handleDelete = () => {
    if (shopId) {
      shopStore.deleteShop(shopId);
      alert("Are you sure you want to delete your whole shop?");
    } else {
      pastaStore.deletePasta(pastaId);
      alert("Are you sure you want to delete the pasta?");
    }
  };
  return (
    <div>
      {shopId ? (
        <DeleteShopButtonStyle onClick={handleDelete}>
          Delete
        </DeleteShopButtonStyle>
      ) : (
        <FaRegTrashAlt
          onClick={handleDelete}
          style={{
            color: "red",
            cursor: "pointer",
            marginLeft: 15,
          }}
        />
      )}
    </div>
  );
};

export default DeleteButton;
