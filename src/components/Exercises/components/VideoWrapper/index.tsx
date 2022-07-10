/* eslint-disable import/extensions */
import React, { useRef } from "react";
import { useAppDispatch } from "redux/hooks/hooks";
import { setPauseUnActive } from "redux/slices/pauseSlice";
import {
  decrementExerciseCounter,
  incrementExerciseCounter,
  setExercisesDone,
} from "redux/slices/dataSlice";
import { setIsGetReady } from "redux/slices/pagesSlice";
import { IExerciseCard } from "interfaces/ExerciseCardInterface";
import VideoBlock from "../VideoBlock";
import styles from "./VideoWrapper.module.scss";
import GoBack from "../GoBack";
import VideoControls from "../VideoControls";
import PauseSection from "../PauseSection";

type VideoWrapperProps = {
  card: IExerciseCard;
};

function VideoWrapper({ card }: VideoWrapperProps) {
  const dispatch = useAppDispatch();
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleArrowClick = (e: React.MouseEvent<Element, MouseEvent>): void => {
    e.preventDefault();
    if ((e.target as Element).closest(".fa-circle-arrow-right")) {
      dispatch(incrementExerciseCounter());
      dispatch(setExercisesDone(card.id));
    } else {
      dispatch(decrementExerciseCounter());
    }
    dispatch(setIsGetReady());
    dispatch(setPauseUnActive());
  };

  const handleGoBackCLick = (): void => {
    dispatch(setIsGetReady());
    dispatch(setPauseUnActive());
  };

  return (
    <section className={styles.exercisePageSection}>
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
