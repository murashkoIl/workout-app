import { VideoWrapperProps } from "../../../../Types/types.js";
import Timer from "../../../Timer";
import styles from "./GetReady.module.scss";

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
