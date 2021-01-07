import { observer } from "mobx-react";
import React from "react";

// Components
import CartItem from "./CartItem";

// Stores
import cartStore from "../../stores/cartStore";

const CartList = () => {
  const cartList = cartStore.items.map((item) => (
    <CartItem item={item} key={item.id} />
  ));

  return <div>{cartList}</div>;
};

export default observer(CartList);
