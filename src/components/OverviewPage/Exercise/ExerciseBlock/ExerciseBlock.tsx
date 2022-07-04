import React from "react";
import { RootState } from "../../../../redux/store";
import ExerciseCard from "../ExerciseCard/ExerciseCard";
import Divider from "../../../Divider/Divider";
import styles from "./ExerciseBlock.module.scss";
import { useAppSelector } from "../../../../redux/hooks/hooks";
import { IExercises, IQuestions } from "../../../../interfaces/DataInterface";
import { IExerciseCard } from "../../../../interfaces/ExerciseCardInterface";

function ExerciseBlock() {
  const exercises = useAppSelector((state: RootState) => state.data.exercises);
  const exercisesCards = useAppSelector(
    (state: RootState) => state.data.exerciseCards
  );

  return (
    <>
      {exercises.data.questions.map((group: IQuestions) => (
        <div key={group.title} className="exerciseGroupWrapper">
          <Divider />
          <div className={styles.exerciseTitle}>{group.title}</div>
          <div className={styles.exerciseCards}>
            {group.exercises.map((item: IExercises) => (
              <ExerciseCard
                key={item.id}
                isDone={
                  item.id ===
                  exercisesCards.find(
                    (el: IExerciseCard) => el.id === item.id && el.isDone
                  )?.id
                    ? "done"
                    : "notDone"
                }
                img={item.photo}
                title={item.title}
                duration={item.duration}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default ExerciseBlock;
