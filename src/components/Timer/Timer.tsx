/* eslint-disable prettier/prettier */
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import {
  setTimer,
  timerTick,
  setTimerActive,
  setTimerUnActive,
} from "../../redux/slices/timerSlice";
import { RootState } from "../../redux/store";
import { setIsGetReady } from "../../redux/slices/exercisesSlice";
import {
  incrementExerciseCounter,
  setExercisesDone,
} from "../../redux/slices/dataSlice";

type TimerProps = {
  duration: number;
};

function Timer({ duration }: TimerProps) {
  const { time, isTimerActive } = useAppSelector(
    (state: RootState) => state.timer,
  );
  const isGetReady = useAppSelector(
    (state: RootState) => state.exercises.isGetReady,
  );
  const { exerciseCards, exerciseCounter } = useAppSelector(
    (state: RootState) => state.data,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setTimer(duration));
    dispatch(setTimerActive());

    return () => {
      dispatch(setTimerUnActive());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let interval: any = null;

    if (isTimerActive) {
      interval = setInterval(() => {

        if (time === 1 && duration === 5) {
          dispatch(setIsGetReady());
        }

        if (!isGetReady && time === 1) {
          dispatch(setExercisesDone(exerciseCards[exerciseCounter].id));
          dispatch(incrementExerciseCounter());
          dispatch(setIsGetReady());
        }

        if (isTimerActive && !time) {
          clearInterval(interval);
          return;
        }

        dispatch(timerTick());
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTimerActive, time]);

  return <>Timer {time !== 0 ? time : ""}</>;
}

export default Timer;
