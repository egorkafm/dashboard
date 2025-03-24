import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../api/types";

interface AuthState {
  user: User | null;
  token: string | null;
}

const userFromStorage = localStorage.getItem("user");
const tokenFromStorage = localStorage.getItem("accessToken");

const initialState: AuthState = {
  user: userFromStorage ? JSON.parse(userFromStorage) : null,
  token: tokenFromStorage || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<{ user: User; token: string }>,
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logoutAction: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { loginSuccess, logoutAction } = authSlice.actions;
export default authSlice.reducer;
