import React, { useState } from 'react';

const DeviceItem = ({ device, onDragStart, selectedId, setSelectedId }) => {
  const DeviceComponent = device.component;
  const [isHovered, setIsHovered] = useState(false);

  const isSelected = selectedId === device.id;

  const handleDragStart = (e) => {
    setSelectedId(device.id); // select on drag
    onDragStart(device);
    e.dataTransfer.effectAllowed = 'copy';
  };

  return (
    <div className="relative"> {/* relative container for absolute dot */}
      {/* Blue dot outside the button */}
      {isSelected && (
        <div className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 w-[6px] h-[6px] bg-blue-500 rounded-full" />
      )}

      <div
        draggable
        onDragStart={handleDragStart}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          flex items-center gap-3 p-3 border rounded-buttonRadius cursor-grab transition-colors duration-200
          ${isSelected ? 'bg-buttonHover border-buttonBorder' : 'bg-buttonColor border-buttonBorder'}
          hover:bg-buttonHover active:cursor-grabbing
        `}
      >
        <DeviceComponent hovered={isHovered} selected={isSelected} />
        <span className="text-base text-text font-normal">{device.name}</span>
      </div>
    </div>
  );
};

export default DeviceItem;
