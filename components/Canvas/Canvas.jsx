import React, { useRef } from 'react';
import CanvasItem from './CanvasItem';
import DragIndicator from './DragIndicator';
import { CANVAS_EMPTY_MESSAGE } from '../../utils/constants';
import ClearButton from '../Header/ClearButton';
import SaveButton from '../Header/SaveButton';

const Canvas = ({ item, onDrop, onDragStart, onRemove, onClear }) => {
  const canvasRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const rect = canvasRef.current.getBoundingClientRect();
    onDrop(e, rect);
  };

  return (
    <div className="flex-1 flex flex-col p-6 gap-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-base font-normal text-text mb-2">Testing Canvas</h1>

        {/* Action Buttons */}
        {item && (
          <div className="flex gap-1">
            <ClearButton onClick={onClear} />
            <SaveButton onClick={() => console.log('Save clicked')} />
          </div>
        )}
      </div>

      {/* Canvas Area */}
      <div
        ref={canvasRef}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="flex-1 border-2 border-border rounded-canvas bg-canvasColor relative inset-5 overflow-hidden"
      >
        {/* Empty State */}
        {!item && (
          <>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-textSecondary text-base opacity-30 pointer-events-none">
              {CANVAS_EMPTY_MESSAGE}
            </div>
            <DragIndicator />
          </>
        )}

        {/* Canvas Item */}
        {item && (
          <CanvasItem
            key={item.id}
            item={item}
            onDragStart={onDragStart}
            onRemove={onRemove}
          />
        )}
      </div>
    </div>
  );
};

export default Canvas;
