import React from 'react'
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

const plyrProps = {
  source: {
          type: "video",
          sources: [
            {
              src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4",
              type: "video/mp4",
            },
          ],
        },
  options: {
    controls: ['play', 'progress', 'current-time', 'mute', '', 'fullscreen'],
    autoplay: true,
    loop: { active: true },
    keyboard: { focused: true, global: true },
    hideControls: false,
    settings: ['quality', 'speed'],
    seekTime: 10,
    volume: 0.5,
    clickToPlay: true,
    tooltips: { controls: true, seek: true },
    captions: { active: true, language: 'auto', update: true },
    fullscreen: { enabled: true, fallback: true, iosNative: true },
    storage: { enabled: true, key: 'plyr_volume' },
    ratio: '16:9',
    // iconUrl: 'path/to/custom/icons.svg',
  },
};

const TestPlayer = () => {
  return (
    <div className='mt-10'>
      <Plyr {...plyrProps} />
    </div>
  );
}

export default TestPlayer