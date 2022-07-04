/* eslint-disable @typescript-eslint/no-unused-expressions */
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import Divider from "../../../Divider/Divider";
import PlayStopButton from "../../../Buttons/PlayStopButton/PlayStopButton";
import styles from "./PauseSection.module.scss";
import { useAppSelector, useAppDispatch } from "../../../../redux/hooks/hooks";
import { RootState } from "../../../../redux/store";
import { toggleActive } from "../../../../redux/slices/timerSlice";
import { pauseHandler } from "../../../../redux/slices/pauseSlice";

type PauseSectionProps = {
  videoRef: any;
};

function PauseSection({ videoRef }: PauseSectionProps) {
  const dispatch = useAppDispatch();
  const isPause = useAppSelector((state: RootState) => state.pause.isPause);

  const handlePlayPauseButtonCLick = (): void => {
    dispatch(toggleActive());
    dispatch(pauseHandler());
    !isPause ? videoRef.current.pause() : videoRef.current.play();
  };

  return (
    <div className={styles.playPauseSection}>
      <Divider />
      <div className="playStopWrapper">
        <PlayStopButton
          buttonClick={handlePlayPauseButtonCLick}
          type={isPause ? faPlay : faPause}
        />
      </div>
    </div>
  );
}

export default PauseSection;
