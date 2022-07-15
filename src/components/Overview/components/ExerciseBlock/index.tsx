import { RootState } from "redux/store";
import { useAppDispatch, useAppSelector } from "redux/hooks/hooks";
import { IExerciseCard } from "interfaces/ExerciseCardInterface";
import { IExercises, IQuestions } from "interfaces/DataInterface";
import { setExerciseCounter } from "redux/slices/dataSlice";
import { Link } from "react-router-dom";
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
              <Link
                key={item.id}
                onClick={() => handleExerciseClick(item.id)}
                to="/exercises"
              >
                <ExerciseCard
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
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default ExerciseBlock;
