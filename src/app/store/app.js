import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: 'plans',
  initialState: {
    activeSection: 'vps',
  },
  reducers: {
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    }
  }
})

export const app = appSlice.reducer
export const { setActiveSection } = appSlice.actions;