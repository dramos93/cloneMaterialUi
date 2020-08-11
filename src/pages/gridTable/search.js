import React, { useState } from "react";
import {
  Grid,
  Typography,
  Box,
  Paper,
  Button,
  TextField,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import useStyles from "./style";
import clsx from "clsx";

export default function Search(props) {
  const { setCategories, categories } = props;
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.paperInfoSquad);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [skillFilteredCategories, setSkillFilteredCategories] = useState([]);

  const searchSkills = (event) => {
    setFilteredSkills([]);
    setSkillFilteredCategories([]);
    setSkillFilteredCategories(
      categories.map((x) => {
        let a = x.filho.map((y) => {
          let b = y.neto.filter((z) => {
            if (z.name.includes(event.target.value)) {
              setFilteredSkills((skill) => [...skill, z]);
              return z;
            }
            return null;
          });
          return b;
        });
        return a;
      })
    );
  };

  return (
    <Grid item xs={12}>
      <Paper className={fixedHeightPaper}>
        <Grid container spacing={1}>
          <Grid item lg={4} container direction="column">
            <Typography className={classes.typographyBold}>
              Categoria
            </Typography>
            <TextField
              margin="none"
              size="small"
              placeholder="Pesquisar"
              variant="outlined"
            />
            <Typography variant="caption">
              Digite no mínimo 3 caracteres
            </Typography>
          </Grid>
          <Grid item lg={4} container direction="column">
            <Typography className={classes.typographyBold}>
              Habilidade
            </Typography>
            <Autocomplete
              options={filteredSkills}
              getOptionLabel={(option) => option.name}
              onChange={(event) => {
                console.log(event.target.value);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  
                  margin="none"
                  size="small"
                  // placeholder="Pesquisar"
                  variant="outlined"
                  onChange={searchSkills}
                  // label="Digita aí"
                />
              )}
            />
            <Typography variant="caption">
              Digite no mínimo 3 caracteres
            </Typography>
          </Grid>
          <Grid
            item
            lg={4}
            container
            alignItems="center"
            justify="flex-end"
            spacing={2}
          >
            <Button variant="outlined">Limpar</Button>
            <Box p={1} />
            <Button color="secondary" variant="contained">
              Filtrar
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
