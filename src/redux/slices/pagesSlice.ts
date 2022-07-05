/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export interface PagesState {
  isGetReady: boolean;
}

const initialState: PagesState = {
  isGetReady: true,
};

export const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    setIsGetReady: (state) => {
      state.isGetReady = true;
    },

    setNotGetReady: (state) => {
      state.isGetReady = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsGetReady, setNotGetReady } = pagesSlice.actions;

export default pagesSlice.reducer;
