import React from 'react'
import styles from './ExerciseCard.module.scss';
import exercise from '../../../images/exercise-1.jpeg';

const ExerciseCard: React.FC = () => {
  return (
    <div className={styles.exerciseCard}>
      <div className={styles.exerciseImage}>
        <img src={exercise} alt="exercise" />
      </div>
      <div className={styles.exerciseInfo}>
        <div className={styles.exerciseInfoTitle}>High Kicks</div>
        <div className={styles.exerciseInfoDuration}>20 sec</div>
      </div>
    </div>
  )
}

export default ExerciseCard;