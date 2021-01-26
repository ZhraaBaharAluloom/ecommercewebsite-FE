import React, { useState } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import cartStore from "../../stores/cartStore";
import PayPal from "../Paypal/PayPal";

// Styles
import { CartItemWrapper, InputFieldStyle, RemoveItemButton } from "./Styles";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const handleIncrease = () => {
    const newItem = { quantity, pastaId: item.id };
    cartStore.addItemToCart(newItem);
    // setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    const newItem = { quantity, pastaId: item.id };
    cartStore.decreaseItemQuantity(newItem);
    // setQuantity(quantity - 1);
  };
  return (
    <CartItemWrapper>
      <img src={item.image} alt={item.name} />
      <p>
        <Link style={{ color: "black" }} to={`/pastas/${item.slug}`}>
          {item.name}
        </Link>
      </p>
      <p>Quantity : {item.quantity} </p>
      <p
        style={{ display: "inline-flex", fontSize: 25, paddingRight: 3 }}
        onClick={handleDecrease}
      >
        -
      </p>
      <InputFieldStyle
        type="number"
        min="1"
        defaultValue="1"
        onChange={(event) => setQuantity(event.target.valueAsNumber)}
      />{" "}
      <p
        style={{ display: "inline-flex", fontSize: 25, paddingLeft: 3 }}
        onClick={handleIncrease}
      >
        +
      </p>
      <div>
        <RemoveItemButton onClick={() => cartStore.removeFromCart(item.id)}>
          Remove
        </RemoveItemButton>
      </div>
      <p>
        Price: ${item.price} x {item.quantity} = ${item.quantity * item.price}
      </p>
      <div>
        <PayPal item={item} />
      </div>
    </CartItemWrapper>
  );
};

export default observer(CartItem);
