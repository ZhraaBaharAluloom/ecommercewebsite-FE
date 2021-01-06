import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

// Styles
import { ShopItemWrapper } from "./Styles";

const ShopItem = ({ shop }) => {
  return (
    <ShopItemWrapper>
      <img src={shop.image} alt={shop.name} />
      <Link to={`/shops/${shop.slug}`}>
        <p>{shop.name}</p>
      </Link>
    </ShopItemWrapper>
  );
};

export default observer(ShopItem);
