import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  type: 'success', // success | error
  visible: false,  // is toast visible
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast: (state, action) => {
      const { message, type } = action.payload;
      state.message = message;         // set message
      state.type = type || 'success';  // set type
      state.visible = true;            // show toast
    },
    hideToast: (state) => {
      state.visible = false;           // hide toast
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
