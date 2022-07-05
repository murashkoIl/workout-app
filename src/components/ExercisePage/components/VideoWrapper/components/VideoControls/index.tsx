import React from "react";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Timer from "../../../../../Timer";
import SwitchButton from "../../../../../Buttons/SwitchButton";
import styles from "./VideoControls.module.scss";

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
  return (
    <>
      <div className="title">{title}</div>

      <div className={styles.controlPanel}>
        <SwitchButton
          render={(e) => handleArrowClick(e)}
          type={faCircleArrowLeft}
        />

        <Timer duration={duration} />

        <SwitchButton
          render={(e) => handleArrowClick(e)}
          type={faCircleArrowRight}
        />
      </div>
    </>
  );
}

export default VideoControls;
