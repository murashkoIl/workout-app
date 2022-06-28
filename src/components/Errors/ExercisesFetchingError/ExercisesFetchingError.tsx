import React from 'react';
import styles from './ExercisesFetchingError.module.scss';

const ExercisesFetchingError: React.FC = () => {
  return (
    <div className={styles.error}>
      <p>Something Went Wrong. Try Again Later!</p>
    </div>
  )
}


export default ExercisesFetchingError;