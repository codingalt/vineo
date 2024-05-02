import React from 'react'
import v1 from "../../../../assets/videos/v1.mp4";
import v2 from "../../../../assets/videos/v2.mp4";
import v3 from "../../../../assets/videos/v3.mp4";

const Video = ({ videoId,value }) => {
  const videos = [v1];

  return (
    <>
      {videos?.map((videoId, index) => (
        <div className="video" id="videoItems">
          <div className="inner">
            <video
              width="100%"
              height="100%"
              controls
              autoPlay
              loop
              style={{ height: "100%" }}
            >
              <source src={videoId} type="video/mp4" />
            </video>
          </div>
        </div>
      ))}
    </>
  );
};

export default Video