import React from 'react'
import Timer from '../../Timer/Timer';
import styles from './GetReady.module.scss';
import { VideoWrapperProps } from '../../../types/types';

const GetReady: React.FC<VideoWrapperProps> = ({ card }) => {
  return (
    <div>
      <div className="title">{card.title}</div>
      <Timer duration={5} />
      <div className={styles.imgWrapper}>
          <img src={card.photo} alt="exercise" />
        </div>
    </div>
  )
}


export default GetReady;