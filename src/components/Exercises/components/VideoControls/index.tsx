import React from "react";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "redux/hooks/hooks";
import { setTimerStatus } from "redux/slices/timerSlice";
import { setIsGetReady } from "redux/slices/pagesSlice";
import { RootState } from "redux/store";
import {
  setExercisesDone,
  incrementExerciseCounter,
} from "redux/slices/dataSlice";
import Timer from "components/Timer";
import MemoizedSwitchButton from "components/Buttons/SwitchButton";
import styles from "./VideoControls.module.scss";

type VideoControlsProps = {
  title: string;
  duration: number;
  handleArrowClick: (event: React.MouseEvent<Element, MouseEvent>) => void;
};

function VideoControls({
  title,
  duration,
  handleArrowClick,
}: VideoControlsProps) {
  const { exerciseCards, exerciseCounter } = useAppSelector(
    (state: RootState) => state.data,
  );
  const isTimerActive = useAppSelector(
    (state: RootState) => state.timer.isTimerActive,
  );
  const isGetReady = useAppSelector(
    (state: RootState) => state.exercises.isGetReady,
  );
  const dispatch = useAppDispatch();

  const onTimerEnd = (): void => {
    dispatch(setExercisesDone(exerciseCards[exerciseCounter].id));
    dispatch(incrementExerciseCounter());
    dispatch(setIsGetReady());
  };

  const setTimer = (value: boolean): void => {
    dispatch(setTimerStatus(value));
  };

  return (
    <>
      <div className={styles.title}>{title}</div>

      <div className={styles.controlPanel}>
        {exerciseCounter !== 0 ? (
          <MemoizedSwitchButton
            render={handleArrowClick}
            type={faCircleArrowLeft}
          />
        ) : (
          <div className={styles.div} />
        )}

        <Timer
          isTimerActive={isTimerActive}
          setTimer={(val: boolean) => setTimer(val)}
          isGetReady={isGetReady}
          onTimerEnd={onTimerEnd}
          color="#1DE9B6"
          duration={duration}
        />

        <MemoizedSwitchButton
          render={handleArrowClick}
          type={faCircleArrowRight}
        />
      </div>
    </>
  );
}

export default VideoControls;
