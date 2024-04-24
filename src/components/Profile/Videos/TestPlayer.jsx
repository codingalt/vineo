import React, { useEffect, useRef } from 'react'
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

const TestPlayer = ({src}) => {
  const playerRef = useRef();

  useEffect(() => {
    screen.orientation.lock("landscape");
    // Listen for the full-screen change event
    document.addEventListener("fullscreenchange", () => {
      if (document.fullscreenElement) {
        // Entered full-screen mode, try to lock the screen orientation
        if (screen.orientation && screen.orientation.lock) {
          screen.orientation.lock("landscape").catch((error) => {
            console.error("Error locking screen orientation:", error);
          });
        }
      } else {
        // Exited full-screen mode, try to unlock the screen orientation
        if (screen.orientation && screen.orientation.unlock) {
          screen.orientation.unlock().catch((error) => {
            console.error("Error unlocking screen orientation:", error);
          });
        }
      }
    });

    const player = playerRef.current.plyr;
    console.log("ref",player);

    // playerRef?.current.plyr.fullscreen.enter();

    const enterFullscreenHandler = () => {
      screen.orientation.lock("landscape");
    };

    const exitFullscreenHandler = () => {
      screen.orientation.unlock();
    };

    // player.on("enterfullscreen", enterFullscreenHandler);
    // player.on("exitfullscreen", exitFullscreenHandler);

    // return () => {
    //   player.off("enterfullscreen", enterFullscreenHandler);
    //   player.off("exitfullscreen", exitFullscreenHandler);
    // };
  });

  // console.log("ref",playerRef);

  const plyrProps = {
    source: {
      type: "video",
      sources: [
        {
          src: src,
          type: "video/mp4",
        },
      ],
    },
    options: {
      controls: [
        "play",
        "progress",
        "current-time",
        "mute",
        "play-large",
        "fullscreen",
      ],
      autoplay: true,
      loop: { active: true },
      keyboard: { focused: true, global: true },
      hideControls: false,
      settings: ["quality", "speed"],
      seekTime: 10,
      volume: 0.5,
      clickToPlay: true,
      invertTime: false,
      tooltips: { controls: false, seek: false },
      captions: { active: true, language: "auto", update: true },
      fullscreen: { enabled: true, fallback: true, iosNative: true },
      storage: { enabled: true, key: "plyr_volume" },
      ratio: "1:1",
    },
  };

  return (
    <div>
      <Plyr ref={playerRef} {...plyrProps} />
    </div>
  );
}

export default TestPlayer