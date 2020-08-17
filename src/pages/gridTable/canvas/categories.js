import React from "react";
import { Grid, Tooltip, Typography } from "@material-ui/core";
import useStyles from "./style";
import clsx from "clsx";
import Skills from "./skills.js";
import { useCanvas } from "../Context/canvas.js";

const Categories = () => {
  const { categories } = useCanvas();
  const classes = useStyles();
  const lengthCategory = (category) => {
    let i = 0;
    category.filho.map((x) => x.neto.map(() => i++));
    if (i * 3 < 4) return "...";
    if (category.name.length > i * 3)
      return category.name.slice(0, i * 2.5 - 3) + "...";
    else return category.name;
  };
  return (
    <Grid container>
      {categories?.map((category) => (
        <Grid key={category.id} item xs lg container>
          <Tooltip
            title={<Typography variant="h6">{category.name}</Typography>}
            placement="top"
            arrow
          >
            <Grid
              className={clsx(classes.center, classes.categories)}
              onMouseOver={() => {
                let i = 0;

                category.filho.map((x) => x.neto.map((y) => i++));
                console.log(i);
              }}
            >
              <pre className={classes.textCategory}>
                {lengthCategory(category)}
              </pre>
            </Grid>
          </Tooltip>
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
