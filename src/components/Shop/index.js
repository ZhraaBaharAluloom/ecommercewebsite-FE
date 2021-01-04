import React, { useState } from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router";

// Components
import ShopItem from "./ShopItem";
import AddButton from "../Buttons/AddButton";
import SearchBar from "../Serachbar/SearchBar";

// Stores
import shopStore from "../../stores/shopStore";
import authStore from "../../stores/authStore";

// Styles
import { ListWrapper, ShopListWrapper } from "./Styles";

const ShopList = () => {
  const [query, setQuery] = useState("");

  if (!authStore.user) return <Redirect to="/pastas" />;

  const shopList = shopStore.shops
    .filter((shop) => shop.name.toLowerCase().includes(query.toLowerCase()))
    .map((shop) => <ShopItem shop={shop} key={shop.id} />);

  return (
    <ListWrapper className="container">
      <SearchBar setQuery={setQuery} />
      <ShopListWrapper>{shopList}</ShopListWrapper>
      <AddButton />
    </ListWrapper>
  );
};

export default observer(ShopList);
