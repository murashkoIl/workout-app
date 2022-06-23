import React from 'react'
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import styles from './ExerciseWrapper.module.scss';
import MainButton from '../../../Buttons/MainButton/MainButton';
import Divider from '../../../Divider/Divider';
import { OverviewProps } from '../../OverviewPage';


const ExerciseWrapper: React.FC<OverviewProps> = ({ warmUp, exercise, stretching }) => {  
  return (
    <section className={styles.exerciseWrapperSection}>
      <div className="container">
        <Divider />
        <div className={styles.exerciseWrapper}>
          <div className={styles.exerciseTitle}>
            Warm Up 
          </div>

          <div className={styles.exerciseCards}>
            {warmUp?.exercises.map((item: any) => {
              return <ExerciseCard key={item.id} img={item.photo} title={item.title} duration={item.duration}/>
            })}
          </div>

          <Divider />

          <div className={styles.exerciseTitle}>
            Exercise
          </div>

          <div className={styles.exerciseCards}>
            {exercise?.exercises.map((item: any) => {
              return <ExerciseCard key={item.id} img={item.photo} title={item.title} duration={item.duration}/>
            })}
          </div>

          <Divider />

          <div className={styles.exerciseTitle}>
            Stretching
          </div>

          <div className={styles.exerciseCards}>
            {stretching?.exercises.map((item: any) => {
              return <ExerciseCard key={item.id} img={item.photo} title={item.title} duration={item.duration}/>
            })}
          </div>

        </div>
        <div className={styles.buttonWrapper}>
          <div className={styles.button}>
            <MainButton text="Start Workout" linkTo="/exercises"/>
          </div>
        </div>
      </div>
    </section>
  )
}


export default ExerciseWrapper;