import React from "react";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Timer from "../../../../../Timer";
import SwitchButton from "../../../../../Buttons/SwitchButton";
import styles from "./VideoControls.module.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../redux/hooks/hooks";
import {
  setExercisesDone,
  incrementExerciseCounter,
} from "../../../../../../redux/slices/dataSlice";
import { setTimerStatus } from "../../../../../../redux/slices/timerSlice";
import { setIsGetReady } from "../../../../../../redux/slices/pagesSlice";
import { RootState } from "../../../../../../redux/store";

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
  const dispatch = useAppDispatch();

  const onTimerEnd = (): void => {
    dispatch(setExercisesDone(exerciseCards[exerciseCounter].id));
    dispatch(incrementExerciseCounter());
    dispatch(setIsGetReady());
  };

  const setTimer = (value: boolean): void => {
    dispatch(setTimerStatus(value));
  };

  console.log("video controls render");

  return (
    <>
      <div className={styles.title}>{title}</div>

      <div className={styles.controlPanel}>
        {exerciseCounter !== 0 ? (
          <SwitchButton
            render={(e) => handleArrowClick(e)}
            type={faCircleArrowLeft}
          />
        ) : (
          <div className={styles.div} />
        )}

        <Timer
          isTimerActive={isTimerActive}
          setTimer={(val: boolean) => setTimer(val)}
          onTimerEnd={onTimerEnd}
          color="#1DE9B6"
          duration={duration}
        />

        <SwitchButton
          render={(e) => handleArrowClick(e)}
          type={faCircleArrowRight}
        />
      </div>
    </>
  );
}

export default VideoControls;
