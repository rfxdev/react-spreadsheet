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

  componentDidMount() {
    window.document.addEventListener("unselectAll", this.handleUnselectAll);
  }

  componentWillUnmount() {
    window.document.removeEventListener("unselectAll", this.handleUnselectAll);
  }

  handleUnselectAll = () => {
    if (this.state.selected || this.state.editing) {
      this.setState({ selected: false, editing: false });
    }
  };

  emitUnselectAllEvent = () => {
    const unselectAllEvent = new Event("unselectAll");
    window.document.dispatchEvent(unselectAllEvent);
  };

  determineDisplay = ({ x, y }, value) => value;

  clicked = () => {
    this.emitUnselectAllEvent();
    this.setState({ selected: true });
  };

  doubleClicked = () => {
    this.emitUnselectAllEvent();
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
