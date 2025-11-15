import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  startDraggingDevice,
} from '../../store/devicesSlice';
import { DEVICE_COMPONENTS } from '../../configs/deviceMappings';

const DeviceItem = ({ device }) => {
  const dispatch = useDispatch();

  const [isHovered, setIsHovered] = useState(false);

  const selectedId = useSelector(state => state.devices.selectedId);
  const isSelected = selectedId === device.id;

  const DeviceComponent = DEVICE_COMPONENTS[device.id];

  const handleDragStart = (e) => {
    dispatch(startDraggingDevice(device));     
    e.dataTransfer.effectAllowed = 'copy';
  };

  return (
    <div className="relative">
      {/* Blue selection dot */}
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
