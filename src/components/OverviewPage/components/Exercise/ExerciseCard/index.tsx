import styles from "./ExerciseCard.module.scss";

type ExerciseCardProps = {
  img: string;
  title: string;
  duration: number;
  isDone: string;
};

function ExerciseCard({ isDone, img, title, duration }: ExerciseCardProps) {
  return (
    <div className={styles.exerciseCard}>
      <div
        className={
          isDone === "done" ? styles.exerciseImageDone : styles.exerciseImage
        }
      >
        <img src={img} alt="exercise" />
      </div>
      <div className={styles.exerciseInfo}>
        <div className={styles.exerciseInfoTitle}>{title}</div>
        <div className={styles.exerciseInfoDuration}>{duration} sec</div>
      </div>
    </div>
  );
}

export default ExerciseCard;
