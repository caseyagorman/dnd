import React, { Component } from "react";
import { DragSource } from "react-dnd";

const itemSource = {
  beginDrag(props) {
    return props.item;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    return props.handleDrop(props.item.id);
  }
};
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

class Item extends Component {
  render() {
    const { isDragging, connectDragSource, item } = this.props;
    return connectDragSource(
      <div className="item">
        <span>{item.name}</span>
      </div>
    );
  }
}

export default DragSource("item", itemSource, collect)(Item);
