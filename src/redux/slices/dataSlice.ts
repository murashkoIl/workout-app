/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IData, IQuestions } from "../../interfaces/DataInterface";
import { IExerciseCard } from "../../interfaces/ExerciseCardInterface";

interface DataState {
  exercises: IData | any;
  status: string;
  exerciseCounter: number;
  exerciseCards: IExerciseCard[];
  exercisesDuration: number;
}

const initialState: DataState = {
  exercises: {},
  status: "loading",
  exerciseCounter: 0,
  exerciseCards: [],
  exercisesDuration: 0,
};

export const fetchExercises = createAsyncThunk(
  "exercises/fetchExercises",
  async (url: string) => {
    const { data } = await axios.get(url);
    return data;
  },
);

export const dataSlice = createSlice({
  name: "exercises",
  initialState,
  reducers: {
    setExercises: (state, action: PayloadAction<DataState>) => {
      state.exercises = action.payload;
    },

    setExerciseCards: (state) => {
      state.exercises.data?.questions.forEach((category: IQuestions) => {
        category.exercises.forEach((item: IExerciseCard) => {
          state.exerciseCards = [
            ...state.exerciseCards,
            {
              title: item.title,
              photo: item.photo,
              video: item.video,
              id: item.id,
              duration: item.duration,
              isDone: false,
            },
          ];
        });
      });
    },

    setExercisesDone: (state, action: PayloadAction<number>) => {
      state.exerciseCards.forEach((item: IExerciseCard) => {
        if (item.id === action.payload) {
          item.isDone = true;
        }
      });
    },

    calculateExercisesDuration: (state) => {
      state.exercisesDuration = Math.round(state.exerciseCards.reduce((acc: number, item: IExerciseCard) => {
        return acc + item.duration;
      }, 0) / 60);
    },

    incrementExerciseCounter: (state) => {
      state.exerciseCounter += 1;
    },

    decrementExerciseCounter: (state) => {
      state.exerciseCounter -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExercises.pending, (state) => {
        state.status = "loading";
        state.exercises = {};
      })
      .addCase(
        fetchExercises.fulfilled,
        (state, action: PayloadAction<DataState>) => {
          state.status = "success";
          state.exercises = action.payload;
        },
      )
      .addCase(fetchExercises.rejected, (state) => {
        state.status = "error";
        state.exercises = {};
      });
  },
});

// Action creators are generated for each case reducer function
export const {
  setExercises,
  setExerciseCards,
  decrementExerciseCounter,
  incrementExerciseCounter,
  setExercisesDone,
  calculateExercisesDuration,
} = dataSlice.actions;

export default dataSlice.reducer;
