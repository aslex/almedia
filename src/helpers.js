import { v4 as uuidv4 } from "uuid";

export const handleAdd = (params) => {
  if (params.type === "column") {
    console.log('creating column:', params.titleInput)
    params.set([
      ...params.columns,
      { id: uuidv4(), title: params.titleInput, tasks: [] },
    ]);
  } else {
    // add task card
  }
};
