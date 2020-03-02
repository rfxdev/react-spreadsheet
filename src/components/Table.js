import React from "react";
import Row from "./Row";
import "./Table.css";

export default class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }

  handleChangedCell = ({ x, y }, value) => {
    const modifiedData = Object.assign({}, this.state.data);
    if (!modifiedData[y]) modifiedData[y] = {};
    modifiedData[y][x] = value;
    this.setState({ data: modifiedData });
  };

  render() {
    const rows = [];

    for (let iy = 0; iy < this.props.y; iy += 1) {
      const rowData = this.state.data[iy] || {};
      rows.push(
        <Row
          key={iy}
          y={iy}
          x={this.props.x}
          rowData={rowData}
          handleChangedCells={this.handleChangedCell}
        />
      );
    }

    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
