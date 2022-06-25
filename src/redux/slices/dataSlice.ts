import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface DataState {
  exercises: any
}

const initialState: DataState = {
  exercises: {}
}

export const dataSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {
    setExercises: (state, action: PayloadAction<any>) => {
      state.exercises = {...action.payload}
    }
  },
})

// Action creators are generated for each case reducer function
export const { setExercises } = dataSlice.actions

export default dataSlice.reducer
