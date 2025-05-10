import React, { useContext } from "react";
import Column from "./Column.jsx";
import { BoardContext } from "../context.jsx";
import Input from "./Input.jsx";
import { Container, Button } from "./KanbanBoard.styled.js";

const KanbanBoard = () => {
  const { columns, setToggleColumnInput, toggleColumnInput } =
    useContext(BoardContext);
  console.log("col", columns);
  console.log("type", typeof columns);
  if (!columns) return;
  return (
    <Container>
      {columns?.length &&
        columns.map((c) => {
          return <Column data={c} key={c.id} />;
        })}

      <Button type="button" onClick={setToggleColumnInput}>
        Add Column
      </Button>
      {toggleColumnInput && <Input type="column" />}
    </Container>
  );
};

export default KanbanBoard;
