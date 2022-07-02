import React from 'react'
import styles from './Video.module.scss';

type VideoProps = {
  videoRef: any
  video: string
}

const Video: React.FC<VideoProps> = ({ videoRef, video }) => {  
  
  return (
    <div className={styles.videoWrapper}>
      <video autoPlay ref={videoRef} loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.  
      </video> 
    </div> 
  )
}


export default Video;