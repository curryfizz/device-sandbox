import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  canvasItem: null,
  draggedItem: null,
};

const devicesSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {
    startDraggingDevice: (state, action) => {
      state.draggedItem = action.payload;
    },
    dropDevice: (state, action) => {
      const { canvasRect } = action.payload;
      const dragged = state.draggedItem;
      if (!dragged) return;

      const size = dragged?.props?.size || 200;
      const x = canvasRect.width / 2 - size / 2;
      const y = canvasRect.height / 2 - size / 2;

      state.canvasItem = { ...dragged, x, y, id: dragged.id || Date.now() };
      state.draggedItem = null;
    },
    removeCanvasItem: (state) => {
      state.canvasItem = null;
    },
    clearCanvas: (state) => {
      state.canvasItem = null;
    },
    setCanvasItem: (state, action) => {
      state.canvasItem = action.payload;
    },

    updateDevice: (state, action) => {
      if (state.canvasItem) {
        state.canvasItem.props = {
          ...state.canvasItem.props,
          ...action.payload,
        };
      }
    },
  },
});

export const {
  selectDevice,
  startDraggingDevice,
  dropDevice,
  removeCanvasItem,
  clearCanvas,
  setCanvasItem,
  updateDevice, // export it
} = devicesSlice.actions;

export default devicesSlice.reducer;
