import React, { createContext, useState, useContext } from "react";
import { categories as categoriesDataBase } from "../../../variables/evaluation.js";

const CanvasContext = createContext();

export default function CanvasProvider({ children }) {
  const [categories, setCategories] = useState(categoriesDataBase);
  const [skills, setSkills] = useState([]);

  return (
    <CanvasContext.Provider
      value={{ categories, setCategories, skills, setSkills }}
    >
      {children}
    </CanvasContext.Provider>
  );
}
export function useCanvas() {
  const context = useContext(CanvasContext);

  const { categories, setCategories, skills, setSkills} = context;
  return { categories, setCategories, skills, setSkills};
}
