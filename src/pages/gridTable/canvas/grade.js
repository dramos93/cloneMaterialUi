import React, { useState, useEffect } from "react";
import { InputBase } from "@material-ui/core";
import clsx from "clsx";
import { useCanvas } from "../Context/canvas.js";

export default function Grade(props) {
  const { user, classes, skill } = props;
  const [openEditGrade, setOpenEditGrade] = useState(false);
  const [grade, setGrade] = useState("");
  const { grades, setGrades } = useCanvas();

  const cellGradeColor = {
    1: clsx(classes.grade, classes.colorGrade1),
    2: clsx(classes.grade, classes.colorGrade2),
    3: clsx(classes.grade, classes.colorGrade3),
    4: clsx(classes.grade, classes.colorGrade4),
    5: clsx(classes.grade, classes.colorGrade5),
  };

  const updateGrade = (event, categorySkillId, userSquadId) => {
    !localStorage.getItem("grades") &&
      localStorage.setItem("grades", JSON.stringify([]));
    let gradesLocalStorage = JSON.parse(localStorage.getItem("grades"));
    gradesLocalStorage = gradesLocalStorage.filter((grade) => {
      return !(
        grade.userSquadId === userSquadId &&
        grade.categorySkillId === categorySkillId
      );
    });
    gradesLocalStorage.push({
      userSquadId,
      categorySkillId,
      grade: event.target.value,
    });
    localStorage.setItem("grades", JSON.stringify(gradesLocalStorage));
    setGrades(gradesLocalStorage);
    setOpenEditGrade(false);
    console.log(
      `grade ${event.target.value} idCategorySkill ${categorySkillId} idUser ${userSquadId}`
    );
    console.log("Salvou no Banco");
  };

  let searchGrade = grades?.find(
    (g) => g.userSquadId === user.id && g.categorySkillId === skill
  )?.grade;

  useEffect(() => {
    !!localStorage.getItem("grades") && setGrade(searchGrade || "");
    console.log("atualizou");
  }, [searchGrade]);

  return (
    <InputBase
      className={
        !!cellGradeColor[grade]
          ? cellGradeColor[grade]
          : clsx(classes.grade, classes.notGrade)
      }
      value={grade}
      onBlur={(event) => {
        openEditGrade && updateGrade(event, skill, user.id);
        !event.target?.value && !!grade && (event.target.value = grade);
      }}
      onKeyPress={(event) => {
        if (parseInt(event.key) === grade) {
          setOpenEditGrade(true);
        }
      }}
      onChange={(event) => {
        if (!!event.target.value) {
          event.target.value = event.target.value[0].replace(/[^1-5?]+/s, "");
          if (!!cellGradeColor[event.target.value]) {
            setGrade(parseInt(event.target.value));
            setOpenEditGrade(true);
          }
        }
      }}
    />
  );
}
