import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const BoardContext = createContext({});

function BoardContextProvider({ children }) {
  const [toggleColumnInput, setToggleColumnInput] = useState(false);
  const [toggleTaskInput, setToggleTaskInput] = useState(false);
  const [columns, setColumns] = useState();
  const defaultColumns = [
    {
      id: uuidv4(),
      title: "To Do",
      tasks: [],
    },
    {
      id: uuidv4(),
      title: "In Progress",
      tasks: [],
    },
    {
      id: uuidv4(),
      title: "Done",
      tasks: [],
    },
  ];

  useEffect(() => {
    const savedColumns = localStorage.getItem("columns");
    if (!savedColumns || savedColumns.length === 0) {
      setColumns([...defaultColumns]);
    } else {
      console.log("setting saved columns:", JSON.parse(savedColumns));
      setColumns(JSON.parse(savedColumns));
    }
  }, []);

  useEffect(() => {
    if (!columns) return;
    localStorage.setItem("columns", JSON.stringify(columns));
  }, [columns]);

  return (
    <BoardContext.Provider
      value={{
        columns,
        setColumns,
        toggleColumnInput,
        setToggleColumnInput,
        toggleTaskInput,
        setToggleTaskInput,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}

export default BoardContextProvider;
