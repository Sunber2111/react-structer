import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ProductDetail from "./pages/detail";
import List from "./pages/list";
import "./styles.css";

const Product = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route
        exact
        path={`list/${match.url}`}
        component={() => (
          <div className="pro-list">
            <p className="title">Shop</p>
            <List />
          </div>
        )}
      />
      <Route exact path={`detail/${match.url}`} component={ProductDetail} />
    </Switch>
  );
};

export default Product;
