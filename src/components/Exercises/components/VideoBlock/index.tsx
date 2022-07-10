import { RefObject } from "react";
import Video from "../Video";

type VideoBlockProps = {
  video: string;
  videoRef: RefObject<HTMLVideoElement>;
};

function VideoBlock({ video, videoRef }: VideoBlockProps) {
  return <Video videoRef={videoRef} video={video} />;
}

export default VideoBlock;
