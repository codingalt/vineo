import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "./PlayVideo.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import profile from "../../../assets/profile.png";
import p1 from "../../../assets/posts/postImg.png";
import v1 from "../../../assets/videos/v1.mp4";
import BottomVideoActions from "./BottomVideoActions";
import VideoPlayer from "./VideoPlayer";
import TestPlayer from "./TestPlayer";
import RatingModal from "../Modals/RatingModal/RatingModal";

const variants = {
  initial: {
    y: 10,
    opacity: 0,
    scale: 0.7,
  },
  enter: {
    y: 0,
    opacity: 1,
    scale: 1,
  },
  exit: {
    y: -10,
    opacity: 0,
    scale: 0,
  },
};

const PlayVideo = () => {
  const navigate = useNavigate();
  const [isRatingModal, setIsRatingModal] = useState(false);
  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4",
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
  };

  return (
    <div className="w-screen h-screen md:max-w-sm overflow-x-hidden scrollbar-hide flex justify-center items-center flex-col md:mx-auto">
      <div className={css.viewPostWrap}>
        <AnimatePresence mode="wait">
          <motion.div
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{
              duration: 0.25,
            }}
            style={{ height: "100%", width: "100%", position: "relative" }}
          >
            <div className={css.header}>
              <div className={css.left} onClick={() => navigate(-1)}>
                <IoIosArrowBack fontSize={28} />
              </div>
              <div className={css.right}>
                <div className={css.image}>
                  <img src={profile} alt="" />
                </div>
                <div className={css.name}>
                  <p>Ava Skyler</p>
                  <span>@Ava_Skyler</span>
                </div>
              </div>
            </div>

            {/* Video  */}
            <div className={css.postImage}>
              {/* <VideoPlayer
                options={videoJsOptions}
                onReady={handlePlayerReady}
              /> */}
              <TestPlayer
                src={
                  "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
                }
              />
              {/* <div className="container">
                <video
                  controls
                  crossorigin
                  playsinline
                  poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
                >
                  <source
                    src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
                    type="video/mp4"
                    size="576"
                  />
                  <source
                    src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
                    type="video/mp4"
                    size="720"
                  />
                  <source
                    src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
                    type="video/mp4"
                    size="1080"
                  />

                  <track
                    kind="captions"
                    label="English"
                    srclang="en"
                    src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"
                    default
                  />
                  <track
                    kind="captions"
                    label="Français"
                    srclang="fr"
                    src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt"
                  />
                  <a
                    href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
                    download
                  >
                    Download
                  </a>
                </video>
              </div> */}
            </div>

            {/* Bottom Video Actions  */}
            <BottomVideoActions setIsRatingModal={setIsRatingModal} />
          </motion.div>
        </AnimatePresence>

        {/* Rating Modal  */}
        <RatingModal
          isRatingModal={isRatingModal}
          setIsRatingModal={setIsRatingModal}
        />
      </div>
    </div>
  );
};

export default PlayVideo;
