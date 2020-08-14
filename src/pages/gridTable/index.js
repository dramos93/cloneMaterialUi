import React from "react";
import { Grid } from "@material-ui/core";
import InfoSquad from "./infoSquad";
import Search from "./search";
import Canvas from "./canvas";
import CanvasProvider from "./Context/canvas.js";

const GridTable = () => {
  return (
    <CanvasProvider>
      <Grid spacing={2} container>
        <InfoSquad />
        <Search />
        <Canvas />
      </Grid>
    </CanvasProvider>
  );
};

export default GridTable;
