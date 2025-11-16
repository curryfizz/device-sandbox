import { useRef, useState } from 'react';
import CanvasItem from './CanvasItem';
import { CANVAS_EMPTY_MESSAGE } from '../../configs/devicesProps';
import GenericButton from '../Buttons/GenericButton';
import SaveButton from '../Buttons/SaveButton';
import ConfirmClearModal from '../Modals/ConfirmClearModal';
import ConfirmSaveModal from '../Modals/ConfirmSaveModal';
import { useDispatch, useSelector } from "react-redux";
import { dropDevice, clearCanvas } from "../../store/devicesSlice";
import { openSaveModal, closeSaveModal, openClearModal, closeClearModal } from "../../store/uiSlice";
import Toast from '../Toasts/Toast';
import { hideToast } from '../../store/toastSlice';
import DragIndicator from './DragIndicator';

const Canvas = () => {
  const dispatch = useDispatch();
  const canvasRef = useRef(null);      // main canvas wrapper
  const canvasItemRef = useRef(null);  // current item on canvas

  const canvasItem = useSelector(state => state.devices.canvasItem);
  const draggedItem = useSelector(state => state.devices.draggedItem);
  const toast = useSelector(state => state.toast);
  const isClearModalOpen = useSelector(state => state.ui.clearModalOpen);
  const isSaveModalOpen = useSelector(state => state.ui.saveModalOpen);

  const [showDragIndicator, setShowDragIndicator] = useState(false);

  const handleDragOver = (e) => e.preventDefault(); // allow dropping

  // Drop dragged device onto canvas
  const handleDrop = (e) => {
    e.preventDefault();
    if (!canvasRef.current || !draggedItem) return;
    const canvasRect = canvasRef.current.getBoundingClientRect();
    dispatch(dropDevice({ canvasRect: { width: canvasRect.width, height: canvasRect.height } }));
  };

  // Clear canvas
  const handleClear = () => {
    dispatch(clearCanvas());
    dispatch(closeClearModal());
  };

  // Save preset placeholder
  const handleSavePreset = () => {
    dispatch(closeSaveModal());
  };

  // Show drag indicator when hovering empty canvas
  const handleShowDragIndicatorOnHover = () => {
    if (!canvasItem) {
      setShowDragIndicator(true);
      setTimeout(() => setShowDragIndicator(false), 3000); // auto-hide after 3s
    } else {
      setShowDragIndicator(false);
    }
  }

  return (
    <div
      className="flex-1 flex flex-col p-6 gap-4"
      onMouseMove={handleShowDragIndicatorOnHover} // track hover
    >
      {showDragIndicator && <DragIndicator />}

      {/* Header */}
      <div className="flex justify-between items-center mb-1 min-h-[38px]">
        <h1 className="text-base font-normal text-text">Testing Canvas</h1>
        {canvasItem && (
          <div className="flex gap-1">
            <GenericButton text='Clear' onClick={() => dispatch(openClearModal())} />
            <SaveButton onClick={() => dispatch(openSaveModal())} />
          </div>
        )}
      </div>

      {/* Canvas Area */}
      <div
        ref={canvasRef}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`flex-1 border-2 border-border rounded-canvas bg-canvasColor relative overflow-hidden transition-all duration-200 
          ${(isClearModalOpen || isSaveModalOpen) ? 'filter blur-sm' : ''}`}
      >
        {!canvasItem && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-textSecondary text-base opacity-30 pointer-events-none">
            {CANVAS_EMPTY_MESSAGE}
          </div>
        )}

        {canvasItem && <CanvasItem ref={canvasItemRef} item={canvasItem} />}

        {toast.visible && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => dispatch(hideToast())}
            className="absolute top-3 left-1/2 -translate-x-1/2"
          />
        )}
      </div>

      {/* Modals */}
      <ConfirmClearModal
        isOpen={isClearModalOpen}
        onConfirm={handleClear}
        onCancel={() => dispatch(closeClearModal())}
        parentRef={canvasRef}
      />
      <ConfirmSaveModal
        isOpen={isSaveModalOpen}
        onCancel={() => dispatch(closeSaveModal())}
        onSavePreset={handleSavePreset}
        itemRef={canvasItemRef}
      />
    </div>
  );
};

export default Canvas;
