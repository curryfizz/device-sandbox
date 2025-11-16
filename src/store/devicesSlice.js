import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deviceAPI } from "../services/devicesApi";

// Async thunk to fetch devices from the backend
export const fetchDevices = createAsyncThunk(
  "devices/fetchDevices",
  async () => {
    const response = await deviceAPI.getAllDevices(); // GET /api/devices
    return response.data; // assume an array of devices
  }
);

const initialState = {
  list: [],          // all devices fetched from DB
  canvasItem: null,  // currently on-canvas item
  draggedItem: null, // currently dragging item
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
    
      const size = dragged?.settings?.size || 200;
      const x = canvasRect.width / 2 - size / 2;
      const y = canvasRect.height / 2 - size / 2;

      state.canvasItem = { ...dragged, x, y, id: dragged.id || Date.now() };
      state.draggedItem = null;
    },
    clearCanvas: (state) => {
      state.canvasItem = null;
    },
    updateDevice: (state, action) => {
      if (state.canvasItem) {
        state.canvasItem.settings = {
          ...state.canvasItem.settings,
          ...action.payload,
        };
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDevices.fulfilled, (state, action) => {
      state.list = action.payload; // update the device list when fetch succeeds
    });
  },
});

export const {
  startDraggingDevice,
  dropDevice,
  clearCanvas,
  updateDevice,
} = devicesSlice.actions;

export default devicesSlice.reducer;
