/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import styles from "./ExerciseCard.module.scss";

type ExerciseCardProps = {
  img: string;
  title: string;
  duration: number;
  isDone: string;
  id: number;
  handleClick: (id: number) => void;
};

function ExerciseCard({
  isDone,
  img,
  title,
  duration,
  id,
  handleClick,
}: ExerciseCardProps) {
  return (
    <div className={styles.exerciseCard}>
      <div
        onClick={() => handleClick(id)}
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
