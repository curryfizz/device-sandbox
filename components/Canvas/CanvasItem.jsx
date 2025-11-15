import React, { useState } from "react";

const CanvasItem = ({ item, onDragStart }) => {
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
    <>
      <div style={{
        position: "absolute",
        left: item.x,
        top: item.y,
      }}>
        <div
          draggable
          onDragStart={() => onDragStart(item)}
          className="cursor-move hover:scale-105 transition-transform duration-100 group inline-block"
        >
          <CanvasComponent
            size={canvasComponentSize}
            {...itemState}
          />
        </div>


      </div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-50">
        <ComponentController controls={{
          props: itemState,
          onUpdateItem: updateItemState,
        }} />
      </div>
    </>
  );
};

export default CanvasItem;
