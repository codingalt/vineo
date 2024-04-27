import React, { useEffect, useMemo, useRef, useState } from "react";
import css from "./PostPreview.module.scss";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { getVideoCover } from "../../../utils/helpers/helpers";
import { ClipLoader } from "react-spinners";
import p1 from "../../../assets/posts/p1.png";
import { setPostFile } from "../../../services/slices/posts/postSlice";
import { useCreatePostMutation } from "../../../services/api/postApi/postApi";
import VideoPreview from "./VideoPreview";
import { Button } from "@nextui-org/react";
import TestVidStack from "./TestVidStack";
import ImageComponent from "../../ui/Image/ImagePostsComponent";
import VideoPlayer from "./VideoPlayer";

const PostPreview = () => {
  const navigate = useNavigate();
  const playerRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoThumbnail, setVideoThumbnail] = useState(null);
  const { file } = useSelector((store) => store.post);
  const dispatch = useDispatch();

  // Create Post Request
  const [createPost, res] = useCreatePostMutation();
  const { isLoading, error, isSuccess } = res;

  useMemo(() => {
    if (isSuccess) {
      navigate("/profile");
    }
  }, [isSuccess]);

  const handleVideo = async (video) => {
    const cover = await getVideoCover(video, 1);
    // console.log("cover", cover);
    const base64String = cover.split(",")[1];
    const binaryData = atob(base64String);
    setVideoThumbnail(binaryData);

    setTimeout(() => {
      setIsVideoLoaded(true);
    }, 1600);
  };

  useEffect(() => {
    if (!file) {
      dispatch(setPostFile(null));
      navigate("/profile");
      return;
    }

    if (file && file?.type === "image") {
      const reader = new FileReader();
      reader.readAsDataURL(file.file);
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
    }

    if (file && file.type === "video") {
      const reader = new FileReader();
      reader.readAsDataURL(file.file);
      reader.onloadend = () => {
        setVideoPreview(reader.result);
      };

      handleVideo(file?.file);
    }
  }, [file, navigate]);

  const handleBack = () => {
    dispatch(setPostFile(null));
    navigate(-1);
  };

  const handleSubmit = async () => {
    let formData = new FormData();
    formData.append("post_file", file?.file);

    if (file?.type === "video") {
      formData.append("thumbnail", videoThumbnail);
      formData.append("duration", file?.duration);
    }

    const { data } = await createPost(formData);
    console.log(data);
  };

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    loop: true,
    aspectratio: "16:9",
    sources: [
      {
        src: videoPreview,
        type: "video/mp4",
      },
    ],
  };
  // data:image/png;base64,

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
    <div className={`${css.wrapper} postPreview`}>
      <header>
        <IoIosArrowBack onClick={handleBack} />
        <p>Create Post</p>
      </header>

      {file && (
        <>
          <div className={css.profile}>
            <div className={css.left}>
              <img src={p1} alt="" />
            </div>
            <div className={css.right}>
              <p>Faheem Malik</p>
              <span>faheem_07</span>
            </div>
          </div>
          {file?.type === "image" ? (
            <motion.div
              key="previwImage"
              className={css.imageCard}
              initial={{ opacity: 0 }}
              animate={{ opacity: file ? 1 : 0 }}
              transition={{ duration: 0.6 }}
            >
              {imagePreview && <img src={imagePreview} alt="" />}
            </motion.div>
          ) : isVideoLoaded ? (
            <>
              <motion.div
                key="previwImage"
                className={css.videoCard}
                initial={{ opacity: 0 }}
                animate={{ opacity: file ? 1 : 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* <VideoPreview src={videoPreview} /> */}
                {/* <TestVidStack src={videoPreview} /> */}
                <VideoPlayer
                  options={videoJsOptions}
                  onReady={handlePlayerReady}
                />
              </motion.div>
            </>
          ) : (
            <div className="w-full -mt-5 flex justify-center items-center h-full">
              <ClipLoader color="#3632FF" size={45} speedMultiplier={0.8} />
            </div>
          )}
          {/* <motion.div
            key="previwImage"
            className={css.postCard}
            initial={{ opacity: 0 }}
            animate={{ opacity: file ? 1 : 0 }}
            transition={{ duration: 0.6 }}
          >
            {file?.type === "image" ? (
              imagePreview && <img src={imagePreview} alt="" />
            ) : isVideoLoaded ? (
              <>
                <VideoPlayer
                  options={videoJsOptions}
                  onReady={handlePlayerReady}
                />
              </>
            ) : (
              <div className="w-full -mt-5 flex justify-center items-center h-full">
                <ClipLoader color="#3632FF" size={45} speedMultiplier={0.8} />
              </div>
            )}
          </motion.div> */}

          <div className={css.postButton}>
            <Button
              // disabled={!isVideoLoaded}
              onClick={handleSubmit}
              className="bg-transparent"
              isLoading={isLoading}
            >
              Share
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default PostPreview;
