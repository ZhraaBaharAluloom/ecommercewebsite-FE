import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

// Components
import CartItem from "./CartItem";
import SearchBar from "../Serachbar/SearchBar";

// Stores
import cartStore from "../../stores/cartStore";
import pastaStore from "../../stores/pastaStore";

// Styles
import { TotalPriceStyle, Wrapper } from "./Styles";
import { useState } from "react";

const CartList = () => {
  const [query, setQuery] = useState("");
  const _items = cartStore.items.map((item) => ({
    ...pastaStore.getPastaById(item.pastaId),
    quantity: item.quantity,
  }));

  const cartList = _items
    ? _items
        .filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
        .map((item) => <CartItem item={item} key={item.name} />)
    : [];
  const totalPrice = _items.map((item) => item.price * item.quantity);

  let total = 0;
  for (let i = 0; i < totalPrice.length; i++) {
    total += totalPrice[i];
  }

  return (
    <div style={{ marginTop: "4em" }}>
      <SearchBar setQuery={setQuery} />
      {cartList}

      <Wrapper>
        <TotalPriceStyle>
          {cartList.length === 0 ? "Cart is empty" : `Total Price : $ ${total}`}{" "}
        </TotalPriceStyle>
      </Wrapper>
      {/* <Link to="/checkout">checkout</Link> */}
    </div>
  );
};

export default observer(CartList);
