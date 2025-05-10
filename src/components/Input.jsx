import React, { useContext, useState } from "react";
import { BoardContext } from "../context.jsx";
import { handleAdd } from "../helpers.js";
import { Button } from "./KanbanBoard.styled.js";
import { Overlay, Row } from "./Input.styled.js";

const Input = ({ type }) => {
  const {
    setToggleColumnInput,
    setToggleTaskInput,
    setColumns,
    columns,
    activeColumn,
  } = useContext(BoardContext);
  const [titleInput, setTitleInput] = useState();
  const [body, setBody] = useState();

  const toggleOff = () =>
    type === "column" ? setToggleColumnInput(false) : setToggleTaskInput(false);

  return (
    <Overlay theme={{ type }}>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="enter a title"
        value={titleInput}
        onChange={(e) => setTitleInput(e.target.value)}
      />
      {type === "task" && (
        <textarea
          name="body"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="add details"
        />
      )}
      <Row>
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
              activeColumn,
              set: setColumns,
              ...(type === "task" ? { body } : {}),
            });
            toggleOff();
          }}
        >{`add ${type}`}</Button>
      </Row>
    </Overlay>
  );
};

export default Input;
