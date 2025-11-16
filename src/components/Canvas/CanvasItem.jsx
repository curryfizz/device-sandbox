import { useDispatch } from "react-redux";
import { updateDevice } from "../../store/devicesSlice";
import { CANVAS_COMPONENTS, CONTROLLERS } from '../../configs/deviceMappings';

const CanvasItem = ({ item }) => {
  const dispatch = useDispatch();

  const CanvasComponent = CANVAS_COMPONENTS[item.type]; // visual component
  const ComponentController = CONTROLLERS[item.type];   // UI controller
  if (!CanvasComponent) return <div>Component not found</div>;

  // Update device settings via Redux
  const handleControllerUpdate = (newSettings) => {
    dispatch(updateDevice(newSettings));
  };

  // Scale size based on device pixel ratio for display scale based rendering
  const dpr = window.devicePixelRatio || 1;
  const scale = Math.min(1, Math.max(0.85, 1 / dpr));
  const size = item.settings.size * scale;

  return (
    <>
      {/* Render device in canvas */}
      <div
        className="hover:scale-105 transition-transform duration-100 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
      >
        <CanvasComponent {...item.settings} size={size} />
      </div>

      {/* Render controller UI */}
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
