type Task = {
  title: string;
  description: string;
};
type Column = {
  title: string;
  tasks: Array<Task>;
};

export type Columns = Array<Column>;
