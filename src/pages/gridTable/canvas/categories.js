import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./style";
import clsx from "clsx";
import Skills from "./skills.js";
import { useCanvas } from "../Context/canvas.js";

const Categories = () => {
  const { categories } = useCanvas();
  const classes = useStyles();

  return (
    <Grid container>
      {categories?.map((category) => (
        <Grid key={category.id} item xs lg container>
          <Grid className={clsx(classes.center, classes.categories)}>
            {/* {console.log(category?.map((x) => x))} */}
            <pre className={classes.textCategory}>{category.name}</pre>
          </Grid>
          <Grid item xs lg>
            {category?.filho?.map((subCategory) => (
              <Grid key={subCategory.id} container>
                <Grid className={clsx(classes.center, classes.subcategories)}>
                  {subCategory.name}
                </Grid>
                <Grid item xs lg>
                  {subCategory?.neto?.map((skill) => {
                    return <Skills key={skill.id} value={{ skill, classes }} />;
                  })}
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};
export default Categories;
