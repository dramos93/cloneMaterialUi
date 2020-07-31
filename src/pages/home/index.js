import React, { useState } from "react";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "./style.css";
import {
  Typography,
  Button,
  Box,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Switch,
  Checkbox,
  TableRow,
  TableCell,
  TableContainer,
  TableHead,
  TableBody,
  Table,
} from "@material-ui/core";
import {
  categories,
  evaluations,
  usersSquad,
} from "../../variables/evaluation";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  paperInfoSquad: {
    // height: theme.spacing(11),
  },
  //Aqui foi eu que fiz
  typographyBold: {
    fontWeight: "bold",
  },
  gridInfoSquad: {
    height: theme.spacing(11),
  },
  radio: {
    "& .Mui-checked": {
      backgroundColor: "#b11f24",
    },
  },
}));

const Home = (props) => {
  const [cor, setCor] = useState("#bbc2cc");

  const setColor = {
    1: () => setCor("#bb1f24"),
    2: () => console.log("2"),
    3: () => console.log("passou aqui"),
    4: () => console.log("passou aqui"),
    5: () => console.log("passou aqui"),
  };

  const valor = (props) => {
    !!props && console.log(document.getElementById(props?.id));
    // return props;
  };
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.paperInfoSquad);

  return (
    <>
      <Grid container spacing={2}>
        {/* Chart */}
        <Grid item xs={12} md={12} lg={12}>
          <Paper className={fixedHeightPaper}>
            {/* Aqui começa as info da Squad */}
            <Grid container spacing={1} style={{ height: "100%" }}>
              <Grid item lg={1} container alignItems="center" justify="center">
                <img src="../logo192.png" width="49px" />
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

        {/* Categoria e Habilidade */}
        <Grid item xs={8}>
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
        {/* Aqui Começa outro */}
        <Grid item xs={4}>
          <Paper className={fixedHeightPaper}>
            <RadioGroup
              defaultValue="Somente Cores"
              aria-label="Teste"
              name="customized-radios"
            >
              <Grid container alignItems="center">
                <Typography className={classes.typographyBold}>
                  Ordenar por:
                </Typography>
                <Box p={1} />
                <FormControlLabel
                  value="Somente Cores"
                  control={<Radio size="dense" />}
                  label="Somente Cores"
                />
                <FormControlLabel
                  value="Cores e Números"
                  control={<Radio className={classes.radio} />}
                  label="Cores e Números"
                />
                <FormControlLabel
                  value="Números Pretos"
                  control={<Radio />}
                  label="Números Pretos"
                />
                <FormControlLabel
                  value="Ícones"
                  control={<Radio />}
                  label="Ícones"
                />
                <FormControlLabel
                  value="Números Coloridos"
                  control={<Radio />}
                  label="Números Coloridos"
                />
              </Grid>
            </RadioGroup>
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper
          // className={classes.paper}
          // style={{ backgroundColor: "red", height: "630px" }}
          >
            <TableContainer
              className={classes.container}
              style={{ position: "relative" }}
            >
              <Table stickyHeader aria-label="sticky table">
                <TableRow>
                  <TableCell style={{ padding: 0, width: 406 }}>
                    <Grid
                      style={{
                        width: 406,
                        height: 120,
                        // backgroundColor: "#b11f2420",
                        paddingLeft: 70,
                        margin: 0,
                      }}
                      container
                    >
                      <Grid
                        item
                        lg={6}
                        direction="column"
                        style={{
                          padding: 2,
                        }}
                      >
                        <p>
                          <p
                            style={{
                              borderRadius: "100%",
                              width: 20,
                              backgroundColor: "#ffb9ae",
                              textAlign: "center",
                              display: "inline-block",
                              margin: 0,
                            }}
                          >
                            1
                          </p>
                          &nbsp;Novato
                        </p>
                        <p>
                          <p
                            style={{
                              borderRadius: "100%",
                              width: 20,
                              backgroundColor: "#ffecba",
                              textAlign: "center",
                              display: "inline-block",
                              margin: 0,
                            }}
                          >
                            2
                          </p>
                          &nbsp;Iniciante
                        </p>
                        <p>
                          <p
                            style={{
                              borderRadius: "100%",
                              width: 20,
                              backgroundColor: "#e6f8b3",
                              textAlign: "center",
                              display: "inline-block",
                              margin: 0,
                            }}
                          >
                            3
                          </p>
                          &nbsp;Praticante
                        </p>
                      </Grid>
                      <Grid
                        item
                        lg={6}
                        style={{
                          padding: 2,
                        }}
                      >
                        <p>
                          <p
                            style={{
                              borderRadius: "100%",
                              width: 20,
                              backgroundColor: "#bfe7ff",
                              textAlign: "center",
                              display: "inline-block",
                              margin: 0,
                            }}
                          >
                            4
                          </p>
                          &nbsp;Profissional
                        </p>
                        <p>
                          <p
                            style={{
                              borderRadius: "100%",
                              width: 20,
                              backgroundColor: "#f0bfff",
                              textAlign: "center",
                              display: "inline-block",
                              margin: 0,
                            }}
                          >
                            5
                          </p>
                          &nbsp;Professor
                        </p>
                      </Grid>
                    </Grid>
                  </TableCell>
                  {usersSquad.map((user) => (
                    <TableCell align="left" style={{ padding: 0 }}>
                      <Grid
                        style={{ width: 140, textAlign: "center", margin: 0 }}
                      >
                        {user.user.fisrtName}
                      </Grid>
                    </TableCell>
                  ))}
                  <TableCell style={{ padding: 0, border: "none" }}></TableCell>
                </TableRow>
              </Table>
              <Table
                stickyHeader
                aria-label="sticky table"
                
              >
                <TableBody
                  style={{
                    position: "relative",
                    overflow: "visible",
                  }}
                >
                  {categories.map((row) => {
                    return (
                      <>
                        <TableRow
                          role="checkbox"
                          tabIndex={-1}
                          key={row.id}
                          style={{
                  position: "absolute",
                  marginLeft: 0,
                  overflow: "visible",
                }}
                        >
                          <TableCell
                            key={row.id}
                            style={{
                              width: 39,
                              padding: 14.5,
                            }}
                          >
                            <p
                              style={{
                                width: 7,
                                wordWrap: "break-word",
                                whiteSpace: "break-spaces",
                                fontFamily: "Roboto",

                              }}
                            >
                              {row.name}
                            </p>
                          </TableCell>
                          {row.filho.map((f) => {
                            return (
                              <TableRow
                                role="checkbox"
                                tabIndex={-1}
                                key={row.id}
                                style={{
                                  padding: 0,
                                  position: "absolute",
                                  left: 37,
                                  display: "inline-block"
                                }}
                              >
                                <TableCell
                                  key={f.id}
                                  style={{
                                    padding: 0,

                                  }}
                                >
                                  <Grid
                                    style={{
                                      textAlign: "center",
                                      width: 152,
                                    }}
                                  >
                                    {f.name}
                                  </Grid>
                                </TableCell>
                                {f.neto?.map((n) => {
                                  return (
                                    <TableRow
                                      role="checkbox"
                                      tabIndex={-1}
                                      key={n.id}
                                      style={{ position: "absolute", left: 152 }}
                                    >
                                      <TableCell
                                        style={{
                                          padding: 0,
                                        }}
                                        key={n.id}
                                      >
                                        <Grid
                                          style={{
                                            width: 213,
                                            justifyContent: "center",
                                            alignItems: "center",
                                            display: "flex",
                                            height: 60,
                                          }}
                                        >
                                          {n.name}
                                        </Grid>
                                      </TableCell>
                                      <TableRow
                                        style={{
                                          position: "relative",
                                          left: 400,
                                        }}
                                      >
                                        {usersSquad?.map((user) => (
                                          <TableCell
                                            style={{
                                              padding: 0,
                                            }}
                                          >
                                            <Grid
                                              style={{
                                                justifyContent: "center",
                                                alignItems: "center",
                                                display: "flex",
                                                width: 140,
                                                height: 60,
                                              }}
                                            >
                                              {
                                                evaluations?.find(
                                                  (x) =>
                                                    x?.userSquadId ===
                                                      user?.id &&
                                                    x?.categorySkillId === n?.id
                                                )?.grade
                                              }
                                            </Grid>
                                          </TableCell>
                                        ))}
                                      </TableRow>
                                    </TableRow>
                                  );
                                })}
                              </TableRow>
                            );
                          })}
                        </TableRow>
                      </>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
