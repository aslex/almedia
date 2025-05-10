import { useContext } from "react";
import { Column as Box, Card } from "./Column.styled.js";
import { Button } from "./KanbanBoard.styled.js";
import { BoardContext } from "../context.jsx";
import { removeTask } from "../helpers.js";

const Column = ({ data }) => {
  const { setToggleTaskInput, columns, setColumns, setActiveColumn } =
    useContext(BoardContext);

  const allTasks = data.tasks.map((task) => {
    return (
      <Card key={task.id}>
        <h3>{task.title}</h3>
        <p>{task.body}</p>
        <Button
          type="button"
          size="small"
          onClick={() =>
            removeTask({
              columns,
              columnId: data.id,
              set: setColumns,
              taskId: task.id,
            })
          }
        >
          delete
        </Button>
      </Card>
    );
  });
  return (
    <Box key={data.id}>
      <h2>{data.title}</h2>
      {allTasks}
      <Button
        onClick={() => {
          setToggleTaskInput(true);
          setActiveColumn(data.id);
        }}
      >
        Add Task
      </Button>
    </Box>
  );
};
export default Column;
