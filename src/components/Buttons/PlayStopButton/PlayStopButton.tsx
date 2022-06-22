import React from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './PlayStopButton.module.scss';

type PlayStopButtonProps = {
  type: IconDefinition
  buttonClick: () => void
}

const PlayStopButton: React.FC<PlayStopButtonProps> = ({ type, buttonClick }) => {
  return (
    <div onClick={buttonClick} className={styles.playStopButton}>
      <FontAwesomeIcon icon={type} />
    </div>
  )
}

export default PlayStopButton;