/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-useless-fragment */
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../../redux/hooks/hooks";
import { RootState } from "../../redux/store";
import CompletePage from "../CompletePage";
import GetReady from "./components/GetReady";
import VideoWrapper from "./components/VideoWrapper";

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
