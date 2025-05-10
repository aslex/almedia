import React, { useContext } from "react";
import Column from "./Column.jsx";
import { BoardContext } from "../context.jsx";
import Input from "./Input.jsx";
import { Container, Button } from "./KanbanBoard.styled.js";

const KanbanBoard = () => {
  const { columns, setToggleColumnInput, toggleColumnInput, toggleTaskInput } =
    useContext(BoardContext);

  if (!columns) return;
  return (
    <Container>
      {columns?.length &&
        columns.map((c) => {
          return <Column data={c} key={c.id} />;
        })}

      <Button type="button" onClick={() => setToggleColumnInput(true)}>
        Add Column
      </Button>
      {toggleColumnInput && <Input type="column" />}
      {toggleTaskInput && <Input type="task"/>}
    </Container>
  );
};

export default KanbanBoard;
