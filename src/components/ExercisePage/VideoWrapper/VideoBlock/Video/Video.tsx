/* eslint-disable jsx-a11y/media-has-caption */
import styles from "./Video.module.scss";

type VideoProps = {
  videoRef: any;
  video: string;
};

function Video({ videoRef, video }: VideoProps) {
  return (
    <div className={styles.videoWrapper}>
      <video autoPlay ref={videoRef} loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;
