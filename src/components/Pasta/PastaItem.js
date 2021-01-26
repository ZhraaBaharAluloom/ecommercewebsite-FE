import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

// Components
import DeleteButton from "../Buttons/DeleteButton";
import UpdateButton from "../Buttons/UpdateButton";
import AddToCart from "../Buttons/AddToCart";

//Stores
import authStore from "../../stores/authStore";

// Styles
import { ItemWrapper } from "./Styles";

const PastaItem = ({ pasta, shop }) => {
  const { user } = authStore;
  return (
    <ItemWrapper>
      <img src={pasta.image} alt={pasta.name} />
      <p>
        <Link style={{ color: "black" }} to={`/pastas/${pasta.slug}`}>
          {" "}
          {pasta.name}
        </Link>
        {user && user.id === shop?.UserId && (
          <>
            <DeleteButton pastaId={pasta.id} />
            <UpdateButton pasta={pasta} />
          </>
        )}
      </p>

      <p style={{ display: "block", padding: 0 }}>$ {pasta.price}</p>
      <AddToCart pasta={pasta} quantity={1} />
    </ItemWrapper>
  );
};

export default observer(PastaItem);
