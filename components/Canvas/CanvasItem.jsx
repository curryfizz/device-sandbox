import { useDispatch } from "react-redux";
import {
  updateDevice,
  startDraggingDevice,
} from "../../store/devicesSlice";
import { CANVAS_COMPONENTS, CONTROLLERS } from '../../configs/deviceMappings';

const CanvasItem = ({ item }) => {
  const dispatch = useDispatch();

  const CanvasComponent = CANVAS_COMPONENTS[item.type];
  const ComponentController = CONTROLLERS[item.type];

  if (!CanvasComponent) return <div>Component not found</div>;

  const handleDragStart = () => {
    dispatch(startDraggingDevice(item));
  };

  const handleControllerUpdate = (newSettings) => {
    dispatch(updateDevice(newSettings));
  };

  return (
    <>
      {/* Device */}
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
            {...item.settings}       // spread the rest of the settings
          />
        </div>
      </div>

      {/* Controller */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-50">
        <ComponentController
          controls={{
            props: item.settings ?? {},
            onUpdateItem: handleControllerUpdate,
          }}
        />
      </div>
    </>
  );
};

export default CanvasItem;
