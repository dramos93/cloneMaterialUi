import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import clsx from "clsx";

const Skills = (props) => {
  const { classes, skill, setSkills } = props;

  useEffect(() => {
    setSkills((s) => [...s, skill.id]);
  }, [skill, setSkills]);

  return (
    <Grid
      key={skill.id}
      container
      className={clsx(classes.center, classes.skill)}
    >
      {skill.name}
    </Grid>
  );
};

export default Skills;
