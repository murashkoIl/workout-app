import React from 'react'
import { RootState } from '../../../../redux/store';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import Divider from '../../../Divider/Divider';
import styles from './ExerciseBlock.module.scss';
import { useAppSelector } from '../../../../redux/hooks/hooks';
import { IExercises, IQuestions } from '../../../../interfaces/DataInterface';

const ExerciseBlock: React.FC = () => {
  const exercises = useAppSelector((state: RootState) => state.data.exercises);
  
  return (
    <>
      {exercises.data.questions.map((group: IQuestions) => {
        return (
          <div key={group.title} className="exerciseGroupWrapper">
            <Divider />
            <div className={styles.exerciseTitle}>
              {group.title}
            </div>
            <div className={styles.exerciseCards}>
              {group.exercises.map((item: IExercises) => {
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
    </>
  )
}


export default ExerciseBlock;