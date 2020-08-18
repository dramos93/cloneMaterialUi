import React from "react";
import useStyles from "./style";
import { Grid, Typography, Button } from "@material-ui/core";
import Legend from "./legend.js";
import clsx from "clsx";
import Categories from "./categories.js";
import { usersSquad } from "../../../variables/evaluation";
import User from "./user.js";
import { useCanvas } from "../Context/canvas.js";

const Canvas = () => {
  const { grades, setReloadGrades, setGrades } = useCanvas();
  const classes = useStyles();

  const createGrades = async () => {
    setReloadGrades(false);
    console.log(grades);
    // aqui eu passo o método axios: create(grades)
    setGrades([]);
    await localStorage.removeItem("grades");
    setReloadGrades(true);
  };

  return (
    <Grid className={classes.canvas} container direction="row">
      <Grid item lg xs className={classes.menu}>
        <Legend />
        <Grid className={clsx(classes.competence, classes.center)}>
          <Typography className={classes.textCompetence}>Técnico</Typography>
        </Grid>
        <Categories />
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
          <User key={user.id} user={user} classes={classes} />
        ))}
      </Grid>
      <Grid item lg xs></Grid>
      <Button
        variant="contained"
        color="secondary"
        className={classes.buttonSaveGrades}
        onClick={createGrades}
        disabled={!grades?.length}
      >
        Salvar
      </Button>
    </Grid>
  );
};
export default Canvas;
