import React, { useEffect, useRef, useState } from 'react'
import css from "./PostPreview.module.scss";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { motion } from "framer-motion";
import { getVideoCover } from '../../../utils/helpers/helpers';
import { ClipLoader } from 'react-spinners';
import p1 from "../../../assets/posts/p1.png";
import { setPostFile } from '../../../services/slices/posts/postSlice';
import { useCreatePostMutation } from '../../../services/api/postApi/postApi';
import VideoPreview from './VideoPreview';

const PostPreview = () => {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoThumbnail, setVideoThumbnail] = useState(null);
  const { file } = useSelector((store) => store.post);
  const dispatch = useDispatch();

  // Create Post Request 
  const [createPost, res] = useCreatePostMutation();
  const {isLoading, error, isSuccess} = res;  

  const handleVideo = async(video)=>{
    const cover = await getVideoCover(video, 0.5);

    const base64String = cover.split(",")[1]; // Remove data URL prefix
    const binaryData = atob(base64String);
    setVideoThumbnail(binaryData);

    setTimeout(() => {
      setIsVideoLoaded(true);
    }, 1000);
  }

  useEffect(()=>{
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

  },[file,navigate]);

  const handleBack = ()=>{
    dispatch(setPostFile(null));
    navigate(-1);
  }

  const handleSubmit = async()=>{
    let formData = new FormData();
    formData.append("file", file?.file);

    if(file?.type === "video"){
      formData.append("thumbnail", videoThumbnail);
      formData.append("duration", file?.duration);
    }

    const {data} = await createPost(formData);
    console.log(data);
  }

  return (
    <div className={css.wrapper}>
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
          <motion.div
            className={css.postCard}
            initial={{ opacity: 0 }}
            animate={{ opacity: file ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {file?.type === "image" ? (
              <img src={imagePreview} alt="" />
            ) : isVideoLoaded ? (
              <>
                <VideoPreview src={videoPreview} />
              </>
            ) : (
              <div className="w-full flex -mt-9 justify-center items-center h-full">
                <ClipLoader color="#3632FF" size={45} speedMultiplier={0.8} />
              </div>
            )}
          </motion.div>

          <div className={css.postButton}>
            <button>Share</button>
          </div>
        </>
      )}
    </div>
  );
}

export default PostPreview