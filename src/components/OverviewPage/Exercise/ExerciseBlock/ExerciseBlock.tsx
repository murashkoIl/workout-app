import React from 'react'
import { RootState } from '../../../../redux/store';
import { useSelector } from 'react-redux';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import Divider from '../../../Divider/Divider';
import styles from './ExerciseBlock.module.scss';

const ExerciseBlock: React.FC = () => {
  const exercises = useSelector((state: RootState) => state.data.exercises);

  return (
    <>
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
    </>
  )
}


export default ExerciseBlock;