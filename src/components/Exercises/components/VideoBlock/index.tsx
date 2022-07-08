import Video from "../Video";

type VideoBlockProps = {
  video: string;
  videoRef: any;
};

function VideoBlock({ video, videoRef }: VideoBlockProps) {
  return <Video videoRef={videoRef} video={video} />;
}

export default VideoBlock;
