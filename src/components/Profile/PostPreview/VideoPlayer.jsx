import React, { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { GoUnmute } from "react-icons/go";

export const VideoPlayer = (props) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const { options, onReady } = props;
  const [aspectRatio, setAspectRatio] = useState(16 / 9);

   useEffect(() => {
     // Fetch the video dimensions and calculate aspect ratio
     const videoElement = document.createElement("video");
     videoElement.src = props.options.sources[0].src; // Assuming there's only one source
     videoElement.onloadedmetadata = () => {
       const width = videoElement.videoWidth;
       const height = videoElement.videoHeight;
       const newAspectRatio = width / height;
       setAspectRatio(newAspectRatio);
     };

     // Clean up
     return () => {
       videoElement.remove();
     };
   }, [props.options.sources]);

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
    //   const videoElement = document.createElement("video-js");

    //   videoElement.classList.add("vjs-big-play-centered");
    //   videoRef.current.appendChild(videoElement);

      //   -----------------
      // Create a div to wrap the video element and maintain aspect ratio
      const videoContainer = document.createElement("div");
      videoContainer.style.position = "relative";
      videoContainer.style.paddingTop = `${(1 / aspectRatio) * 100}%`; // Set the padding top based on the aspect ratio

      // Append the container to the videoRef
      videoRef.current.appendChild(videoContainer);

      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("video-js");
      videoElement.classList.add("vjs-big-play-centered");
      videoContainer.appendChild(videoElement);

      //   ---------------

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready");
        onReady && onReady(player);
      }));

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef, aspectRatio]);

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div
      data-vjs-player
      style={{
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // height: "100%",
        // width: "100%",
        // flexDirection: "column",
        // position: "absolute",
        // left: "0",
        // top: "0",
        height: 0, // Set height to 0 to maintain aspect ratio
        paddingBottom: `${(1 / aspectRatio) * 100}%`,
        width: "100%",
      }}
    >
      <div
        ref={videoRef}
        style={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   height: "100%",
          //   width: "100%",
          //   flexDirection: "column",
        //   position: "absolute",
        //   left: "0",
        //   top: "0",
          height: 0, // Set height to 0 to maintain aspect ratio
          paddingBottom: `${(1 / aspectRatio) * 100}%`,
          width: "100%",
        }}
      />
    </div>
  );
};

export default VideoPlayer;
