import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  saveModalOpen: false, // is Save Modal open
  clearModalOpen: false, // is Clear Modal open
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
  },
});

export const {
  openSaveModal,
  closeSaveModal,
  openClearModal,
  closeClearModal,
} = uiSlice.actions;

export default uiSlice.reducer;
