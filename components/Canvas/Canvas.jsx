import React, { useRef, useState } from 'react';
import CanvasItem from './CanvasItem';
import { CANVAS_EMPTY_MESSAGE } from '../../utils/constants';
import ClearButton from '../Header/ClearButton';
import SaveButton from '../Header/SaveButton';
import ConfirmClearModal from '../Modals/ConfirmClearModal';

const Canvas = ({ item, onDrop, onDragStart, onRemove, onClear }) => {
  const canvasRef = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e) => {
    e.preventDefault();
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      onDrop(e, rect);
    }
  };

  const openClearModal = () => setModalOpen(true);
  const closeClearModal = () => setModalOpen(false);

  const confirmClear = () => {
    onClear();
    closeClearModal();
  };

  return (
    <div className="flex-1 flex flex-col p-6 gap-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-1 min-h-[38px]">
        <h1 className="text-base font-normal text-text">Testing Canvas</h1>
        {item && (
          <div className="flex gap-1">
            <ClearButton onClick={openClearModal} />
            <SaveButton onClick={() => console.log('Save clicked')} />
          </div>
        )}
      </div>

      {/* Canvas Area */}
      <div
        ref={canvasRef}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`flex-1 border-2 border-border rounded-canvas bg-canvasColor relative overflow-hidden transition-all duration-200 ${
          isModalOpen ? 'filter blur-sm' : ''
        }`}
      >
        {/* Empty State */}
        {!item && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-textSecondary text-base opacity-30 pointer-events-none">
            {CANVAS_EMPTY_MESSAGE}
          </div>
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

      {/* Confirmation Modal */}
      <ConfirmClearModal
        isOpen={isModalOpen}
        onConfirm={confirmClear}
        onCancel={closeClearModal}
        parentRef={canvasRef}
      />
    </div>
  );
};

export default Canvas;
