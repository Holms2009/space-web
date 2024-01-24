import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchPlans } from "../../shared/api";

export const actionFetchPlans = createAsyncThunk('plans/fetchPlans', async () => {
  return await fetchPlans();
})

const plansSlice = createSlice({
  name: 'plans',
  initialState: {
    data: undefined,
    selectedCategory: { name: 'Все', id: 'all' },
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(actionFetchPlans.fulfilled, (state, action) => {
        state.data = { ...action.payload };
      })
  }
})

export const plans = plansSlice.reducer
export const { setSelectedCategory } = plansSlice.actions;