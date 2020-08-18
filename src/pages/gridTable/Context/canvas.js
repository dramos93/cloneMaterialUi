import React, { createContext, useState, useContext } from "react";
import { categories as categoriesDataBase } from "../../../variables/evaluation.js";

const CanvasContext = createContext();

export default function CanvasProvider({ children }) {
  const obj = Object.assign([], categoriesDataBase);
  // Object.seal(obj);
  const [categories, setCategories] = useState(obj);
  const [skills, setSkills] = useState([]);
  const [grades, setGrades] = useState(
    JSON.parse(localStorage.getItem("grades"))
  );
  const [reloadGrades, setReloadGrades] = useState(true);

  // function deepFreeze(obj) {
  //   const props = Object.getOwnPropertyNames(obj);
  //   props.forEach(function (name) {
  //     const prop = obj[name];
  //     if (typeof prop === "object" && prop !== null) {
  //       deepFreeze(prop);
  //     }
  //   });
  //   return Object.freeze(obj);
  // }
  // deepFreeze(categoriesDataBase);
  // console.log(categoriesDataBase);

  return (
    <CanvasContext.Provider
      value={{
        categories,
        setCategories,
        skills,
        setSkills,
        grades,
        setGrades,
        reloadGrades,
        setReloadGrades,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
}
export function useCanvas() {
  const context = useContext(CanvasContext);

  const {
    categories,
    setCategories,
    skills,
    setSkills,
    grades,
    setGrades,
    reloadGrades,
    setReloadGrades,
  } = context;
  return {
    categories,
    setCategories,
    skills,
    setSkills,
    grades,
    setGrades,
    reloadGrades,
    setReloadGrades,
  };
}
