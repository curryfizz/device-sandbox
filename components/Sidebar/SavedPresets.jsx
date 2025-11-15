import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPresets, loadPreset } from '../../store/presetsSlice';
import { setCanvasItem } from '../../store/devicesSlice';
import DeviceItem from './DeviceItem';
import { PRESETS_EMPTY_MESSAGE } from '../../configs/devicesProps';

const SavedPresets = () => {
  const dispatch = useDispatch();
  const presets = useSelector(state => state.presets.list);

  useEffect(() => {
    dispatch(loadPresets());
  }, [dispatch]);


  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center mb-4">
        <p className="text-base font-normal text-text gap-4">Saved Presets</p>
      </div>
      {presets?.length ? (
        presets.map((preset) => (
          <div
            key={preset.id}
          >
            <DeviceItem
              device={{
                id: preset.devices?.[0]?.id || preset.id,
                name: preset.name,
                props: preset.devices?.[0] || {},
              }}
            />
          </div>
        ))
      ) : (
        <DeviceItem
          device={{
            id: null,
            name: PRESETS_EMPTY_MESSAGE,
            props: {},
          }}
          className="bg-transparent border-buttonBorder text-textSecondary text-opacity-30 cursor-not-allowed"
        />
      )}
    </div>
  );
};

export default SavedPresets;
