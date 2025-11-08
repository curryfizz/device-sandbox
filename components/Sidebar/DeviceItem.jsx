import React, { useState } from 'react';

const DeviceItem = ({ device, onDragStart, selectedId, setSelectedId }) => {
  const DeviceComponent = device.component;
  const [isHovered, setIsHovered] = useState(false);
  const isSelected = selectedId === device.id;

  const handleDragStart = (e) => {
    onDragStart(device);
    console.log('Dragging device:', device);
    e.dataTransfer.effectAllowed = 'copy';
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setSelectedId(device.id)}
      className="flex items-center gap-3 p-3 bg-buttonColor border border-buttonBorder rounded-buttonRadius cursor-grab hover:bg-buttonHover transition-all duration-200 active:cursor-grabbing"
    >
      <DeviceComponent hovered={isHovered} selected={isSelected} />
      <span className="text-base text-text font-normal">{device.name}</span>
    </div>
  );
};

export default DeviceItem;
