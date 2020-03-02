import React from "react";
import Cell from "./Cell";

const Row = props => {
  const cells = [];
  const { y } = props;

  for (let ix = 0; ix < props.x; ix += 1) {
    const cellData = props.rowData[ix] || "";
    cells.push(
      <Cell
        key={`${y}-${ix}`}
        y={y}
        x={ix}
        value={cellData}
        onChangedValue={props.handleChangedCells}
      />
    );
  }

  return <tr>{cells}</tr>;
};

export default Row;
