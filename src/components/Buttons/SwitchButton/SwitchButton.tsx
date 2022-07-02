import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import styles from './SwitchButton.module.scss';

type SwitchButtonProps = {
  render: () => void
  type: IconDefinition
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ render, type }) => {
  return (
    <div onClick={render} className={styles.switchButton}>
      <FontAwesomeIcon icon={type} />
    </div>
  )
}

export default SwitchButton;
