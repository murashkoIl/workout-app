import { RootState } from "redux/store";
import { useAppDispatch, useAppSelector } from "redux/hooks/hooks";
import { IExerciseCard } from "interfaces/ExerciseCardInterface";
import { IExercises, IQuestions } from "interfaces/DataInterface";
import { setExerciseCounter } from "redux/slices/dataSlice";
import Divider from "components/Divider";
import ExerciseCard from "../ExerciseCard";
import styles from "./ExerciseBlock.module.scss";

function ExerciseBlock() {
  const exercises = useAppSelector((state: RootState) => state.data.exercises);
  const exercisesCards = useAppSelector(
    (state: RootState) => state.data.exerciseCards,
  );
  const dispatch = useAppDispatch();

  const handleExerciseClick = (id: number) => {
    exercisesCards.forEach((card: IExerciseCard, idx: number) => {
      if (card.id === id) {
        dispatch(setExerciseCounter(idx));
      }
    });
  };

  return (
    <>
      {exercises.data.questions.map((group: IQuestions) => (
        <div key={group.title} className="exerciseGroupWrapper">
          <Divider />
          <div className={styles.exerciseTitle}>{group.title}</div>
          <div className={styles.exerciseCards}>
            {group.exercises.map((item: IExercises) => (
              <ExerciseCard
                handleClick={(id) => handleExerciseClick(id)}
                key={item.id}
                id={item.id}
                isDone={
                  item.id ===
                  exercisesCards.find(
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
