import React from "react";
import { observer } from "mobx-react";
import cartStore from "../../stores/cartStore";

// Styles
import { AddToCartButtonStyle } from "./Styles";

const AddToCart = ({ pasta, quantity }) => {
  const handleButton = () => {
    const newItem = { quantity, pastaId: pasta.id };
    cartStore.addItemToCart(newItem);
  };
  return (
    <>
      <AddToCartButtonStyle onClick={handleButton}>
        ADD TO CART
      </AddToCartButtonStyle>
    </>
  );
};

export default observer(AddToCart);
