import React, { useState } from "react";
import { observer } from "mobx-react";
import { Redirect, useParams } from "react-router-dom";
import AddToCart from "../Buttons/AddToCart";

// Stores
import pastaStore from "../../stores/pastaStore";

// Styles
import { DetailWrapper, LinkStyle, InputFieldStyle } from "./Styles";

const PastaDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const { pastaSlug } = useParams();

  const pasta = pastaStore.pastas.find((pasta) => pasta.slug === pastaSlug);

  if (!pasta) return <Redirect to="/pastas" />;

  return (
    <div className="row">
      <DetailWrapper className="col-sm-12 ">
        <img src={pasta.image} alt={pasta.name} />
        <p>{pasta.name}</p>
        <p>{pasta.description}</p>
        <p>{pasta.price} $</p>
        <p>
          Qty:{"  "}
          <InputFieldStyle
            type="number"
            min="1"
            defaultValue="1"
            onChange={(event) => setQuantity(event.target.valueAsNumber)}
          />
        </p>
        <p>
          <AddToCart pasta={pasta} quantity={quantity} />
        </p>
      </DetailWrapper>
      <LinkStyle to="/pastas">
        <button>Go Back</button>
      </LinkStyle>
    </div>
  );
};

export default observer(PastaDetail);
