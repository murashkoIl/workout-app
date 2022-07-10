/* eslint-disable @typescript-eslint/no-unused-expressions */
import { RefObject } from "react";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "redux/store";
import { toggleActive } from "redux/slices/timerSlice";
import { useAppSelector, useAppDispatch } from "redux/hooks/hooks";
import { pauseHandler } from "redux/slices/pauseSlice";
import PlayStopButton from "components/Buttons/PlayStopButton";
import Divider from "components/Divider";

type PauseSectionProps = {
  videoRef: RefObject<HTMLVideoElement>;
};

function PauseSection({ videoRef }: PauseSectionProps) {
  const dispatch = useAppDispatch();
  const isPause = useAppSelector((state: RootState) => state.pause.isPause);

  const handlePlayPauseButtonCLick = (
    e: React.MouseEvent<Element, MouseEvent>,
  ): void => {
    e.preventDefault();
    dispatch(toggleActive());
    dispatch(pauseHandler());

    !isPause ? videoRef.current?.pause() : videoRef.current?.play();
  };

  return (
    <>
      <Divider />
      <div className="playStopWrapper">
        <PlayStopButton
          buttonClick={(e: React.MouseEvent<Element, MouseEvent>) =>
            handlePlayPauseButtonCLick(e)
          }
          type={isPause ? faPlay : faPause}
        />
      </div>
    </>
  );
}

export default PauseSection;
