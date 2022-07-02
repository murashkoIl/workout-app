import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import styles from './SwitchButton.module.scss';

type SwitchButtonProps = {
  render: (event: React.MouseEvent<Element, MouseEvent>) => void
  type: IconDefinition
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ render, type }) => {
  return (
    <div onClick={(e) => render(e)} className={styles.switchButton}>
      <FontAwesomeIcon icon={type} />
    </div>
  )
}

export default SwitchButton;
