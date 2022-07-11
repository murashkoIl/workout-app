/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-useless-fragment */
import { RootState } from "redux/store";
import { useAppSelector } from "redux/hooks/hooks";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import CompletePage from "components/CompletePage";
import GetReady from "../GetReady";
import VideoWrapper from "../VideoWrapper";

function ExercisePage() {
  const isGetReady = useAppSelector(
    (state: RootState) => state.exercises.isGetReady,
  );
  const { exerciseCards, exerciseCounter, exercisesDuration } = useAppSelector(
    (state: RootState) => state.data,
  );

  return (
    <>
      {isGetReady && exerciseCounter === exerciseCards.length ? (
        <CompletePage type={faCheck} minutes={exercisesDuration} />
      ) : isGetReady ? (
        <GetReady card={exerciseCards[exerciseCounter]} />
      ) : (
        <VideoWrapper card={exerciseCards[exerciseCounter]} />
      )}
    </>
  );
}

export default ExercisePage;
