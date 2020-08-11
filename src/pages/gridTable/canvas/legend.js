import React from "react";
import useStyles from "./style.js";
import { Grid, Typography } from "@material-ui/core";
import clsx from "clsx";

export default function Legend() {
  const classes = useStyles();

  const grades = [
    {
      grade: 1,
      classColor: clsx(classes.level, classes.colorLevel1, classes.center),
      levelCompetence: "Novato",
    },
    {
      grade: 4,
      classColor: clsx(classes.level, classes.colorLevel4, classes.center),
      levelCompetence: "Profissional",
    },
    {
      grade: 2,
      classColor: clsx(classes.level, classes.colorLevel2, classes.center),
      levelCompetence: "Iniciante",
    },
    {
      grade: 5,
      classColor: clsx(classes.level, classes.colorLevel5, classes.center),
      levelCompetence: "Professor",
    },
    {
      grade: 3,
      classColor: clsx(classes.level, classes.colorLevel3, classes.center),
      levelCompetence: "Praticante",
    },
  ];
  return (
    <Grid className={classes.legend} container>
      {grades.map((grade) => (
        <Grid key={grade.levelCompetence} item lg={6} xs={6} container alignItems="center">
          <Grid container direction="row" alignItems="center">
            <Typography className={grade.classColor}>{grade.grade}</Typography>
            <Typography className={classes.levelCompetence}>&nbsp;{grade.levelCompetence}</Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
