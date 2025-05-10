import { v4 as uuidv4 } from "uuid";

export const handleAdd = (params) => {
  if (params.type === "column") {
    console.log("creating column:", params.titleInput);
    params.set([
      ...params.columns,
      { id: uuidv4(), title: params.titleInput, tasks: [] },
    ]);
  } else {
    const newTask = {
      id: uuidv4(),
      title: params.titleInput,
      body: params.body,
    };
    const updatedColumns = params.columns.map((col) => {
      if (col.id === params.activeColumn) {
        col.tasks.push(newTask);
      }
      return col;
    });
    params.set([...updatedColumns]);
  }
};

export const removeTask = ({ columns, columnId, taskId, set }) => {
  console.log("removing!");
  const prunedColumns = columns.map((col) => {
    if (col.id === columnId) {
      const filteredList = col.tasks.filter((task) => task.id !== taskId);
      col.tasks = [...filteredList];
    }
    return col;
  });
  set([...prunedColumns]);
};
