import React from "react";
import { Grid, Typography, Box, Paper, Button,TextField } from "@material-ui/core";
import useStyles from "../style";
import clsx from "clsx";

export default function Search() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.paperInfoSquad);

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
