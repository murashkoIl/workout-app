/* eslint-disable no-nested-ternary */
import { useEffect } from "react";
import { RootState } from "redux/store";
import { setIsGetReady } from "redux/slices/pagesSlice";
import { setPauseUnActive } from "redux/slices/pauseSlice";
import { useAppSelector, useAppDispatch } from "redux/hooks/hooks";
import MainButton from "components/Buttons/MainButton";
import ExerciseSkeleton from "components/ExerciseSkeleton";
import ExercisesFetchingError from "components/ExercisesFetchingError";
import ExerciseBlock from "../ExerciseBlock";
import styles from "./ExerciseWrapper.module.scss";

function ExerciseWrapper() {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state: RootState) => state.data.status);
  const exerciseCounter = useAppSelector(
    (state: RootState) => state.data.exerciseCounter,
  );

  useEffect(() => {
    dispatch(setIsGetReady());
    dispatch(setPauseUnActive());
  }, [dispatch]);

  return (
    <section className={styles.exerciseWrapperSection}>
      <div className="container">
        <div className={styles.exerciseWrapper}>
          {status === "error" ? (
            <ExercisesFetchingError />
          ) : status === "loading" ? (
            [...new Array(6)].map((_, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <ExerciseSkeleton key={index} />
            ))
          ) : (
            <ExerciseBlock />
          )}
        </div>

        <div className={styles.buttonWrapper}>
          <div className={styles.button}>
            <MainButton
              text={exerciseCounter ? "Resume" : "Start Workout"}
              linkTo="/exercises"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExerciseWrapper;
