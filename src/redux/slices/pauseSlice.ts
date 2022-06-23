import { createSlice } from '@reduxjs/toolkit'

export interface PauseState {
  isPause: boolean
}

const initialState: PauseState = {
  isPause: true,
}

export const pauseSlice = createSlice({
  name: 'pause',
  initialState,
  reducers: {
    pauseHandler: (state) => {
      state.isPause = !state.isPause
    },
  },
})

// Action creators are generated for each case reducer function
export const { pauseHandler } = pauseSlice.actions

export default pauseSlice.reducer