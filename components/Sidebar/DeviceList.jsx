import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDevices } from "../../store/devicesSlice";
import DeviceItem from "./DeviceItem";
import { DEVICES } from "../../configs/devicesProps";

const DeviceList = () => {
  const dispatch = useDispatch();
  const devicesFromStore = useSelector((state) => state.devices.list);
  const devices = devicesFromStore?.length ? devicesFromStore : DEVICES;

  useEffect(() => {
    dispatch(fetchDevices());
  }, [dispatch]); // runs only once on mount

  return (
    <div>
      <h3 className="text-base mb-4 text-text font-normal">Devices</h3>
      <div className="flex flex-col gap-3 max-h-[720px] overflow-y-auto">
        {devices.map((device) => (
          <DeviceItem key={device.id} device={device} />
        ))}
      </div>
    </div>
  );
};

export default DeviceList;
