import { RootState } from "../../../../../redux/store";
import ExerciseCard from "../ExerciseCard";
import Divider from "../../../../Divider";
import styles from "./ExerciseBlock.module.scss";
import { useAppSelector } from "../../../../../redux/hooks/hooks";
import { IExerciseCard } from "../../../../../interfaces/ExerciseCardInterface";
import {
  IExercises,
  IQuestions,
} from "../../../../../interfaces/DataInterface";

function ExerciseBlock() {
  const exercises = useAppSelector((state: RootState) => state.data.exercises);
  const exercisesCards = useAppSelector(
    // eslint-disable-next-line prettier/prettier
    (state: RootState) => state.data.exerciseCards,
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
                    // eslint-disable-next-line prettier/prettier
                    (el: IExerciseCard) => el.id === item.id && el.isDone,
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
