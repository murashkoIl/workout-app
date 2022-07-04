/* eslint-disable no-nested-ternary */
import styles from "./ExerciseWrapper.module.scss";
import MainButton from "../../../Buttons/MainButton/MainButton";
import { RootState } from "../../../../redux/store";
import ExerciseBlock from "../ExerciseBlock/ExerciseBlock";
import ExerciseSkeleton from "../../../Skeletons/ExerciseSkeleton/ExerciseSkeleton";
import { useAppSelector } from "../../../../redux/hooks/hooks";
import ExercisesFetchingError from "../../../Errors/ExercisesFetchingError/ExercisesFetchingError";

function ExerciseWrapper() {
  const status = useAppSelector((state: RootState) => state.data.status);
  const exerciseCounter = useAppSelector(
    // eslint-disable-next-line prettier/prettier
    (state: RootState) => state.data.exerciseCounter,
  );

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
