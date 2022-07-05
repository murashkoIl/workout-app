/* eslint-disable prettier/prettier */
import { createRef, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import {
  setTimer,
  timerTick,
  setTimerActive,
  setTimerUnActive,
} from "../../redux/slices/timerSlice";
import { RootState } from "../../redux/store";
import { setIsGetReady, setNotGetReady } from "../../redux/slices/pagesSlice";
import {
  incrementExerciseCounter,
  setExercisesDone,
} from "../../redux/slices/dataSlice";
import styles from "./Timer.module.scss";

type TimerProps = {
  duration: number;
  color: string
};

function Timer({ duration, color }: TimerProps) {
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
  const timerRef = createRef<any>();

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
    
    timerRef.current.style.strokeDashoffset = 380 + (380 * (60 / duration) * time) / 60;
    timerRef.current.style.stroke = color;

    if (isTimerActive) {
      interval = setInterval(() => {
        if (time === 1 && duration === 5) {
          dispatch(setNotGetReady());
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

  return (
    <div id={styles.time}>
      <div className={styles.circle}>
        <svg>
          <circle cx="60" cy="60" r="60" />
          <circle ref={timerRef} className={styles.ss} cx="60" cy="60" r="60" />
        </svg>
        <div id={styles.seconds}>{time !== 0 ? time : ""}</div>
      </div>
    </div>
  );
}

export default Timer;
