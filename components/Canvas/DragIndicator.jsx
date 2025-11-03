import React from 'react';
import { DRAG_INDICATOR_MESSAGE } from '../../utils/constants';

const DragIndicator = () => {
  return (
    <div className="absolute left-6 top-6 bg-blue-500 text-white px-5 py-3 rounded-lg text-sm font-medium shadow-lg">
      {DRAG_INDICATOR_MESSAGE}
      <div className="absolute left-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[8px] border-r-blue-500" />
    </div>
  );
};

export default DragIndicator;