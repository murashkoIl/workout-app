import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faCircleArrowLeft, faCircleArrowRight  } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from './Exercisepage.module.scss';
import SwitchButton from '../Buttons/SwitchButton/SwitchButton';

const ExercisePage: React.FC = () => {
  return (
    <section className={styles.exercisePageSection}>
      <div className="container">
        <div className={styles.goback}>
          <Link to="/">
            {<FontAwesomeIcon icon={faArrowLeftLong} />} Go Back
          </Link>
        </div>
        <div className={styles.title}>Get Ready</div>
        <div className={styles.controlPanel}>
          <SwitchButton type={faCircleArrowLeft}/>
          <div className="timer"> 1 2 3 </div> {/*component*/}
          <SwitchButton type={faCircleArrowRight}/>
        </div>
        <div className={styles.videoWrapper}>
        <video controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.  
        </video>  
        </div>
      </div>
    </section>
  )
}

const video = 'https://player.vimeo.com/external/342977140.sd.mp4?s=2b60f9e7ae6e44772a0563101338683068724e24&profile_id=165'

export default ExercisePage;