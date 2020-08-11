import React, { useState } from "react";
import {
  categories,
  evaluations,
  usersSquad,
} from "../../variables/evaluation";

import { Paper, Grid, InputBase } from "@material-ui/core";
import "./style.css";
import clsx from "clsx";
import useStyles from "./style";
import InfoSquad from "./components/InfoSquad";
import Search from "./components/search";

const Table = () => {
  const classes = useStyles();
  const [openEditGrade, setOpenEditGrade] = useState(false);
  const fixedHeightPaper = clsx(classes.paper, classes.paperInfoSquad);
  // const [cellGrade, setCellGrade] = useState();

  let ordemSkill = [];

  const updateGrade = (event, categorySkillId, userSquadId) => {
    setOpenEditGrade(false);
    console.log(
      `grade ${event.target.value} idCategorySkill ${categorySkillId} idUser ${userSquadId}`
    );
    console.log("Salvou no Banco");
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
      <InfoSquad />
      <Search />
      <Paper className={fixedHeightPaper} style={{ overflow: "hidden" }}>
        <Grid style={{ height: 550, overflowY: "scroll", overflowX: "hidden" }}>
          <table style={{}}>
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
                      width: 400,
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
                      <tr>
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
                  <table>
                    <thead>
                      <tr
                        style={{
                          backgroundColor: "white",
                          display: "table-row",
                          top: 0,
                        }}
                      >
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
                          backgroundColor: "white",
                          // marginTop: 121,
                        }}
                      >
                        {usersSquad.map((user) => (
                          <th className="divider">
                            <Grid style={{ width: 144 }}>☺☻</Grid>
                          </th>
                        ))}
                      </tr>
                    </thead>
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
                            <td>
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
