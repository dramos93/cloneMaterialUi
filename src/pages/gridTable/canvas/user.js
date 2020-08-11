import React from "react";
import { Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import Grade from "./grade.js";

export default function User(props) {
  const { skills, user, classes } = props;

  return (
    <Grid className={classes.userGrade} key={user.id}>
      <Grid className={classes.user} key={1}>
        <Grid
          className={classes.userInfo}
          container
          justify="space-between"
          direction="column"
        >
          <img
            className={classes.userImage}
            alt="userImage"
            src="https://avatars3.githubusercontent.com/u/55096360?s=400&u=45346278debf2f5d7b063f492c12bdd78b80c560&v=4"
          />
          <Typography className={classes.userName} align="center">
            {user.user.fisrtName}
          </Typography>
        </Grid>
        <Grid className={clsx(classes.userIcon, classes.center)}>
          <img alt="userIcon" src="https://i.imgur.com/2suEEVv.png" />
        </Grid>
      </Grid>
      {skills.map((skill) => (
        <Grade skill={skill} {...props} />
      ))}
    </Grid>
  );
}
