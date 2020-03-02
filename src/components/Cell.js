import React from "react";
import "./Cell.css";

export default class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      value: props.value
    };

    this.display = this.determineDisplay(
      { x: props.x, y: props.y },
      props.value
    );
  }

  determineDisplay = ({ x, y }, value) => value;

  clicked = () => {
    this.setState({ selected: true });
  };

  doubleClicked = () => {
    this.setState({ selected: true, editing: true });
  };

  onChange = e => {
    this.setState({ value: e.target.value });
    this.display = this.determineDisplay(
      { x: this.props.x, y: this.props.y },
      e.target.value
    );
  };

  render() {
    let cellClass = "cell";

    if (this.state.selected) {
      cellClass += " cell-selected";
    }

    if (this.state.editing) {
      return (
        <input
          className={cellClass}
          type="text"
          onChange={this.onChange}
          value={this.state.value}
          autoFocus
        />
      );
    }

    return (
      <div
        className={cellClass}
        onClick={e => this.clicked(e)}
        onDoubleClick={e => this.doubleClicked(e)}
      >
        {this.display}
      </div>
    );
  }
}
