import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deviceAPI } from "../services/devicesApi";

// Fetch devices from backend
export const fetchDevices = createAsyncThunk(
  "devices/fetchDevices",
  async () => {
    const response = await deviceAPI.getAllDevices();
    return response.data; // array of devices
  }
);

const initialState = {
  list: [], // all devices
  canvasItem: null, // currently on-canvas
  draggedItem: null, // being dragged
};

const devicesSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {
    startDraggingDevice: (state, action) => {
      state.draggedItem = action.payload; // start drag
    },
    dropDevice: (state) => {
      if (!state.draggedItem) return;
      state.canvasItem = {
        ...state.draggedItem,
        id: state.draggedItem.id || Date.now(),
      };
      state.draggedItem = null; // reset drag
    },
    clearCanvas: (state) => {
      state.canvasItem = null;
    },
    updateDevice: (state, action) => {
      if (state.canvasItem)
        state.canvasItem.settings = {
          ...state.canvasItem.settings,
          ...action.payload,
        };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDevices.fulfilled, (state, action) => {
      state.list = action.payload; // set device list
    });
  },
});

export const { startDraggingDevice, dropDevice, clearCanvas, updateDevice } =
  devicesSlice.actions;
export default devicesSlice.reducer;
