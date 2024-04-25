import React from "react";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

const VidStackPlayer = ({ src }) => {
  return (
    <div>
      <MediaPlayer
        title="Post"
        src={src}
        playsInline
        aspectRatio="1:1"
        autoPlay
      >
        <MediaProvider />
        <DefaultVideoLayout thumbnails="" icons={defaultLayoutIcons} />
      </MediaPlayer>
    </div>
  );
};

export default VidStackPlayer;
