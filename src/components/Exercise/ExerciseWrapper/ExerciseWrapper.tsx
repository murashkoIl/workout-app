import React from 'react'
import ExerciseCard from '../ExerciseCard/ExerciseCards';
import styles from './ExerciseWrapper.module.scss';

const ExerciseWrapper: React.FC = () => {
  return (
    <section className={styles.exerciseWrapperSection}>
      <div className="container">
        <div className={styles.exerciseWrapper}>
          <div className={styles.exerciseTitle}>
            Warm Up
          </div>
          <div className={styles.exerciseCards}>
            <ExerciseCard />
            <ExerciseCard />
            <ExerciseCard />
            <ExerciseCard />
            <ExerciseCard />
          </div>
        </div>
      </div>
    </section>
  )
}


export default ExerciseWrapper;