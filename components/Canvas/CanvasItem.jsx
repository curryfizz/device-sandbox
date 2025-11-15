import React from "react";
import { useDispatch } from "react-redux";
import {
  updateDevice,
  startDraggingDevice,
} from "../../store/devicesSlice";
import { CANVAS_COMPONENTS, CONTROLLERS } from '../../configs/deviceMappings';

const CanvasItem = ({ item }) => {
  const dispatch = useDispatch();

  const CanvasComponent = CANVAS_COMPONENTS[item.id];
  const ComponentController = CONTROLLERS[item.id];

  if (!CanvasComponent) return <div>Component not found</div>;

  const handleDragStart = () => {
    dispatch(startDraggingDevice(item));
  };

  const handleControllerUpdate = (newProps) => {
    dispatch(updateDevice(newProps)); // no "updates" wrapper
  };


  return (
    <>
      {/* Render the device on canvas */}
      <div
        style={{
          position: "absolute",
          left: item.x,
          top: item.y,
        }}
      >
        <div
          draggable
          onDragStart={handleDragStart}
          className="cursor-move hover:scale-105 transition-transform duration-100 group inline-block"
        >
          <CanvasComponent
            {...item.props}  // item now always comes from Redux
          />
        </div>
      </div>

      {/* Controller UI */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-50">
        <ComponentController
          controls={{
            props: item.props,
            onUpdateItem: handleControllerUpdate,
          }}
        />
      </div>
    </>
  );
};

export default CanvasItem;
