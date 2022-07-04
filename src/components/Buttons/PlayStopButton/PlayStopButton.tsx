/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./PlayStopButton.module.scss";

type PlayStopButtonProps = {
  type: IconDefinition;
  buttonClick: () => void;
};

function PlayStopButton({ type, buttonClick }: PlayStopButtonProps) {
  return (
    <div onClick={buttonClick} className={styles.playStopButton}>
      <FontAwesomeIcon icon={type} />
    </div>
  );
}

export default PlayStopButton;
