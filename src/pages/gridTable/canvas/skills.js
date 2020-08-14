import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import clsx from "clsx";
import { useCanvas } from "../Context/canvas.js";

const Skills = (props) => {
  const { classes, skill } = props.value;
  const { setSkills } = useCanvas();

  useEffect(() => {
    setSkills((s) => [...s, skill.id]);
  }, []);

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
