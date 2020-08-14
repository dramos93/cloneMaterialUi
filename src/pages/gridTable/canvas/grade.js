import React, { useState } from "react";
import { InputBase } from "@material-ui/core";
import { grades } from "../../../variables/evaluation";
import clsx from "clsx";

export default function Grade(props) {
  const { user, classes, skill } = props;
  const [openEditGrade, setOpenEditGrade] = useState(false);
  const [grade, setGrade] = useState(
    grades.find((g) => g.userSquadId === user.id && g.categorySkillId === skill)
      ?.grade
  );

  const cellGradeColor = {
    1: clsx(classes.grade, classes.colorGrade1),
    2: clsx(classes.grade, classes.colorGrade2),
    3: clsx(classes.grade, classes.colorGrade3),
    4: clsx(classes.grade, classes.colorGrade4),
    5: clsx(classes.grade, classes.colorGrade5),
  };

  const updateGrade = (event, categorySkillId, userSquadId) => {
    setOpenEditGrade(false);
    console.log(
      `grade ${event.target.value} idCategorySkill ${categorySkillId} idUser ${userSquadId}`
    );
    console.log("Salvou no Banco");
  };

  return (
    <InputBase
      className={
        !!cellGradeColor[grade]
          ? cellGradeColor[grade]
          : clsx(classes.grade, classes.notGrade)
      }
      defaultValue={grade || ""}
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
