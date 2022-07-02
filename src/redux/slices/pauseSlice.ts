import { createSlice } from '@reduxjs/toolkit'

export interface PauseState {
  isPause: boolean
}

const initialState: PauseState = {
  isPause: false,
}

export const pauseSlice = createSlice({
  name: 'pause',
  initialState,
  reducers: {
    pauseHandler: (state) => {
      state.isPause = !state.isPause
    },

    setPauseActive: (state) => {
      state.isPause = true;
    },

    setPauseUnActive: (state) => {
      state.isPause = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { pauseHandler, setPauseActive, setPauseUnActive } = pauseSlice.actions

export default pauseSlice.reducer
