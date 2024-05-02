import React, { useRef, useState } from "react";
import Video from "./Video";
import "./Shorts.scss";
import v1 from "../../../../assets/videos/v1.mp4";
import v2 from "../../../../assets/videos/v2.mp4";
import v3 from "../../../../assets/videos/v3.mp4";

const VideoList = () => {
  const videos = [v1, v2, v3];
  const containerRef = useRef();
  const slideRef = useRef();

  const handleScroll = ()=>{
    const container = document.querySelector("#video-container");
    const items = document.querySelectorAll("#videoItems");

    const scrollPosition = container.scrollTop;

    items.forEach(item => {
      const itemTop = item.offsetTop;
      const itemBottom = itemTop + item.clientHeight;
      // console.log("scrollPosition", scrollPosition);
      // console.log("itemTop", itemTop);
      // console.log("itemBottom", itemBottom);
      if(scrollPosition >= itemTop && scrollPosition < (itemBottom)) {
        console.log("visible item", item.textContent);
      }
    })

  }
  return (
    <div
      ref={containerRef}
      id="video-container"
      className="scrollbar-hide"
      onScroll={handleScroll}
    >
      {videos.map((videoId, index) => (
        <Video key={index} value={index} videoId={videoId} />
      ))}
    </div>
  );
};

export default VideoList;
