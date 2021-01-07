import React from "react";
import { Link } from "react-router-dom";

// Styles
import { CartItemWrapper } from "./Styles";

const CartItem = ({ item }) => {
  return (
    <CartItemWrapper>
      <img src={item.image} alt={item.name} />
      <p>
        <Link style={{ color: "black" }} to={`/pastas/${item.slug}`}></Link>
        {item.name}
        {/* {user && user.id === shop?.UserId && (
          <>
            <DeleteButton pastaId={pasta.id} />
            <UpdateButton pasta={pasta} />
          </>
        )} */}
      </p>
    </CartItemWrapper>
  );
};

export default CartItem;
