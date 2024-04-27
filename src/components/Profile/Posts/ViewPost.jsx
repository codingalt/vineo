import React, { useEffect, useState } from "react";
import css from "./ViewPost.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import profile from "../../../assets/profile.png";
import p1 from "../../../assets/posts/postImg.svg";
import { useNavigate, useParams } from "react-router-dom";
import BottomPostActions from "./BottomPostActions";
import ImagePostViewComponent from "../../ui/Image/ImagePostViewComponent";
import RatingModal from "../Modals/RatingModal/RatingModal";
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

const ViewPost = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const { data, isLoading } = useGetPostByIdQuery(postId,{refetchOnMountOrArgChange: true});
  const [isRatingModal, setIsRatingModal] = useState(false);

  // View A Post
  const [viewAPost, res] = useViewAPostMutation();

  const handleViewAPost = async () => {
    await viewAPost(postId);
  };

  useEffect(() => {
    if (data && data.isViewed === false) {
      handleViewAPost();
    }
  }, [data]);

  return (
    <div className="w-screen h-screen bg-[#110e0f] md:max-w-sm overflow-x-hidden scrollbar-hide flex justify-center items-center flex-col md:mx-auto">
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
            key="postImage"
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{
              duration: 0.22,
            }}
            style={{ height: "100%", width: "100%", position: "relative" }}
          >
            <div className={css.postImage}>
              {isLoading ? (
                <div className="h-full w-full -mt-6 flex items-center justify-center">
                  <ClipLoader color="#3632FF" size={43} speedMultiplier={0.9} />
                </div>
              ) : (
                <ImagePostViewComponent
                  src={import.meta.env.VITE_POST_URI + data?.post?.filename}
                  radius={0}
                  isLoading={isLoading}
                />
              )}
            </div>

            {/* Bottom Post Actions  */}
            {!isLoading && (
              <BottomPostActions
                data={data}
                postId={postId}
                setIsRatingModal={setIsRatingModal}
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

export default ViewPost;
