import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./style";
import clsx from "clsx";
import Skills from "./skills.js";
import { useCanvas } from "../Context/canvas.js";

const Categories = () => {
  const { categories } = useCanvas();
  const classes = useStyles();
  const func = (category) => {
    let i = 0;
    category.filho.map((x) => x.neto.map((y) => i++));
    console.log("tamanho da palavra" + category.name.length);
    console.log("quantidade de filhos" + i);
    console.log(
      category.name.length > i * 3 ? category.name.slice(0, i * 3) + "..." : category.name
    );


// let inv = {optionOne: function(){}}

    return category.name.slice(0, i * 3);
  };
  return (
    <Grid container>
      {categories?.map((category) => (
        <Grid key={category.id} item xs lg container>
          <Grid
            className={clsx(classes.center, classes.categories)}
            onMouseOver={() => {
              let i = 0;

              category.filho.map((x) => x.neto.map((y) => i++));
              console.log(i);
            }}
          >
            <pre className={classes.textCategory}>{func(category)}</pre>
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
