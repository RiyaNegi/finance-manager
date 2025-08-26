// import type { AppThunk, RootState } from "@/app/store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DashboardInitialState, dashboardInitialState } from "../initialState";

// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
export const homeSlice = createSlice({
  name: "home",
  initialState: dashboardInitialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { changeName } = homeSlice.actions;

// Selectors
export const selectName = (state: any) => state.home.name;

// Export the slice reducer for use in the store configuration
export default homeSlice.reducer;
