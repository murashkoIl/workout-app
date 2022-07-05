/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import styles from "./SwitchButton.module.scss";

type SwitchButtonProps = {
  render: (event: React.MouseEvent<Element, MouseEvent>) => void;
  type: IconDefinition;
};

// prevent default

function SwitchButton({ render, type }: SwitchButtonProps) {
  return (
    <div onClick={(e) => render(e)} className={styles.switchButton}>
      <FontAwesomeIcon icon={type} />
    </div>
  );
}

export default SwitchButton;
