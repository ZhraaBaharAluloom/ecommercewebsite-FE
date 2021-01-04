import { observer } from "mobx-react";
import React from "react";
import { Redirect, useParams } from "react-router";

//Components
import PastaList from "../Pasta/PastaList";
import AddButton from "../Buttons/AddButton";
import UpdateButton from "../Buttons/UpdateButton";

// Styles
import { DetailWrapper } from "./Styles";

// Stores
import shopStore from "../../stores/shopStore";
import DeleteButton from "../Buttons/DeleteButton";
import pastaStore from "../../stores/pastaStore";
import authStore from "../../stores/authStore";

const ShopDetail = () => {
  const { shopSlug } = useParams();
  const { user } = authStore;
  if (!user) return <Redirect to="/pastas" />;
  const shop = shopStore.shops.find((_shop) => _shop.slug === shopSlug);
  if (!shop) return <Redirect to="/shops" />;

  const pastas =
    shop && shop.pastas
      ? shop.pastas
          .map((pasta) => pastaStore.getPastaById(pasta.id))
          .filter((pasta) => pasta)
      : [];

  return (
    <>
      <DetailWrapper className="container">
        <p>{shop.name}</p>

        <img src={shop.image} alt={shop.name} />
        <p>{shop.description}</p>
        {user.role === "admin" ||
          (user?.id === shop?.UserId && (
            <>
              <UpdateButton shop={shop} />
              <DeleteButton shopId={shop.id} />
            </>
          ))}
      </DetailWrapper>
      <PastaList pastas={pastas} shop={shop} />
      {user?.id === shop.UserId && <AddButton shop={shop} />}
    </>
  );
};

export default observer(ShopDetail);
