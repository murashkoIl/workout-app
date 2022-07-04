import MainButton from "../../../../Buttons/MainButton/MainButton";
import styles from "./Pause.module.scss";

function Pause() {
  return (
    <div className={styles.pauseWrapper}>
      <div className={styles.pauseTitle}>Workout paused</div>
      <div className="pauseDescription">
        Press “Play button” or “Space bar” to continue
      </div>
      <div className={styles.pauseLeaveButton}>
        <MainButton text="Leave Workout" linkTo="/" />
      </div>
    </div>
  );
}

export default Pause;