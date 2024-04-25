import React, { useEffect, useMemo, useRef, useState } from "react";
import css from "./UploadFromGallery.module.scss";
import { BsPlusLg } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import useClickOutside from "../../../../hooks/useClickOutside";
import { useDispatch, useSelector } from "react-redux";
import { setPostFile } from "../../../../services/slices/posts/postSlice";
import { useNavigate } from "react-router-dom";

const UploadFromGallery = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const postRef = useRef(null);
  const dispatch = useDispatch();
  const { file } = useSelector((store) => store.post);

  const handlePostChange = (event) => {
    const files = event.target.files[0];
    if (files) {
      if (files.type.startsWith("image")) {
        dispatch(setPostFile({ type: "image", file: files }));
      } else if (files.type.startsWith("video")) {
        // Create a URL for the selected video file
        const videoURL = URL.createObjectURL(files);

        // Create a video element
        const video = document.createElement("video");
        video.preload = "metadata";
        video.onloadedmetadata = () => {
          // Get video duration
          const duration = Math.round(video.duration);

          // Dispatch action to store video file, duration, and thumbnail
          dispatch(
            setPostFile({
              type: "video",
              file: files,
              duration: duration,
            })
          );

          // Clean up
          URL.revokeObjectURL(videoURL);
        };

        video.src = videoURL;
      }
    } else {
      // Handle the case where no file is selected
    }
  };

  useEffect(() => {
    if (file && isOpen) {
      navigate("/postPreview");
    }
  }, [file, isOpen, navigate]);

  useClickOutside(modalRef, () => setIsOpen(false));

  return (
    <div className={css.uploadWrapper}>
      <button
        className={css.uploadGalleryBtn}
        onClick={() => {
          dispatch(setPostFile(null));
          setIsOpen(true);
        }}
      >
        <BsPlusLg />
      </button>

      {/* Select Modal  */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`${css.selectModal} md:max-w-sm md:mx-auto`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <motion.div
              className={css.selectCard}
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ duration: 0.3 }}
              ref={modalRef}
            >
              <button type="button" onClick={() => postRef?.current.click()}>
                Select from Gallery
              </button>
              <button onClick={() => setIsOpen(false)}>Cancel</button>

              <input
                ref={postRef}
                type="file"
                name="post"
                onChange={(e) => handlePostChange(e)}
                style={{ display: "none" }}
                accept="image/*, video/*"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UploadFromGallery;
