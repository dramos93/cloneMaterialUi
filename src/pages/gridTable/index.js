import React,{ useState} from "react";
import { Grid } from "@material-ui/core";
import InfoSquad from "./infoSquad";
import Search from "./search";
import Canvas from "./canvas";
import { categories as categoriesDataBase} from "../../variables/evaluation.js";

const GridTable = () => {
  const [categories, setCategories] = useState(categoriesDataBase);
  return (
    <Grid spacing={2} container>
      <InfoSquad />
      <Search setCategories={setCategories} categories={categories}/>
      <Canvas categories={categories} />
    </Grid>
  );
};

export default GridTable;
