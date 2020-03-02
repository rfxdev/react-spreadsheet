import React from "react";
import Cell from "./Cell";

const Row = props => {
  const cells = [];
  const { y } = props;

  for (let x = 0; x < props.x; x += 1) {
    cells.push(
      <Cell key={`${x}-${y}`} y={y} x={x} value={props.rowData[x] || ""} />
    );
  }

  return <div>{cells}</div>;
};

export default Row;
