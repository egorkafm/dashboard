import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../api/types";

interface DashboardState {
  users: User[];
}

const initialState: DashboardState = {
  users: [],
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = dashboardSlice.actions;
export default dashboardSlice.reducer;
