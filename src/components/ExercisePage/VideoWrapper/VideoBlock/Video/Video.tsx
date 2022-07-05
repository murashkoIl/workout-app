/* eslint-disable jsx-a11y/media-has-caption */
import { useAppSelector } from "../../../../../redux/hooks/hooks";
import { RootState } from "../../../../../redux/store";
import Pause from "../Pause/Pause";
import styles from "./Video.module.scss";

type VideoProps = {
  videoRef: any;
  video: string;
};

function Video({ videoRef, video }: VideoProps) {
  const isPause = useAppSelector((state: RootState) => state.pause.isPause);

  return (
    <div className={isPause ? styles.videoWrapperPause : styles.videoWrapper}>
      <video autoPlay ref={videoRef} loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {isPause ? <Pause /> : ""}
    </div>
  );
}

export default Video;
