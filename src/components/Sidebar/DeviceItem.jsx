import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startDraggingDevice } from '../../store/devicesSlice';
import { DEVICE_COMPONENTS } from '../../configs/deviceMappings';

const DeviceItem = ({ device, className }) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  // Dynamically get the component for this device type
  const DeviceComponent = device.id ? DEVICE_COMPONENTS[device.type] : null;

  const canvasItem = useSelector(state => state.devices.canvasItem);

  // Check if this device is currently selected on the canvas
  const isSelected = canvasItem && device && canvasItem.name === device.name && canvasItem.id === device.id;

  // Handle starting drag
  const handleDragStart = (e) => {
    dispatch(startDraggingDevice(device));  // set the dragged device in redux
    e.dataTransfer.effectAllowed = 'copy';  // set drag effect
  };

  return (
    <div className="relative">
      {/* Blue dot indicating selection */}
      {isSelected && (
        <div className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 w-[6px] h-[6px] bg-blue-500 rounded-full" />
      )}

      <div
        draggable={!!device.id}                      // Only draggable if device has an ID
        onDragStart={handleDragStart}               // Drag start handler
        onMouseEnter={() => setIsHovered(true)}     // Track hover state
        onMouseLeave={() => setIsHovered(false)}
        className={`
            flex items-center gap-3 p-3 border rounded-buttonRadius
            transition-colors duration-200
            cursor-pointer
            ${isSelected ? 'bg-buttonHover border-buttonBorder' : 'bg-buttonColor border-buttonBorder'}
            ${device.id ? 'hover:bg-buttonHover active:cursor-grabbing' : ''}
            ${className}
        `}
      >
        {/* Render the device icon/component */}
        {DeviceComponent && (
          <DeviceComponent hovered={isHovered} selected={isSelected} />
        )}

        {/* Device name */}
        <span className={`text-base text-text font-normal ${className}`}>
          {device.name || device.type || 'Unnamed Device'}
        </span>
      </div>
    </div>
  );
};

export default DeviceItem;
