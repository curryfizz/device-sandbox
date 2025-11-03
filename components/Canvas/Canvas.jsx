import React, { useRef } from 'react';
import CanvasItem from './CanvasItem';
import DragIndicator from './DragIndicator';
import { CANVAS_EMPTY_MESSAGE } from '../../utils/constants';
import ClearButton from '../Header/ClearButton';

const Canvas = ({ items, onDrop, onDragStart, onRemove }) => {
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


        <div className="flex gap-2">
          <ClearButton onClick={() => console.log('Clear clicked')} />

        </div>
      </div>

      {/* Canvas Area */}
      <div
        ref={canvasRef}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="flex-1 border-2 border-border rounded-canvas bg-sidebar relative"
      >
        {/* Empty State */}
        {items.length === 0 && (
          <>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-textSecondary text-base pointer-events-none">
              {CANVAS_EMPTY_MESSAGE}
            </div>
            <DragIndicator />
          </>
        )}

        {/* Canvas Items */}
        {items.map(item => (
          <CanvasItem
            key={item.id}
            item={item}
            onDragStart={onDragStart}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default Canvas;