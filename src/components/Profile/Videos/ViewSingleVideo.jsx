import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import css from "./PlayVideo.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import profile from "../../../assets/profile.png";
import BottomVideoActions from "./BottomVideoActions";
import RatingModal from "../Modals/RatingModal/RatingModal";
import PlyrVideoPlay from "./PlyrVideoPlay";
import VidStackPlayer from "./VidStackPlayer";
import v1 from "../../../assets/videos/v1.mp4";
import VideoPlayer from "./VideoPlayer";
import { Spinner } from "@nextui-org/react";
import { useGetPostByIdQuery, useViewAPostMutation } from "../../../services/api/postApi/postApi";
import { ClipLoader } from "react-spinners";

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
  const [dimensions, setDimensions] = useState();
  const [isReady, setIsReady] = useState(false);
  const { postId } = useParams();
  const { data, isFetching: isLoading } = useGetPostByIdQuery(postId,{refetchOnMountOrArgChange: true});

  // View A Post 
  const [viewAPost, res] = useViewAPostMutation();

  const handleViewAPost = async()=>{
    await viewAPost(postId);
  }

  useEffect(()=>{
    if (data && data.isViewed === false) {
      handleViewAPost();
    }
  },[data]);

  // useEffect(()=>{
  //    var video = document.createElement("video");

  //    // Set the src attribute to your video URL
  //    video.src = v1;

  //    // Listen for the loadedmetadata event
  //    video.onloadedmetadata = function () {
  //      // Once the metadata is loaded, you can access the video's width and height
  //      var videoWidth = video.videoWidth;
  //      var videoHeight = video.videoHeight;

  //     //  setDimensions({width: videoWidth, height: videoHeight});
  //       var aspectRatio = videoWidth / videoHeight;
  //       setRatio(aspectRatio);

  //      console.log("Video width:", videoWidth);
  //      console.log("Video height:", videoHeight);
  //       console.log("Aspect ratio:", aspectRatio);
  //    };

  //    // Start loading the video metadata
  //    video.load();
  // },[]);

   const videoJsOptions = useMemo(() => {
     return {
       autoplay: true,
       controls: true,
       responsive: true,
       fluid: true,
       loop: true,
       sources: [
         {
           src: import.meta.env.VITE_POST_URI + data?.post?.filename,
           type: "video/mp4",
         },
       ],
     };
   }, [data]);

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
    <div className="viewSingleVidePost w-screen h-screen bg-[#110e0f] md:max-w-sm overflow-x-hidden scrollbar-hide flex justify-center items-center flex-col md:mx-auto">
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
            <div
              className={css.postImage}
              // style={
              //   dimensions?.height <= 720
              //     ? {
              //         display: "flex",
              //         flexDirection: "column",
              //         justifyContent: "center",
              //         alignItems: "center",
              //       }
              //     : {
              //         display: "flex",
              //         flexDirection: "column",
              //         justifyContent: "center",
              //         alignItems: "center",
              //       }
              // }
              // style={
              //   dimensions?.height <= 720
              //     ? {
              //         position: "absolute",
              //         top: "50%",
              //         left: "50%",
              //         transform: "translate(-50%, -50%)",
              //       }
              //     : {
              //         // position: "absolute",
              //         // top: "50%",
              //         // left: "50%",
              //         // transform: "translate(-50%, -50%)",
              //       }
              // }
            >
              {/* <VidStackPlayer src={v1} dimensions={dimensions} /> */}
              {/* <PlyrVideoPlay
                // src={
                //   "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
                // }
                src={v1}
              /> */}
              {isLoading ? (
                <div className="w-full h-full flex items-center justify-center">
                  <ClipLoader color="#3632FF" size={43} speedMultiplier={0.9} />
                </div>
              ) : (
                (
                  <VideoPlayer
                    options={videoJsOptions}
                    onReady={handlePlayerReady}
                    setIsReady={setIsReady}
                  />
                )
              )}
              {/* {ratio && (
                <VideoPlayer
                  options={videoJsOptions}
                  onReady={handlePlayerReady}
                  ratio={ratio}
                />
              )} */}
            </div>

            {/* Bottom Video Actions  */}
            {!isLoading && (
              <BottomVideoActions
                setIsRatingModal={setIsRatingModal}
                data={data}
                postId={postId}
              />
            )}
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