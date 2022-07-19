/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserData } from "interfaces/UserDataInterface";

export interface AuthState {
  currentUser: IUserData | null;
  loading: boolean;
}

const initialState: AuthState = {
  currentUser: null,
  loading: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setCurrentUser: (state, action: PayloadAction<IUserData>) => {
      state.currentUser = action.payload;
    },

    logout: (state) => {
      state.currentUser = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoading, setCurrentUser, logout } = authSlice.actions;

export default authSlice.reducer;
