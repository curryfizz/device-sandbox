import React from 'react';
import DeviceItem from './DeviceItem';
import { DEVICES } from '../../configs/devicesProps';

const DeviceList = () => {
  return (
    <div>
      <h3 className="text-base mb-4 text-text font-normal">Devices</h3>
      <div className="flex flex-col gap-3">
        {DEVICES.map(device => (
          <DeviceItem key={device.id} device={device} />
        ))}
      </div>
    </div>
  );
};

export default DeviceList;
