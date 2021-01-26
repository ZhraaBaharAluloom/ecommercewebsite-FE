import React from "react";
import { observer } from "mobx-react";
import { Route, Switch } from "react-router";

// Components
import PastaDetail from "../Pasta/PastaDetail";
import PastaList from "../Pasta/PastaList";
import ShopList from "../Shop";
import ShopDetail from "../Shop/ShopDetail";
import pastaStore from "../../stores/pastaStore";
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";
import Home from "../Home/Home";
import CartList from "../Cart/CartList";
import PayPal from "../Paypal/PayPal";

const Routes = () => {
  return (
    <Switch>
      <Route path="/shops/:shopSlug">
        <ShopDetail />
      </Route>
      <Route path="/shops">
        <ShopList />
      </Route>
      <Route path="/pastas/:pastaSlug">
        <PastaDetail />
      </Route>
      <Route path="/pastas">
        <PastaList pastas={pastaStore.pastas} />
      </Route>
      <Route path="/sign-in">
        <Signin />
      </Route>
      <Route path="/sign-up">
        <Signup />
      </Route>
      {/* <Route path="/checkout">
        <PayPal />
      </Route> */}
      <Route path="/cart">
        <CartList />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default observer(Routes);
