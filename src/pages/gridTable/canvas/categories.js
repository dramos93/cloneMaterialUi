import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./style";
import { categories } from "../../../variables/evaluation.js";
import clsx from "clsx";

export default function Categories() {
  const classes = useStyles();
  return (
    <Grid container>
      {categories.map((category) => (
        <Grid item xs container>
          <Grid className={clsx(classes.center, classes.categories)}>
            <p className={classes.textCategory}>{category.name}</p>
          </Grid>
          <Grid item xs>
            {category.filho.map((subCategory) => (
              <Grid container>
                <Grid className={clsx(classes.center, classes.subcategories)}>
                  {subCategory.name}
                </Grid>
                <Grid item xs>
                  {subCategory.neto.map((skill) => (
                    <Grid
                      container
                      className={clsx(classes.center, classes.skill)}
                    >
                      {skill.name}
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
