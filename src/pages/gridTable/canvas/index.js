import React from "react";
import useStyles from "./style";
import { Grid } from "@material-ui/core";
import Legend from "./legend.js"

// $(window).bind('scroll', function () {
//   if ($(window).scrollTop() > num) {
//       $('.menu').addClass('fixed');
//   } else {
//       $('.menu').removeClass('fixed');
//   }
// });

const Canvas = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.canvas} container direction="row">
      <Grid item lg xs className={classes.menu}>
        <Legend />
        <Grid className={classes.competence}>Técnico</Grid>
        <Grid className={classes.competence}>Comportamental</Grid>
      </Grid>
      <Grid item lg xs className={classes.info} container direction="column">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 60, 70, 80, 90].map((x) => (
          <>
            <Grid className={classes.userInfo} key={10}>
              <Grid className={classes.user} key={1}>
                AZUL
              </Grid>
              <Grid className={classes.grade} key={1}>
                1
              </Grid>
              <Grid className={classes.grade} key={1}>
                2
              </Grid>
              <Grid className={classes.grade} key={1}>
                3
              </Grid>
              <Grid className={classes.grade} key={1}>
                4
              </Grid>
              <Grid className={classes.grade} key={1}>
                5
              </Grid>
            </Grid>
          </>
        ))}
      </Grid>
    </Grid>
  );
};
export default Canvas;
