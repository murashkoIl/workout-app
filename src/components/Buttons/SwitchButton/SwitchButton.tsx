import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import styles from './SwitchButton.module.scss';

type SwitchButtonProps = {
  type: IconDefinition
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ type }) => {
  return (
    <div className={styles.switchButton}>
      <FontAwesomeIcon icon={type} />
    </div>
  )
}

export default SwitchButton;
