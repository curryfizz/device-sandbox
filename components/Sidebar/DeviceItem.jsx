import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startDraggingDevice } from '../../store/devicesSlice';
import { DEVICE_COMPONENTS } from '../../configs/deviceMappings';

const DeviceItem = ({ device, className }) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const DeviceComponent = device.id ? DEVICE_COMPONENTS[device.id] : null;
  const canvasItem = useSelector(state => state.devices.canvasItem);

  const isSelected =
    canvasItem && device &&
    canvasItem.name === device.name;

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
        draggable={!!device.id}
        onDragStart={handleDragStart}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
    flex items-center gap-3 p-3 border rounded-buttonRadius
    cursor-${device.id ? 'grab' : 'default'} transition-colors duration-200
    ${isSelected ? 'bg-buttonHover border-buttonBorder' : 'bg-buttonColor border-buttonBorder'}
    ${device.id ? 'hover:bg-buttonHover active:cursor-grabbing' : ''}
    ${className}   /* <-- USER CLASSES LAST */
  `}


      >
        {DeviceComponent && (
          <DeviceComponent hovered={isHovered} selected={isSelected} />
        )}

        <span className={`text-base text-text font-normal ${className}`}>
          {device.name || 'Unnamed Device'}
        </span>
      </div>
    </div>
  );
};

export default DeviceItem;
