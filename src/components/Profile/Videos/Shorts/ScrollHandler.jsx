import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollHandler = () => {
  const location = useLocation();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const videos = document.querySelectorAll(".video");
  //     let index = 0;
  //     for (const video of videos) {
  //       const rect = video.getBoundingClientRect();
  //       if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
  //         index = Array.from(videos).indexOf(video);
  //         break;
  //       }
  //     }
  //     const videoId = index + 1;
  //     const newUrl = `/shorts/?video=${videoId}`;
  //     window.history.replaceState(null, null, newUrl);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll(); // Initial check on page load

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [location]);

  return null;
};

export default ScrollHandler;
