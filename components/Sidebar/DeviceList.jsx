import React, { useState } from 'react';
import DeviceItem from './DeviceItem';
import { DEVICES } from '../../utils/constants';

const DeviceList = ({ onDragStart }) => {
  const [selectedDevice, setSelectedDevice] = useState(null);

  return (
    <div>
      <h3 className="text-base mb-4 text-text font-normal ">Devices</h3>
      <div className="flex flex-col gap-3">
        {DEVICES.map(device => (
          <DeviceItem
            key={device.id}
            device={device}
            onDragStart={onDragStart}
            selectedId={selectedDevice}
            setSelectedId={setSelectedDevice}
          />
        ))}
      </div>
    </div>
  );
};

export default DeviceList;