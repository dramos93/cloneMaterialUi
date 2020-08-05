import React from "react";
import useStyles from "./style.js";
import { Grid, Typography } from "@material-ui/core";

export default function Legend() {
  const classes = useStyles();
  return (
    <Grid className={classes.legend} container>
      <Grid
        item
        lg={6}
        xs={6}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid>
          <Typography className={classes.noob}>1</Typography>
          <Typography>Novato</Typography>
        </Grid>
      </Grid>
      <Grid
        item
        lg={6}
        xs={6}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        2
      </Grid>
    </Grid>
  );
}
