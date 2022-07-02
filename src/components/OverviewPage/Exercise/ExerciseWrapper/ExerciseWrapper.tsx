/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import styles from './ExerciseWrapper.module.scss';
import MainButton from '../../../Buttons/MainButton/MainButton';
import { RootState } from '../../../../redux/store';
import ExerciseBlock from '../ExerciseBlock/ExerciseBlock';
import ExerciseSkeleton from '../../../Skeletons/ExerciseSkeleton/ExerciseSkeleton';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hooks';
import { fetchExercises, setExerciseCards } from '../../../../redux/slices/dataSlice';
import ExercisesFetchingError from '../../../Errors/ExercisesFetchingError/ExercisesFetchingError';
import { url } from '../../../../shared/consts';


const ExerciseWrapper: React.FC = () => {  
  const dispatch = useAppDispatch();
  const status = useAppSelector((state: RootState) => state.data.status);

  useEffect(() => {
    dispatch(fetchExercises(url))
      .then(()=>{
        dispatch(setExerciseCards());
      })
      .catch(err => alert(err));
  }, []); 
  
  return (
    <section className={styles.exerciseWrapperSection}>
      <div className="container">
        <div className={styles.exerciseWrapper}>
          {
            status === 'error' 
              ? <ExercisesFetchingError />
              : status === 'loading' 
                  ? [...new Array(6)].map((_, index) => <ExerciseSkeleton key={index} /> ) 
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