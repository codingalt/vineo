import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "./PlayVideo.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import profile from "../../../assets/profile.png";
import BottomVideoActions from "./BottomVideoActions";
import RatingModal from "../Modals/RatingModal/RatingModal";
import PlyrVideoPlay from "./PlyrVideoPlay";
import v1 from "../../../assets/videos/v2.mp4"

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

const ViewSingleVideo = () => {
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
    <div className="viewSingleVidePost w-screen h-screen md:max-w-sm overflow-x-hidden scrollbar-hide flex justify-center items-center flex-col md:mx-auto">
      <div className={css.viewPostWrap}>
        <AnimatePresence mode="wait">
          <motion.div
            key="postVideo"
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{
              duration: 0.22,
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
              <PlyrVideoPlay
                // src={
                //   "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
                // }
                src={v1}
              />
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

export default ViewSingleVideo;
