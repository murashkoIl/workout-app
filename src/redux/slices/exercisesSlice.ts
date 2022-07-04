/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export interface ExercisesState {
  isGetReady: boolean;
}

const initialState: ExercisesState = {
  isGetReady: true,
};

export const exercisesSlice = createSlice({
  name: "pause",
  initialState,
  reducers: {
    setIsGetReady: (state) => {
      state.isGetReady = !state.isGetReady;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsGetReady } = exercisesSlice.actions;

export default exercisesSlice.reducer;
