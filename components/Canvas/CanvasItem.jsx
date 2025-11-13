import React, { useState } from "react";
import LightController from "../devices/Light/LightController";

const CanvasItem = ({ item, onDragStart}) => {
  const CanvasComponent = item.canvasComponent || item.component;
  const canvasComponentSize = item.canvasComponentProps?.size || 200;
  const ComponentController = item.controller;

  const [itemState, setItemState] = useState(item);

  const updateItemState = (newProps) => {
    setItemState((prev) => ({ ...prev, ...newProps }));
  };

  if (!CanvasComponent) {
    return <div>Component not found</div>;
  }

  return (
    <div
      style={{
        position: "absolute",
        left: `${item.x}px`,
        top: `${item.y}px`,
      }}
    >
      {/* Draggable area — only the lightbulb */}
      <div
        draggable
        onDragStart={() => onDragStart(item)}
        className="cursor-move hover:scale-102 transition-transform duration-100 group inline-block"
      >
        <CanvasComponent
          size={canvasComponentSize}
          {...itemState}
        />
      </div>


      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-50">
        <ComponentController controls={{
          props: itemState,        // current state
          onUpdateItem: updateItemState, // local updater
        }} />
      </div>
    </div>
  );
};

export default CanvasItem;
