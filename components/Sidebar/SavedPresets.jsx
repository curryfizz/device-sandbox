import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPresets } from '../../store/presetsSlice';
import DeviceItem from './DeviceItem';
import { PRESETS_EMPTY_MESSAGE } from '../../configs/devicesProps';

const SavedPresets = () => {
  const dispatch = useDispatch();
  const presets = useSelector(state => state.presets.list);

  useEffect(() => {
    dispatch(loadPresets());
  }, [dispatch]);

  return (
    <div>
      <h3 className="text-base mb-4 text-text font-normal">Saved Presets</h3>
      <div className="flex flex-col gap-3 max-h-[720px]">
        {presets?.length ? (
          presets.map((preset) => (
            <DeviceItem
              key={preset.id}
              device={{
                id: preset.id,
                type: preset.devices?.[0].type,
                name: preset.name,
                settings: preset.devices?.[0].settings || {},
              }}
            />

          ))
        ) : (
          <DeviceItem
            device={{
              id: null,
              name: PRESETS_EMPTY_MESSAGE,
              settings: {},
            }}
            className="bg-transparent border-buttonBorder text-textSecondary text-opacity-30 cursor-not-allowed"
          />
        )}
      </div>
    </div>
  );
};

export default SavedPresets;
