import Video from "./Video/Video";
import styles from "./VideoBlock.module.scss";
// import Pause from './Pause/Pause';

type VideoBlockProps = {
  video: string;
  videoRef: any;
};

function VideoBlock({ video, videoRef }: VideoBlockProps) {
  return (
    <div className={styles.videoWrapper}>
      <Video videoRef={videoRef} video={video} />
      {/* <Pause /> */}
    </div>
  );
}

export default VideoBlock;
