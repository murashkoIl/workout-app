import { useAppDispatch, useAppSelector } from "redux/hooks/hooks";
import { setNotGetReady } from "redux/slices/pagesSlice";
import { setTimerStatus } from "redux/slices/timerSlice";
import { RootState } from "redux/store";
import { IExerciseCard } from "interfaces/ExerciseCardInterface";
import Timer from "components/Timer";
import styles from "./GetReady.module.scss";

type VideoWrapperProps = {
  card: IExerciseCard;
};

function GetReady({ card }: VideoWrapperProps) {
  const isTimerActive = useAppSelector(
    (state: RootState) => state.timer.isTimerActive,
  );
  const isGetReady = useAppSelector(
    (state: RootState) => state.exercises.isGetReady,
  );
  const dispatch = useAppDispatch();

  const onTimerEnd = (): void => {
    dispatch(setNotGetReady());
  };

  const setTimer = (value: boolean): void => {
    dispatch(setTimerStatus(value));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{card.title}</div>
      <Timer
        isTimerActive={isTimerActive}
        setTimer={(val: boolean) => setTimer(val)}
        isGetReady={isGetReady}
        onTimerEnd={onTimerEnd}
        color="#ff2972"
        duration={5}
      />
      <div className={styles.imgWrapper}>
        <img src={card.photo} alt="exercise" />
      </div>
    </div>
  );
}

export default GetReady;
