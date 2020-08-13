import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./style";
import clsx from "clsx";
import Skills from "./skills.js"

const Categories = (props) => {
  const {categories} = props;
  const classes = useStyles();
  return (
    <Grid container>
      {categories?.map((category) => (
        <Grid key={category.id} item xs lg container>
          <Grid className={clsx(classes.center, classes.categories)}>
            <p className={classes.textCategory}>{category.name}</p>
          </Grid>
          <Grid item xs lg>
            {category?.filho?.map((subCategory) => (
              <Grid key={subCategory.id} container>
                <Grid className={clsx(classes.center, classes.subcategories)}>
                  {subCategory.name}
                </Grid>
                <Grid item xs lg>
                  {subCategory?.neto?.map((skill) => {
                    let propsSkills = {...props, skill, classes}
                    return (
                      <Skills {...propsSkills}/>
                    )
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
