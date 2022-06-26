import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faCircleArrowLeft, faCircleArrowRight, faPlay, faPause, faCheck  } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from './Exercisepage.module.scss';
import SwitchButton from '../Buttons/SwitchButton/SwitchButton';
import Timer from '../Timer/Timer';
import PlayStopButton from '../Buttons/PlayStopButton/PlayStopButton';
import Divider from '../Divider/Divider';
import CompletePage from '../CompletePage/CompletePage';
import VideoBlock from '../VideoBlock/VideoBlock';
import Video from '../VideoBlock/Video/Video';
import Pause from '../VideoBlock/Pause/Pause';

import { useSelector, useDispatch } from 'react-redux';
import { pauseHandler } from '../../redux/slices/pauseSlice';
import { RootState } from '../../redux/store';

const ExercisePage: React.FC = () => {
  const isPause = useSelector((state: RootState) => state.pause.isPause);
  const dispatch = useDispatch();

  const handlePlayPauseButtonCLick = (): void => {
    // останавливать и воспроизводить видео
    dispatch(pauseHandler())
  }
  
  return (
    <section className={styles.exercisePageSection}>
      {/* <CompletePage type={faCheck} minutes={25}/> */}
      <div className="container">
        <div className={styles.goback}>
          <Link to="/">
            {<FontAwesomeIcon icon={faArrowLeftLong} />} Go Back
          </Link>
        </div>

        <div className={styles.title}>Get Ready</div>

        <div className={styles.controlPanel}>
          <SwitchButton type={faCircleArrowLeft}/>

          <Timer time={10} />

          <SwitchButton type={faCircleArrowRight}/>
        </div>

        <div className={styles.videoWrapper}>
          <VideoBlock>
            <Video video={video}/>
            {/* <Pause /> */}
          </VideoBlock>
        </div>

        <div className={styles.imgWrapper}>
          <img src="https://meal-workouts-prod.s3.amazonaws.com/workouts/exercises/360x360/fed06899b5f2c3b8cde17293e9346d11.jpg" alt="exercise" />
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


const video = 'https://player.vimeo.com/external/342977140.sd.mp4?s=2b60f9e7ae6e44772a0563101338683068724e24&profile_id=165'

export default ExercisePage;
