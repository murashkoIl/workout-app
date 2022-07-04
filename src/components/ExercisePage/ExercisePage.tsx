/* eslint-disable react/jsx-no-useless-fragment */
import { useAppSelector } from "../../redux/hooks/hooks";
import { RootState } from "../../redux/store";
import GetReady from "./GetReady/GetReady";
import VideoWrapper from "./VideoWrapper/VideoWrapper";

function ExercisePage() {
  const isGetReady = useAppSelector(
    // eslint-disable-next-line prettier/prettier
    (state: RootState) => state.exercises.isGetReady,
  );
  const { exerciseCards, exerciseCounter } = useAppSelector(
    // eslint-disable-next-line prettier/prettier
    (state: RootState) => state.data,
  );

  return (
    <>
      {isGetReady ? (
        <GetReady card={exerciseCards[exerciseCounter]} />
      ) : (
        <VideoWrapper card={exerciseCards[exerciseCounter]} />
      )}
    </>
  );
}

export default ExercisePage;
