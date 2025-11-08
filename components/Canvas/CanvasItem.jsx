import React from 'react';

const CanvasItem = ({ item, onDragStart, onRemove, onUpdateItem }) => {
  const CanvasComponent = item.canvasComponent || item.component;
  
  const canvasComponentSize = item.canvasComponentProps?.size || 160;

  if (!CanvasComponent) {
    return <div>Component not found</div>;
  }
  return (
    <div
      draggable
      onDragStart={() => onDragStart(item)}
      style={{
        position: 'absolute',
        left: `${item.x - 32}px`,
        top: `${item.y - 48}px`,
      }}
      className="cursor-move hover:scale-105 transition-transform duration-100 group"
    >
      {/* Render the canvas component */}
      <CanvasComponent
        size={canvasComponentSize}
        isOn={item.isOn || false}
        onToggle={() => onUpdateItem?.(item.id, { isOn: !item.isOn })}
      />

    </div>
  );
};

export default CanvasItem;