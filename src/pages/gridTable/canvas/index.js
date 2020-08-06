import React from "react";
import useStyles from "./style";
import { Grid, Typography, InputBase } from "@material-ui/core";
import Legend from "./legend.js";
import clsx from "clsx";
import Categories from "./categories.js";

const Canvas = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.canvas} container direction="row">
      <Grid item lg xs className={classes.menu}>
        <Legend />
        <Grid className={clsx(classes.competence, classes.center)}>
          <Typography className={classes.textCompetence}>Técnico</Typography>
        </Grid>
        <Categories />
      </Grid>
      <Grid item lg xs className={classes.info} container direction="column">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 60, 70, 80, 90].map((x) => (
          <>
            <Grid className={classes.userGrade} key={10}>
              <Grid className={classes.user} key={1}>
                <Grid
                  className={classes.userInfo}
                  container
                  justify="space-between"
                >
                  <img
                    className={classes.userImage}
                    src="https://avatars3.githubusercontent.com/u/55096360?s=400&u=45346278debf2f5d7b063f492c12bdd78b80c560&v=4"
                  />
                  <Typography className={classes.userName} align="center">
                    Ana Maria Braga
                  </Typography>
                </Grid>
                <Grid className={clsx(classes.userIcon, classes.center)}>
                  <img src="https://cdn-sharing.adobecc.com/id/urn:aaid:sc:US:3c9272ee-56f1-4e39-965a-b1fe802d8db4;version=0?component_id=8b37350c-b622-42b7-9423-751ccdfb5fd3&api_key=CometServer1&access_token=1596737676_urn%3Aaaid%3Asc%3AUS%3A3c9272ee-56f1-4e39-965a-b1fe802d8db4%3Bpublic_7a2374843e7b9e968cc93e91ee7b0714b07698f6" />
                </Grid>
              </Grid>
              <InputBase className={classes.grade} value="1" />
              <InputBase className={classes.grade} value="1" />
              <InputBase className={classes.grade} value="1" />
              <InputBase className={classes.grade} value="1" />
              <InputBase className={classes.grade} value="1" />
              <InputBase className={classes.grade} value="1" />
              <InputBase className={classes.grade} value="1" />
              <InputBase className={classes.grade} value="1" />
              <InputBase className={classes.grade} value="1" />
              <InputBase className={classes.grade} value="1" />
              <InputBase className={classes.grade} value="1" />
              <InputBase className={classes.grade} value="1" />
            </Grid>
          </>
        ))}
      </Grid>
    </Grid>
  );
};
export default Canvas;
