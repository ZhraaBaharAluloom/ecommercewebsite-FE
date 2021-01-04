import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

// Components
import DeleteButton from "../Buttons/DeleteButton";
import UpdateButton from "../Buttons/UpdateButton";

//Data
import { ItemWrapper } from "./Styles";
import authStore from "../../stores/authStore";

const PastaItem = ({ pasta, shop }) => {
  const { user } = authStore;
  return (
    <ItemWrapper>
      <img src={pasta.image} alt={pasta.name} />
      <p>
        {pasta.name}
        <Link style={{ color: "black" }} to={`/pastas/${pasta.slug}`}>
          ... more
        </Link>
        {user && user.id === shop?.UserId && (
          <>
            <DeleteButton pastaId={pasta.id} />
            <UpdateButton pasta={pasta} />
          </>
        )}
      </p>
    </ItemWrapper>
  );
};

export default observer(PastaItem);
