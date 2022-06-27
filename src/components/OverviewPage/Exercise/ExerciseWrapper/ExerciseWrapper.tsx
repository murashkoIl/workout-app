/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import styles from './ExerciseWrapper.module.scss';
import MainButton from '../../../Buttons/MainButton/MainButton';
import { RootState } from '../../../../redux/store';
import ExerciseBlock from '../ExerciseBlock/ExerciseBlock';
import ExerciseSkeleton from '../../../Skeletons/ExerciseSkeleton/ExerciseSkeleton';
import { IVideos } from '../../../../interfaces/VideosInterface';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hooks';
import { fetchExercises } from '../../../../redux/slices/dataSlice';


const ExerciseWrapper: React.FC = () => {  
  const API_TOKEN = '4bfcebd0-0216-4572-bdb7-939e9600b9b2';
  const BASE_URL = `https://rnd.kilohealthservices.com/api/quizzes/workouts?api_token=${API_TOKEN}`;
  const dispatch = useAppDispatch();
  const status = useAppSelector((state: RootState) => state.data.status);
  // const [videos, setVideos] = useState<IVideos[]>([]);
  
  const getExercises = async () => {
    dispatch(fetchExercises(BASE_URL));

    // data.data.questions.forEach((category: any) => {
    //   category.exercises.forEach((exercise: any) => {
    //     const temp = {
    //       id: exercise.id,
    //       video: exercise.video,
    //       photo: exercise.photo
    //     }
    //     setVideos((videos) => [...videos, temp]);
    //   })
    // })
  }

  useEffect(() => {
    getExercises();
  }, []); 

  console.log('wrapper render');
  
  return (
    <section className={styles.exerciseWrapperSection}>
      <div className="container">
        <div className={styles.exerciseWrapper}>
          {
            status === 'loading' 
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