import styles from "./ExercisesFetchingError.module.scss";

function ExercisesFetchingError() {
  return (
    <div className={styles.error}>
      <p>Something Went Wrong. Try Again Later!</p>
    </div>
  );
}

export default ExercisesFetchingError;
