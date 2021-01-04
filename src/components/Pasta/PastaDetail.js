import React from "react";
import { observer } from "mobx-react";
import { Link, Redirect, useParams } from "react-router-dom";

// Components
import DeleteButton from "../Buttons/DeleteButton";

// Stores
import pastaStore from "../../stores/pastaStore";
import authStore from "../../stores/authStore";
import shopStore from "../../stores/shopStore";

// Styles
import { DetailWrapper, LinkStyle } from "./Styles";

const PastaDetail = () => {
  const { pastaSlug } = useParams();
  const pasta = pastaStore.pastas.find((pasta) => pasta.slug === pastaSlug);

  if (!pasta) return <Redirect to="/pastas" />;

  return (
    <div className="row">
      <DetailWrapper className="col-sm-12 col-md-12 col-lg-6">
        <img src={pasta.image} alt={pasta.name} />
        <p>{pasta.name}</p>
        <p>{pasta.price} $</p>
        <p>{pasta.description}</p>
      </DetailWrapper>
      <div>
        {/* <div style={{ float: "left" }}>
          <LinkStyle
            style={{ margin: 80, display: "block", cursor: "pointer" }}
            to="/pastas"
          >
            Go Back
          </LinkStyle>
        </div> */}
      </div>
    </div>
  );
};

export default observer(PastaDetail);
