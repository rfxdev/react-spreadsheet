import React from "react";
import Row from "./Row";

export default class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }

  render() {
    const rows = [];

    for (let y = 0; y < this.props.y; y += 1) {
      const rowData = this.state.data[y] || {};
      rows.push(<Row key={y} y={y} x={this.props.x} rowData={rowData} />);
    }

    return <div>{rows}</div>;
  }
}
