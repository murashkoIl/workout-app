import React from 'react'
import Timer from '../../../Timer/Timer';
import SwitchButton from '../../../Buttons/SwitchButton/SwitchButton';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './VideoControls.module.scss';

type VideoControlsProps = {
  title: string
  duration: number
  handleArrowClick: (event: React.MouseEvent<Element, MouseEvent>) => void
}

const VideoControls: React.FC<VideoControlsProps> = ({ title, duration, handleArrowClick }) => {
  return (
    <>
      <div className="title">{title}</div>

      <div className={styles.controlPanel}>
        <SwitchButton render={(e) => handleArrowClick(e)} type={faCircleArrowLeft}/>

        <Timer duration={duration} />

        <SwitchButton render={(e) => handleArrowClick(e)} type={faCircleArrowRight}/>
      </div>
    </>
  )
}


export default VideoControls;