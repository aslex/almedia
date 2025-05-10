import React, { useContext, useState } from "react";
import { BoardContext } from "../context.jsx";
import { handleAdd } from "../helpers.js";
import { Button } from "./KanbanBoard.styled.js";

const Input = ({ type }) => {
  const { setToggleColumnInput, setToggleCardInput, setColumns, columns } =
    useContext(BoardContext);
  const [titleInput, setTitleInput] = useState();
  const [body, setBody] = useState();

  const toggleOff = () =>
    type === "column" ? setToggleColumnInput(false) : setToggleCardInput(false);

  return (
    <div>
      <input
        type="text"
        name="title"
        id="title"
        value={titleInput}
        onChange={(e) => setTitleInput(e.target.value)}
      />
      {type === "card" && (
        <input type="text" name="body" id="body" value={body} />
      )}
      <Button type="button" onClick={toggleOff}>
        cancel
      </Button>
      <Button
        type="button"
        onClick={() => {
          handleAdd({
            type,
            titleInput,
            columns,
            set: setColumns,
            ...(type === "card" ? { body } : {}),
          });
          toggleOff();
        }}
      >{`add ${type}`}</Button>
    </div>
  );
};

export default Input;
