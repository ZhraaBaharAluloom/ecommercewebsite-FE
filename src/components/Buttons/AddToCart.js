import React from "react";
import { observer } from "mobx-react";
import cartStore from "../../stores/cartStore";

// Styles
import { AddToCartButtonStyle } from "./Styles";

const AddToCart = ({ pasta }) => {
  const handleButton = (pasta) => {
    cartStore.addItemToCart(pasta);
  };
  return (
    <>
      <AddToCartButtonStyle onClick={() => handleButton(pasta)}>
        ADD TO CART
      </AddToCartButtonStyle>
    </>
  );
};

export default observer(AddToCart);
