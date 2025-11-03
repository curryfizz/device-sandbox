import React from 'react';

const CanvasItem = ({ item, onDragStart, onRemove }) => {
  const DeviceComponent = item.component; // Get the component

  return (
    <div
      draggable
      onDragStart={() => onDragStart(item)}
      onDoubleClick={() => onRemove(item.id)}
      style={{
        left: `${item.x - 40}px`,
        top: `${item.y - 40}px`,
      }}
      className="absolute w-20 h-20 bg-gray-800 border-2 border-gray-700 rounded-xl flex flex-col items-center justify-center gap-1.5 cursor-move hover:scale-105 transition-transform duration-100"
      title="Double-click to remove"
    >
      <DeviceComponent size={24} className="text-gray-400" />
      <span className="text-xs text-gray-200">{item.name}</span>
    </div>
  );
};

export default CanvasItem;