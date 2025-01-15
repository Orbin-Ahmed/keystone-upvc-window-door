import React from "react";

interface CustomVideoPlayerProps {
  src: string;
  poster?: string;
  autoplay?: boolean;
  muted?: boolean;
  controls?: boolean;
  loop?: boolean;
}

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({
  src,
  poster,
  autoplay = true,
  muted = false,
  controls = true,
  loop = true,
}) => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <video
        className="h-auto w-4/5 rounded-lg shadow-lg"
        src={src}
        poster={poster}
        autoPlay={autoplay}
        muted={muted}
        controls={controls}
        loop={loop}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default CustomVideoPlayer;
