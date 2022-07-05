import { IExerciseCard } from "../../../../interfaces/ExerciseCardInterface";
import Timer from "../../../Timer";
import styles from "./GetReady.module.scss";

type VideoWrapperProps = {
  card: IExerciseCard;
};

function GetReady({ card }: VideoWrapperProps) {
  return (
    <div>
      <div className="title">{card.title}</div>
      <Timer duration={5} />
      <div className={styles.imgWrapper}>
        <img src={card.photo} alt="exercise" />
      </div>
    </div>
  );
}

export default GetReady;
