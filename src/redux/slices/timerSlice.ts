/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TimerState {
  time: number;
  isTimerActive: boolean;
}

const initialState: TimerState = {
  time: 0,
  isTimerActive: true,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setTimer: (state, action: PayloadAction<number>) => {
      state.time = action.payload;
    },

    timerTick: (state) => {
      state.time -= 1;
    },

    setTimerActive: (state) => {
      state.isTimerActive = true;
    },

    setTimerUnActive: (state) => {
      state.isTimerActive = false;
    },

    setTimerStatus: (state, action: PayloadAction<boolean>) => {
      state.isTimerActive = action.payload;
    },

    toggleActive: (state) => {
      state.isTimerActive = !state.isTimerActive;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setTimer,
  timerTick,
  setTimerActive,
  setTimerUnActive,
  toggleActive,
  setTimerStatus,
} = timerSlice.actions;

export default timerSlice.reducer;
