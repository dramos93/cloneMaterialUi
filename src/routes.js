import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Table, GridTable, Fernando } from "./pages";

const Routes = () => {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/table" component={Table} />
      <Route path="/gridTable" component={GridTable} />
      <Route path="/fernando" component={Fernando} />
    </Switch>
  );
};

export default Routes;
