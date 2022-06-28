import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IData } from '../../interfaces/DataInterface';

interface DataState {
  exercises: IData | any;
  status: string
}

const initialState: DataState = {
  exercises: {},
  status: 'loading'
}

export const fetchExercises = createAsyncThunk(
  'exercises/fetchExercises', async (url: string) => {
    const { data } = await axios.get(url);    
    return data;
  }
)

export const dataSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {
    setExercises: (state, action: PayloadAction<DataState>) => {
      state.exercises = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExercises.pending, (state) => {
        state.status = 'loading';
        state.exercises = {};
      })
      .addCase(fetchExercises.fulfilled, (state, action: PayloadAction<DataState>) => {
        state.status = 'success';
        state.exercises = action.payload;
      })
      .addCase(fetchExercises.rejected, (state) => {
        state.status = 'error';
        state.exercises = {};
      })
  },
})

// Action creators are generated for each case reducer function
export const { setExercises } = dataSlice.actions

export default dataSlice.reducer
