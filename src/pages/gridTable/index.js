import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import InfoSquad from "./infoSquad";
import Search from "./search";
import Canvas from "./canvas";
import { categories as categoriesDataBase } from "../../variables/evaluation.js";

const GridTable = () => {
  const [categories, setCategories] = useState(categoriesDataBase);
  const [skills, setSkills] = useState([]);

  return (
    <Grid spacing={2} container>
      <InfoSquad />
      <Search
        setSkills={setSkills}
        setCategories={setCategories}
        categories={categories}
      />
      <Canvas skills={skills} setSkills={setSkills} categories={categories} />
    </Grid>
  );
};

export default GridTable;
