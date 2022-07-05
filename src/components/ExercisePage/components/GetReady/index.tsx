import { IExerciseCard } from "../../../../interfaces/ExerciseCardInterface";
import Timer from "../../../Timer";
import styles from "./GetReady.module.scss";

type VideoWrapperProps = {
  card: IExerciseCard;
};

function GetReady({ card }: VideoWrapperProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{card.title}</div>
      <Timer color="#ff2972" duration={5} />
      <div className={styles.imgWrapper}>
        <img src={card.photo} alt="exercise" />
      </div>
    </div>
  );
}

export default GetReady;
