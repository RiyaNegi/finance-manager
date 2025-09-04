import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialAuthState } from "../initialState";
import { RootState } from "../store";

export const loginUser = createAsyncThunk<
  { user: { id: number; username: string; name: string } },
  { username: string; password: string },
  { rejectValue: string }
>("auth/loginUser", async (credentials, { rejectWithValue }) => {
  try {
    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Important: Include cookies in request
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      return rejectWithValue("Invalid username or password");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    return rejectWithValue("Network error");
  }
});

export const logoutUser = createAsyncThunk<void, void, { rejectValue: string }>(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3001/logout", {
        method: "POST",
        credentials: "include", // Include cookies in request
      });

      if (!response.ok) {
        return rejectWithValue("Logout failed");
      }
    } catch (err) {
      return rejectWithValue("Network error during logout");
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (
          state,
          action: PayloadAction<{
            user: { id: number; username: string; name: string };
          }>
        ) => {
          state.loading = false;
          state.user = action.payload.user;
          state.error = null;
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to login";
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to logout";
      });
  },
});
export const { logout } = authSlice.actions;

// Selectors
export const selectAuth = (state: RootState) => state.auth;
export const userId = (state: RootState) => state.auth.user?.id;

// Export the slice reducer for use in the store configuration
export default authSlice.reducer;
