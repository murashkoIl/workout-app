import React from 'react'
import styles from './ExerciseCard.module.scss';

type ExerciseCardProps = {
  id: number
  img: string,
  title: string,
  duration: number,
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ id, img, title, duration }) => {
  return (
    <div className={styles.exerciseCard}>
      <div className={styles.exerciseImage}>
        <img src={img} alt="exercise" />
      </div>
      <div className={styles.exerciseInfo}>
        <div className={styles.exerciseInfoTitle}>{title}</div>
        <div className={styles.exerciseInfoDuration}>{duration} sec</div>
      </div>
    </div>
  )
}

export default ExerciseCard;