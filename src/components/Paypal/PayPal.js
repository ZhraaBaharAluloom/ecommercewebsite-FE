import { observer } from "mobx-react";
import React, { useEffect, useState, useRef } from "react";

const PayPal = ({ item }) => {
  const [paidFor, setPaidFor] = useState(false);
  const [loaded, setLoaded] = useState(false);
  let paypalRef = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AfvaQ7O2jJ3V-138e7E18Ep5Xdgmk7SPGlOE1qcTn2ffxnrhGMlGw0KJao2i-KjVrmXZ57pu5DRYW6GA";
    script.addEventListener("load", () => setLoaded(true));
    document.body.appendChild(script);
    if (loaded) {
      setTimeout(() => {
        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: item.description,
                    amount: {
                      currency_code: "USD",
                      value: item.price,
                    },
                  },
                ],
              });
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();
              setPaidFor(true);
            },
          })
          .render(paypalRef);
      });
    }
  });

  return (
    <div>
      {paidFor ? (
        <h1>Congrats, you just bought a really delicious item</h1>
      ) : (
        <div>
          {/* {item.description} for $ {item.price} */}
          {/* <img src={item.image} /> */}
          <div ref={(v) => (paypalRef = v)} />
        </div>
      )}
    </div>
  );
};

export default observer(PayPal);
