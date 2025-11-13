import { useState } from "react";

export const useDragAndDrop = () => {
  const [canvasItem, setCanvasItem] = useState(null);
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (item) => {
    setDraggedItem(item);
  };

  const handleDrop = (e, canvasRect) => {
    if (!draggedItem) return;

    const x = canvasRect.width / 2 - (draggedItem.canvasComponentProps.size) / 2;
    // const x = e.clientX - canvasRect.left;
    const y = 0;

    const newItem = {
      ...draggedItem,
      x,
      y,
      id: draggedItem.id || Date.now(), // ensure a unique id
    };

    setCanvasItem(newItem);
    setDraggedItem(null);
  };

  const removeItem = () => {
    setCanvasItem(null);
  };

  const clearCanvas = () => {
    setCanvasItem(null);
  };

  const setItem = (item) => {
    setCanvasItem(item);
  };

  return {
    canvasItem,
    draggedItem,
    handleDragStart,
    handleDrop,
    removeItem,
    clearCanvas,
    setItem,
  };
};
