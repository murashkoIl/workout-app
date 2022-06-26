import React from 'react'
import styles from './ExerciseWrapper.module.scss';
import MainButton from '../../../Buttons/MainButton/MainButton';
import { RootState } from '../../../../redux/store';
import { useSelector } from 'react-redux';
import ExerciseBlock from '../ExerciseBlock/ExerciseBlock';
import ExerciseSkeleton from '../../../Skeletons/ExerciseSkeleton/ExerciseSkeleton';


const ExerciseWrapper: React.FC = () => {  
  const isLoading = useSelector((state: RootState) => state.data.isDataLoading);   

  return (
    <section className={styles.exerciseWrapperSection}>
      <div className="container">
        <div className={styles.exerciseWrapper}>
          {
            isLoading 
              ? [...new Array(6)].map((_, index) => ( <ExerciseSkeleton key={index} /> )) 
              : <ExerciseBlock />
          }
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