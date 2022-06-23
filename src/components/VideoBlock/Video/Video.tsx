import React from 'react'
import styles from './Video.module.scss';

type VideoProps = {
  video: string
}

const Video: React.FC<VideoProps> = ({ video }) => {
  return (
    <div className={styles.videoWrapper}>
      <video controls>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.  
      </video> 
    </div> 
  )
}


export default Video;