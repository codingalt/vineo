import React, { useEffect, useRef } from "react";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

const VidStackPlayer = ({ src, dimensions }) => {
  const playerRef = useRef();

  return (
    <MediaPlayer
      title="Post"
      src={src}
      playsInline
      aspectRatio="auto"
      autoPlay
      hideControlsOnMouseLeave
      ref={playerRef}
      loop
      controlsDelay={0}
      load="eager"
    >
      <MediaProvider />
      <DefaultVideoLayout thumbnails="" icons={defaultLayoutIcons} />
    </MediaPlayer>
  );
};

export default VidStackPlayer;
