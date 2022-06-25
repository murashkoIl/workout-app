import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TimerState {
  time: number
  isTimerActive: boolean
}

const initialState: TimerState = {
  time: 0,
  isTimerActive: false
}

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setTimer: (state, action: PayloadAction<number>) => {
      state.time = action.payload;
    },

    timerTick: (state) => {
      state.time -= 1;
    },

    toggleActive: (state) => {
      state.isTimerActive = !state.isTimerActive
    }
  },
})

// Action creators are generated for each case reducer function
export const { setTimer, timerTick, toggleActive } = timerSlice.actions

export default timerSlice.reducer
