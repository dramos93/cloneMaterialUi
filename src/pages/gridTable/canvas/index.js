import React from "react";
import useStyles from "./style";
import { Grid, Typography } from "@material-ui/core";
import Legend from "./legend.js";
import clsx from "clsx";
import Categories from "./categories.js";
import { usersSquad } from "../../../variables/evaluation";
import User from "./user.js";

const Canvas = (props) => {
  
  const classes = useStyles();

  return (
    <Grid className={classes.canvas} container direction="row">
      <Grid item lg xs className={classes.menu}>
        <Legend />
        <Grid className={clsx(classes.competence, classes.center)}>
          <Typography className={classes.textCompetence}>Técnico</Typography>
        </Grid>
        <Categories {...props}/>
      </Grid>
      <Grid
        item
        lg
        xs
        className={classes.info}
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        {usersSquad.map((user) => (
          <User user={user} {...props} classes={classes}/>
        ))}
      </Grid>
      <Grid item lg xs></Grid>
    </Grid>
  );
};
export default Canvas;
