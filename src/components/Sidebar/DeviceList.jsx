import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDevices } from "../../store/devicesSlice";
import DeviceItem from "./DeviceItem";
import { DEVICES } from "../../configs/devicesProps";

const DeviceList = () => {
  const dispatch = useDispatch();
  const devicesFromStore = useSelector((state) => state.devices.list);

  // Use devices from store if available, otherwise fallback to default DEVICES
  const devices = devicesFromStore?.length ? devicesFromStore : DEVICES;

  // Fetch devices from backend once when component mounts
  useEffect(() => {
    dispatch(fetchDevices());
  }, [dispatch]);

  return (
    <div>
      <h3 className="text-base mb-4 text-text font-normal">Devices</h3>

      {/* Render list of devices */}
      <div className="flex flex-col gap-3">
        {devices.map((device) => (
          <DeviceItem
            key={device.id}
            device={{
              id: device.id,
              type: device.type,
              name: device.name,
              settings: device.settings,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DeviceList;
