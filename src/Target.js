import React, { Component } from "react";
import { DropTarget } from "react-dnd";

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem()
  };
}

class Target extends Component {
  render() {
    const { connectDropTarget, hovered, item } = this.props;
    return connectDropTarget(<div className="target">Target</div>);
  }
}
export default DropTarget("item", {}, collect)(Target);
