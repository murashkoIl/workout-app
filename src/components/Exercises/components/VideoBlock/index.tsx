import Video from "../Video";
import styles from "./VideoBlock.module.scss";

type VideoBlockProps = {
  video: string;
  videoRef: any;
};

function VideoBlock({ video, videoRef }: VideoBlockProps) {
  return (
    <div className={styles.videoWrapper}>
      <Video videoRef={videoRef} video={video} />
    </div>
  );
}

export default VideoBlock;
