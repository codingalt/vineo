import React from "react";
import css from "./ViewPost.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import profile from "../../../assets/profile.png";
import p1 from "../../../assets/posts/postImg.svg";
import { useNavigate } from "react-router-dom";
import BottomPostActions from "./BottomPostActions";
import { Image } from "@nextui-org/react";
import ImageComponent from "../../ui/Image/ImagePostsComponent";

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

const ViewPost = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen max-w-sm overflow-x-hidden scrollbar-hide flex justify-center items-center flex-col mx-auto">
      <div className={css.viewPostWrap}>
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

        {/* Post Image  */}
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
            <div className={css.postImage}>
              <img src={p1} alt="" radius="none"/>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Post Actions  */}
        <BottomPostActions />
      </div>
    </div>
  );
};

export default ViewPost;
