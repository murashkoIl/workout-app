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

type TimerProps = {
  duration: number;
};

function Timer({ duration }: TimerProps) {
  const { time, isTimerActive } = useAppSelector(
    // eslint-disable-next-line prettier/prettier
    (state: RootState) => state.timer,
  );
  const dispatch = useAppDispatch();

  console.log("Timer render");

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
        if (isTimerActive && !time && duration === 5) {
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
