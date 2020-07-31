import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Table } from "./pages";

const Routes = () => {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/table" component={Table} />
    </Switch>
  );
};

export default Routes;
