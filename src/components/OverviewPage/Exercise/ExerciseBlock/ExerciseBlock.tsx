import React from 'react'
import { RootState } from '../../../../redux/store';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import Divider from '../../../Divider/Divider';
import styles from './ExerciseBlock.module.scss';
import { useAppSelector } from '../../../../redux/hooks/hooks';
import { IExercises, IQuestions } from '../../../../interfaces/DataInterface';
import { IExerciseCard } from '../../../../interfaces/ExerciseCardInterface';

const ExerciseBlock: React.FC = () => {
  const exercises = useAppSelector((state: RootState) => state.data.exercises);
  const exercisesCards = useAppSelector((state: RootState) => state.data.exerciseCards);
  
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
                if (item.id === exercisesCards.find((el: IExerciseCard) => el.id === item.id && el.isDone)?.id) {
                  return (
                    <div key={item.id} className={styles.exerciseCards}>
                      <h1>DONE</h1>
                      <ExerciseCard id={item.id} img={item.photo} title={item.title} duration={item.duration}/>
                    </div>
                  )
                } else {
                  return (
                    <div key={item.id} className={styles.exerciseCards}>
                      <ExerciseCard id={item.id} img={item.photo} title={item.title} duration={item.duration}/>
                    </div>
                  )
                }
                
              })}
            </div>
          </div>
        )
      })}
    </>
  )
}


export default ExerciseBlock;