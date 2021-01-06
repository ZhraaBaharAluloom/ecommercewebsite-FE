import React from "react";
import { observer } from "mobx-react";
import { Redirect, useParams } from "react-router-dom";

// Stores
import pastaStore from "../../stores/pastaStore";

// Styles
import { DetailWrapper, LinkStyle } from "./Styles";

const PastaDetail = () => {
  const { pastaSlug } = useParams();
  const pasta = pastaStore.pastas.find((pasta) => pasta.slug === pastaSlug);

  if (!pasta) return <Redirect to="/pastas" />;

  return (
    <div className="row">
      <DetailWrapper className="col-sm-12 ">
        <img src={pasta.image} alt={pasta.name} />
        <p>{pasta.name}</p>
        <p>{pasta.price} $</p>
        <p>{pasta.description}</p>
      </DetailWrapper>
      <LinkStyle to="/pastas">
        <button>Go Back</button>
      </LinkStyle>
    </div>
  );
};

export default observer(PastaDetail);
