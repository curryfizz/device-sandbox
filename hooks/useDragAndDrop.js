import { useState } from "react";

export const useDragAndDrop = () => {
  const [canvasItems, setCanvasItems] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (item) => {
    setDraggedItem(item);
  };

  const handleDrop = (e, canvasRect) => {
    if (!draggedItem) return;

    const x = e.clientX - canvasRect.left;
    const y = e.clientY - canvasRect.top;

    const centerX = canvasRect.width / 2;
    const centerY = canvasRect.height / 2;


    const existingItem = canvasItems.find((i) => i.id === draggedItem.id);

    if (existingItem) {
      setCanvasItems(
        canvasItems.map((item) =>
          item.id === draggedItem.id
            ? { ...item, x: centerX, y: centerY }
            : item
        )
      );
    } else {
      // Add new item to canvas
      const newItem = {
        ...draggedItem,
        id: `${draggedItem.id}-${Date.now()}`,
        x: centerX,
        y: centerY,
      };
      setCanvasItems([...canvasItems, newItem]);
    }

    setDraggedItem(null);
  };

  const removeItem = (itemId) => {
    setCanvasItems(canvasItems.filter((item) => item.id !== itemId));
  };

  const clearCanvas = () => {
    setCanvasItems([]);
  };

  const setItems = (items) => {
    setCanvasItems(items);
  };

  return {
    canvasItems,
    draggedItem,
    handleDragStart,
    handleDrop,
    removeItem,
    clearCanvas,
    setItems,
  };
};
