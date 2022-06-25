import React from 'react'
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import styles from './ExerciseWrapper.module.scss';
import MainButton from '../../../Buttons/MainButton/MainButton';
import Divider from '../../../Divider/Divider';
import ExerciseSkeleton from '../../../Skeletons/ExerciseSkeleton/ExerciseSkeleton';
import { RootState } from '../../../../redux/store';
import { useSelector } from 'react-redux';


const ExerciseWrapper: React.FC = () => {  

  const exercises = useSelector((state: RootState) => state.data.exercises);
  console.log('exercises = ', exercises);
  

  return (
    <section className={styles.exerciseWrapperSection}>
      <div className="container">
        <div className={styles.exerciseWrapper}>
          {exercises.data?.questions.map((group: any) => {
            return (
              <div key={group.title} className="exerciseGroupWrapper">
                <Divider />
                <div className={styles.exerciseTitle}>
                  {group.title}
                </div>
                <div className={styles.exerciseCards}>
                  {group.exercises.map((item: any) => {
                    return (
                      <div key={item.id} className={styles.exerciseCards}>
                        <ExerciseCard img={item.photo} title={item.title} duration={item.duration}/>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
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