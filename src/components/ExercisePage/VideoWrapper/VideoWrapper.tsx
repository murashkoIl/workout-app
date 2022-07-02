import React, { createRef } from 'react'
import Timer from '../../Timer/Timer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SwitchButton from '../../Buttons/SwitchButton/SwitchButton';
import VideoBlock from '../../VideoBlock/VideoBlock';
import Video from '../../VideoBlock/Video/Video';
import Divider from '../../Divider/Divider';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks/hooks';
import { RootState } from '../../../redux/store';
import { pauseHandler, setPauseUnActive } from '../../../redux/slices/pauseSlice';
import PlayStopButton from '../../Buttons/PlayStopButton/PlayStopButton';
import { faArrowLeftLong, faCircleArrowLeft, faCircleArrowRight, faPlay, faPause, faCheck  } from '@fortawesome/free-solid-svg-icons';
import styles from './VideoWrapper.module.scss';
import { VideoWrapperProps } from '../../../types/types';
import { toggleActive } from '../../../redux/slices/timerSlice';
import { decrementExerciseCounter, incrementExerciseCounter } from '../../../redux/slices/dataSlice';
import { setIsGetReady } from '../../../redux/slices/exercisesSlice';

const VideoWrapper: React.FC<VideoWrapperProps> = ({ card }) => {
  const isPause = useAppSelector((state: RootState) => state.pause.isPause);
  const dispatch = useAppDispatch();
  
  const videoRef = createRef<any>(); // fix any type and add this line to useEffect mb 

  const handlePlayPauseButtonCLick = (): void => {
    dispatch(toggleActive());
    dispatch(pauseHandler());
    !isPause ? videoRef.current.pause() : videoRef.current.play();
  }

  const handleLeftArrawClick = () => {
    dispatch(decrementExerciseCounter());
    dispatch(setIsGetReady());
    dispatch(setPauseUnActive());
  }

  const handleRightArrawClick = () => {
    dispatch(incrementExerciseCounter());
    dispatch(setIsGetReady());
    dispatch(setPauseUnActive());
  }
    
  return (
    <section className={styles.exercisePageSection}>
      {/* <CompletePage type={faCheck} minutes={25}/> */}
      <div className="container">
        <div className={styles.goback}>
          <Link onClick={() => dispatch(setIsGetReady())} to="/">
            {<FontAwesomeIcon icon={faArrowLeftLong} />} Go Back
          </Link>
        </div>

        <div className="title">{card.title}</div>

        <div className={styles.controlPanel}>
          <SwitchButton render={handleLeftArrawClick} type={faCircleArrowLeft}/>

          <Timer duration={card.duration} />

          <SwitchButton render={handleRightArrawClick} type={faCircleArrowRight}/>
        </div>

        <div className={styles.videoWrapper}>
          <VideoBlock>
            <Video videoRef={videoRef} video={card.video}/>
            {/* <Pause /> */}
          </VideoBlock>
        </div>

        <div className={styles.playPauseSection}>
          <Divider />
          <div className="playStopWrapper">
            <PlayStopButton buttonClick={handlePlayPauseButtonCLick} type={isPause ? faPlay : faPause}/>
          </div>
        </div>
      </div>
    </section>
  )
}


export default VideoWrapper; 