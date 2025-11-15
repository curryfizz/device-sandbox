import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  saveModalOpen: false,
  clearModalOpen: false,
  selectedPresetId: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    // Save Modal
    openSaveModal: (state) => {
      state.saveModalOpen = true;
    },
    closeSaveModal: (state) => {
      state.saveModalOpen = false;
    },

    // Clear Modal
    openClearModal: (state) => {
      state.clearModalOpen = true;
    },
    closeClearModal: (state) => {
      state.clearModalOpen = false;
    },

    // Selected preset
    selectPreset: (state, action) => {
      state.selectedPresetId = action.payload;
    },
  },
});

export const {
  openSaveModal,
  closeSaveModal,
  openClearModal,
  closeClearModal,
  selectPreset,
} = uiSlice.actions;

export default uiSlice.reducer;
