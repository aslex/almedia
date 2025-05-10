import React from "react";
import { Column as Box } from "./Column.styled.js";

const Column = ({ data }) => {
  return (
    <Box key={data.id}>
      <h2>{data.title}</h2>
    </Box>
  );
};
export default Column;
