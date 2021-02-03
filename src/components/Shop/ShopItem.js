import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

// Styles
import { ShopItemWrapper } from "./Styles";

const ShopItem = ({ shop }) => {
  return (
    <ShopItemWrapper>
      <Link to={`/shops/${shop.slug}`}>
        <div className="card">
          <img src={shop.image} className="card-img-top" alt={shop.name} />
          <div className="card-body">
            <p className="card-text">
              <p>{shop.name}</p>
              {shop.description}
            </p>
          </div>
        </div>
      </Link>
    </ShopItemWrapper>
  );
};

export default observer(ShopItem);
