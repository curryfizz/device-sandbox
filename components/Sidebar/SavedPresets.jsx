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

  const handleLoadPreset = async (preset) => {
    try {
      const result = dispatch(loadPreset(preset.id));
      const presetData = result.payload;

      if (!presetData?.devices?.length) return;

      dispatch(
        setCanvasItem({
          ...presetData.devices[0],
          name: preset.name,
        })
      );
    } catch (err) {
      console.error('Failed to load preset', err);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center mb-4">
        <p className="text-base font-normal text-text gap-4">Saved Presets</p>
      </div>
      {presets?.length ? (
        presets.map((preset) => (
          <div
            key={preset.id}
            onClick={() => handleLoadPreset(preset)}
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
        />
      )}
    </div>
  );
};

export default SavedPresets;
