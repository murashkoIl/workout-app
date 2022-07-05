import React from "react";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Timer from "../../../../../Timer";
import SwitchButton from "../../../../../Buttons/SwitchButton";
import styles from "./VideoControls.module.scss";
import { useAppSelector } from "../../../../../../redux/hooks/hooks";
import { RootState } from "../../../../../../redux/store";

type VideoControlsProps = {
  title: string;
  duration: number;
  handleArrowClick: (event: React.MouseEvent<Element, MouseEvent>) => void;
};

function VideoControls({
  title,
  duration,
  handleArrowClick,
}: VideoControlsProps) {
  const exerciseCounter = useAppSelector(
    (state: RootState) => state.data.exerciseCounter,
  );

  return (
    <>
      <div className={styles.title}>{title}</div>

      <div className={styles.controlPanel}>
        {exerciseCounter !== 0 ? (
          <SwitchButton
            render={(e) => handleArrowClick(e)}
            type={faCircleArrowLeft}
          />
        ) : (
          <div className={styles.div} />
        )}

        <Timer color="#04fc43" duration={duration} />

        <SwitchButton
          render={(e) => handleArrowClick(e)}
          type={faCircleArrowRight}
        />
      </div>
    </>
  );
}

export default VideoControls;
