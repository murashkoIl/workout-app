import React, { useState } from 'react'
import ExerciseCard from '../ExerciseCard/ExerciseCards';
import styles from './ExerciseWrapper.module.scss';
import { IExerciseCard } from '../../../../interfaces/ExerciseCardInterface';
import Button from '../../../Buttons/MainButton/MainButton';

///
import exercise from '../../../../images/exercise-1.jpeg';
import Divider from '../../../Divider/Divider';
///

const ExerciseWrapper: React.FC = () => {

  const [exercises, setExercises] = useState<IExerciseCard[]>([]);

  console.log(exercises);
  

  return (
    <section className={styles.exerciseWrapperSection}>
      <div className="container">
        <Divider />
        <div className={styles.exerciseWrapper}>
          <div className={styles.exerciseTitle}>
            Warm Up
          </div>
          <div className={styles.exerciseCards}>
            <ExerciseCard img={exercise} title={'High Kicks'} duration={'20 sec'}/>
            <ExerciseCard img={exercise} title={'High Kicks'} duration={'20 sec'}/>
            <ExerciseCard img={exercise} title={'High Kicks'} duration={'20 sec'}/>
            <ExerciseCard img={exercise} title={'High Kicks'} duration={'20 sec'}/>
            <ExerciseCard img={exercise} title={'High Kicks'} duration={'20 sec'}/>
          </div>
          <Divider />
          <div className={styles.exerciseTitle}>
            Exercise
          </div>
          <div className={styles.exerciseCards}>
            <ExerciseCard img={exercise} title={'Exercise'} duration={'20 sec'}/>
            <ExerciseCard img={exercise} title={'Exercise'} duration={'20 sec'}/>
            <ExerciseCard img={exercise} title={'Exercise'} duration={'20 sec'}/>
          </div>
          <Divider />
          <div className={styles.exerciseTitle}>
            Stretching
          </div>
          <div className={styles.exerciseCards}>
            <ExerciseCard img={exercise} title={'Stretching'} duration={'20 sec'}/>
            <ExerciseCard img={exercise} title={'Stretching'} duration={'20 sec'}/>
            <ExerciseCard img={exercise} title={'Stretching'} duration={'20 sec'}/>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <div className={styles.button}>
            <Button text="Start Workout" linkTo="/exercises"/>
          </div>
        </div>
      </div>
    </section>
  )
}


export default ExerciseWrapper;