import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface DataState {
  exercises: any
  isDataLoading: boolean
}

const initialState: DataState = {
  exercises: {},
  isDataLoading: true
}

export const dataSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {
    setExercises: (state, action: PayloadAction<any>) => {
      state.exercises = {...action.payload}
    },

    setIsDataLoading: (state) => {
      state.isDataLoading = !state.isDataLoading;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setExercises, setIsDataLoading} = dataSlice.actions

export default dataSlice.reducer
