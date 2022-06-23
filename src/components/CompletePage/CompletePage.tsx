import React from 'react'
import styles from './CompletePage.module.scss';
import MainButton from '../Buttons/MainButton/MainButton';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type CompletePageProps = {
  type: IconDefinition
  minutes: number
}

const CompletePage: React.FC<CompletePageProps> = ({ type, minutes }) => {
  return (
    <div className={styles.completeWrapper}>
      <div className="container">
        <div className={styles.completeIcon}>
          <FontAwesomeIcon icon={type} />
        </div>
        <div className={styles.completeTitle}>Workout completed!</div>
        <div className={styles.completeDescription}>Nice job. You’re done. Here’s the workout summary.</div>
        <div className="completeMinutes">
          <div className="completeMinutesTitle">Minutes</div>
          <div className={styles.completeMinutesCount}>{minutes}</div>
        </div>
        <div className={styles.completeSaveButton}>
          <MainButton text="Save & Continue" linkTo="/" />
        </div>
      </div>
    </div>
  )
}


export default CompletePage;