import React, { useState } from "react";
import { observer } from "mobx-react";
import { Link, Redirect, useParams } from "react-router-dom";
import AddToCart from "../Buttons/AddToCart";

// Stores
import pastaStore from "../../stores/pastaStore";
import shopStore from "../../stores/shopStore";
import authStore from "../../stores/authStore";

// Styles
import { DetailWrapper, LinkStyle, InputFieldStyle } from "./Styles";
import Comment from "../Comments/Comment";
import commentStore from "../../stores/commentStore";

const PastaDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const { pastaSlug } = useParams();

  const pasta = pastaStore.pastas.find((pasta) => pasta.slug === pastaSlug);
  const shop = shopStore.shops.filter((shop) => shop.id === pasta?.shopId);
  const { user } = authStore;
  const pastaComments = commentStore.comments.filter(
    (_comment) => _comment.pastaId === pasta.id
  );
  console.log(
    "🚀 ~ file: PastaDetail.js ~ line 26 ~ PastaDetail ~ pastaComments",
    pastaComments
  );

  if (!pasta) return <Redirect to="/pastas" />;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <DetailWrapper>
        <Link to={`/shops/${shop[0].slug}`}>
          <p className="shop-name">{shop[0].name}</p>
        </Link>
        <div
          className="card mb-3"
          style={{
            maxWidth: "40em",
            backgroundColor: "#1B1F22",
          }}
        >
          <div className="row g-0">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <img src={pasta.image} alt={pasta.name} />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="card-body">
                <h5 className="card-title">{pasta.name}</h5>
                <p className="card-text">{pasta.description}</p>
                <p className="card-text">$ {pasta.price} </p>
                <p className="card-text">
                  <small className="text-muted">
                    <p>
                      Qty:{"  "}
                      <InputFieldStyle
                        type="number"
                        min="1"
                        defaultValue="1"
                        onChange={(event) =>
                          setQuantity(event.target.valueAsNumber)
                        }
                      />
                    </p>
                    <p>
                      <AddToCart pasta={pasta} quantity={quantity} />
                    </p>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <Comment pastaId={pasta.id} user={user} pastaComments={pastaComments} />
        <LinkStyle to="/pastas">
          <button>Go Back</button>
        </LinkStyle>
      </DetailWrapper>
    </div>

    // <div>
    //   <DetailWrapper className="col-sm-6 ">
    //     <Link to={`/shops/${shop[0].slug}`}>
    //       <p className="shop-name">{shop[0].name}</p>
    //     </Link>
    //     <img src={pasta.image} alt={pasta.name} />
    //     <p>{pasta.name}</p>
    //     <p>{pasta.description}</p>
    //     <p>{pasta.price} $</p>
    //     <p>
    //       Qty:{"  "}
    //       <InputFieldStyle
    //         type="number"
    //         min="1"
    //         defaultValue="1"
    //         onChange={(event) => setQuantity(event.target.valueAsNumber)}
    //       />
    //     </p>
    //     <p>
    //       <AddToCart pasta={pasta} quantity={quantity} />
    //     </p>
    //   </DetailWrapper>
    //   <LinkStyle to="/pastas">
    //     <button>Go Back</button>
    //   </LinkStyle>
    // </div>
  );
};

export default observer(PastaDetail);
