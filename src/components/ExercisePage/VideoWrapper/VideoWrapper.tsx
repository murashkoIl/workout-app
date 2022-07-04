import React, { createRef } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import VideoBlock from "./VideoBlock/VideoBlock";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import { setPauseUnActive } from "../../../redux/slices/pauseSlice";
import { VideoWrapperProps } from "../../../types/types";
import {
  decrementExerciseCounter,
  incrementExerciseCounter,
  setExercisesDone,
} from "../../../redux/slices/dataSlice";
import { setIsGetReady } from "../../../redux/slices/exercisesSlice";
import styles from "./VideoWrapper.module.scss";
import GoBack from "./GoBack/GoBack";
import VideoControls from "./VideoControls/VideoControls";
import PauseSection from "./PauseSection/PauseSection";

import CompletePage from "../../CompletePage/CompletePage";

// faCheck

function VideoWrapper({ card }: VideoWrapperProps) {
  const dispatch = useAppDispatch();
  const videoRef = createRef<any>(); // fix any type and add this line to useEffect mb

  const handleArrowClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    if ((e.target as Element).closest(".fa-circle-arrow-right")) {
      dispatch(incrementExerciseCounter());
      dispatch(setExercisesDone(card.id));
    } else {
      dispatch(decrementExerciseCounter());
    }
    dispatch(setIsGetReady());
    dispatch(setPauseUnActive());
  };

  const handleGoBackCLick = () => {
    dispatch(setIsGetReady());
    dispatch(setPauseUnActive());
  };

  return (
    <section className={styles.exercisePageSection}>
      <CompletePage type={faCheck} minutes={25} />
      <div className="container">
        <GoBack handleGoBackCLick={handleGoBackCLick} />
        <VideoControls
          title={card.title}
          duration={card.duration}
          handleArrowClick={handleArrowClick}
        />
        <VideoBlock video={card.video} videoRef={videoRef} />
        <PauseSection videoRef={videoRef} />
      </div>
    </section>
  );
}

export default VideoWrapper;
