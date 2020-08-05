import React from "react";
import { Grid, Typography, Box, Paper, Button } from "@material-ui/core";
import useStyles from "../style";
import clsx from "clsx";

export default function () {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.paperInfoSquad);

  return (
    <Grid item xs={12} md={12} lg={12}>
      <Paper className={fixedHeightPaper}>
        {/* Aqui começa as info da Squad */}
        <Grid container spacing={1} style={{ height: "100%" }}>
          <Grid item lg={1} container alignItems="center" justify="center">
            <img
              src={"../../../../src/logo512.png"}
              alt="description"
              style={{ width: "49px" }}
            />
          </Grid>
          <Grid item lg={10} container alignItems="center">
            <Typography className={classes.typographyBold}>
              Nome da Squad:&nbsp;
            </Typography>
            <Typography>Zero</Typography>
            <Box p={1} />
            <Typography className={classes.typographyBold}>
              Torre:&nbsp;
            </Typography>
            <Typography>Padawan</Typography>
            <Box p={1} />

            <Typography className={classes.typographyBold}>
              Produto:&nbsp;
            </Typography>
            <Typography>Mapa de Competências</Typography>
            <Box p={1} />

            <Typography className={classes.typographyBold}>
              Gestor:&nbsp;
            </Typography>
            <Typography>Thiago Silva</Typography>
            <Box p={1} />
            <Typography className={classes.typographyBold}>
              Líder Técnico:&nbsp;
            </Typography>
            <Typography>João Carlos, Marcos Machados</Typography>
          </Grid>
          <Grid item lg={1} container alignItems="center">
            <Grid direction="row" justify="flex-end" alignItems="center">
              <Button color="secondary" variant="contained">
                Gráficos
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {/* Aqui começa Outro */}
      </Paper>
    </Grid>
  );
}
