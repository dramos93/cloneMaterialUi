import React, { useState } from "react";
import {
  categories,
  evaluations,
  usersSquad,
} from "../../variables/evaluation";

import {
  Typography,
  Button,
  Box,
  TextField,
  Paper,
  Grid,
  InputBase,
  makeStyles,
} from "@material-ui/core";
import "./style.css";
import clsx from "clsx";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  cellGrade: {
    width: 144,
    position: "static",
    "& .MuiInputBase-input": {
      width: 32,
      textAlign: "center",
      margin: "auto",
      borderRadius: "100%",
    },
  },
  grade1: {
    "& .MuiInputBase-input": {
      backgroundColor: "#ffb9ae",
    },
  },
  grade2: {
    "& .MuiInputBase-input": {
      backgroundColor: "#FFECBA",
    },
  },
  grade3: {
    "& .MuiInputBase-input": {
      backgroundColor: "#E6F8B3",
    },
  },
  grade4: {
    "& .MuiInputBase-input": {
      backgroundColor: "#BFE7FF ",
    },
  },
  grade5: {
    "& .MuiInputBase-input": {
      backgroundColor: "#f0bfff",
    },
  },
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

const Table = () => {
  const classes = useStyles();
  const [openEditGrade, setOpenEditGrade] = useState(false);
  const fixedHeightPaper = clsx(classes.paper, classes.paperInfoSquad);
  const [cellGrade, setCellGrade] = useState();

  let ordemSkill = [];

  const updateGrade = (event, categorySkillId, userSquadId) => {
    setOpenEditGrade(false);
    console.log(
      `grade ${event.target.value} idCategorySkill ${categorySkillId} idUser ${userSquadId}`
    );
    console.log("Salvou no Banco");
    //
  };

  const cellGradeColor = {
    1: clsx(classes.cellGrade, classes.grade1),
    2: clsx(classes.cellGrade, classes.grade2),
    3: clsx(classes.cellGrade, classes.grade3),
    4: clsx(classes.cellGrade, classes.grade4),
    5: clsx(classes.cellGrade, classes.grade5),
  };

  const addArray = (idSkill) => {
    ordemSkill.push(idSkill);
  };

  return (
    <Grid container spacing={3}>
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
      {/* Aqui Começa outro    */}

      <Paper
        className={fixedHeightPaper}
        style={{ position: "sticky", overflow: "hidden" }}
      >
        <Grid style={{ height: 550, overflowY: "scroll", overflowX: "hidden" }}>
          <table style={{ position: "static" }}>
            <tr className="thFixed">
              <th className="thTop">
                <tr>
                  <td
                    style={{
                      height: "121px",
                      backgroundColor: "white",
                      position: "fixed",
                      width: 400,
                    }}
                  >
                    <Grid container>
                      <Grid
                        item
                        lg={6}
                        xs={6}
                        container
                        direction="column"
                        justify="center"
                        alignItems="stretch"
                        style={{
                          margin: 0,
                          borderSpacing: 0,
                          display: "block",
                        }}
                      >
                        <p className="nivelText">
                          <p
                            className="nivel"
                            style={{
                              backgroundColor: "#ffb9ae",
                            }}
                          >
                            1
                          </p>
                          &nbsp;Novato
                        </p>
                        <p className="nivelText">
                          <p
                            className="nivel"
                            style={{
                              backgroundColor: "#ffecba",
                            }}
                          >
                            2
                          </p>
                          &nbsp;Iniciante
                        </p>
                        <p className="nivelText">
                          <p
                            className="nivel"
                            style={{
                              backgroundColor: "#e6f8b3",
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
                        xs={6}
                        container
                        direction="column"
                        justify="center"
                        alignItems="stretch"
                        style={{
                          margin: 0,
                          borderSpacing: 0,
                          display: "block",
                        }}
                      >
                        <p className="nivelText">
                          <p
                            className="nivel"
                            style={{
                              backgroundColor: "#bfe7ff",
                            }}
                          >
                            4
                          </p>
                          &nbsp;Profissional
                        </p>
                        <p className="nivelText">
                          <p
                            className="nivel"
                            style={{
                              backgroundColor: "#f0bfff",
                            }}
                          >
                            5
                          </p>
                          &nbsp;Professor
                        </p>
                      </Grid>
                    </Grid>
                  </td>
                </tr>
                <tr>
                  <th
                    style={{
                      marginTop: 121,
                      position: "fixed",
                      backgroundColor: "white",
                    }}
                  >
                    <Grid
                      className="divider"
                      container
                      alignItems="center"
                      justify="center"
                    >
                      Técnico
                    </Grid>
                  </th>
                </tr>
                <div style={{ marginTop: 171 }}>
                  {categories.map((category) => (
                    <table style={{ width: 400 }}>
                      <tr style={{}}>
                        <td className="category">
                          <p
                            style={{
                              width: 8,
                              wordWrap: "break-word",
                              whiteSpace: "break-spaces",
                              fontFamily: "Roboto",
                              margin: "auto",
                              color: "#FF6A12",
                            }}
                          >
                            {category.name}
                          </p>
                        </td>
                        {category?.filho.map((subCategory) => (
                          <table>
                            <tr>
                              <td className="subCategory">
                                <Grid>{subCategory.name}</Grid>
                              </td>
                              <table>
                                {subCategory.neto.map((skill) => (
                                  <tr>
                                    <td className="skill">{skill.name}</td>
                                    {addArray(skill.id)}
                                  </tr>
                                ))}
                              </table>
                            </tr>
                          </table>
                        ))}
                      </tr>
                    </table>
                  ))}
                </div>
              </th>
              <th>
                <div
                  style={{
                    overflowX: "scroll",
                    width: "calc(99vw - 500px)",
                  }}
                >
                  <table style={{ position: "relative" }}>
                    <tr style={{ position: "fixed", backgroundColor: "white" }}>
                      {usersSquad.map((user) => (
                        <th className="legend">
                          <Grid style={{ width: 144 }}>
                            {user?.user?.fisrtName}
                          </Grid>
                        </th>
                      ))}
                    </tr>
                    <tr
                      style={{
                        position: "fixed",
                        backgroundColor: "white",
                        marginTop: 121,
                      }}
                    >
                      {usersSquad.map((user) => (
                        <th className="divider">
                          <Grid style={{ width: 144 }}>☺☻</Grid>
                        </th>
                      ))}
                    </tr>
                    <div style={{ marginTop: 171 }}>
                      {ordemSkill.map((idSkill) => (
                        <tr>
                          {usersSquad.map((user) => {
                            const metodo = (user, idEvaluation) => {
                              let variavel = evaluations.find(
                                (grade) =>
                                  grade.userSquadId === user.id &&
                                  grade.categorySkillId === idEvaluation
                              );
                              return variavel?.grade;
                            };

                            let grade = metodo(user, idSkill);
                            return (
                              <td style={{ verticalAlign: "middle" }}>
                                <InputBase
                                  {...user}
                                  className={
                                    !!cellGradeColor[grade]
                                      ? cellGradeColor[grade]
                                      : classes.cellGrade
                                  }
                                  defaultValue={grade || 0}
                                  onBlur={(event) =>
                                    //Tirar daqui essa condicional e colocar dentro do método
                                    openEditGrade &&
                                    updateGrade(event, idSkill, user.id)
                                  }
                                  //Tem que colocar o último valor caso o usuário delete e não coloque nenhum
                                  onChange={(event) => {
                                    if (!!event.target.value) {
                                      event.target.value = event.target.value[0].replace(
                                        /[^1-5?]+/s,
                                        ""
                                      );
                                    }
                                    setOpenEditGrade(true);
                                  }}
                                />
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </div>

                    <tr></tr>
                  </table>
                </div>
              </th>
            </tr>
          </table>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Table;
