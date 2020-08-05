import React from "react";
import { Grid } from "@material-ui/core";
import InfoSquad from "./infoSquad";
import Search from "./search";
import Canvas from "./canvas";
const GridTable = () => {
  return (
    <Grid>
      <InfoSquad />
      <Search />
      <Canvas />
    </Grid>
  );
};

export default GridTable;
