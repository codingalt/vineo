import React, { useEffect, useState } from "react";
import css from "./PlayVideo.module.scss";
import views from "../../../assets/views.svg";
import star from "../../../assets/star.svg";
import HeartButton from "../../ui/HeartButton/HeartButton";
import { useLikeAPostMutation } from "../../../services/api/postApi/postApi";
import starFilled from "../../../assets/starFilled.svg";

const BottomVideoActions = ({ data, setIsRatingModal, postId }) => {
   const [likes, setLikes] = useState(data?.likes);
   const [likePost, res] = useLikeAPostMutation(postId);
   const { isSuccess, error } = res;
   const handleLikePost = async () => {
     await likePost(postId);
   };

   useEffect(()=>{
    if(data){
      setLikes(data.likes);
    }
   },[data]);

  return (
    <div className={css.bottomActionsWrap}>
      <div className={css.items}>
        <div className="flex-1 -mt-1.5">
          <div className={css.item}>
            <HeartButton
              isLiked={data?.isLiked}
              handleClick={handleLikePost}
              likes={likes}
              setLikes={setLikes}
              error={error}
            />
            <span className="-mt-2.5 animate-none transform-none">{likes}</span>
          </div>
        </div>

        <div className="flex-1">
          <div className={css.item}>
            <img src={views} alt="" />
            <span>{data?.views}</span>
          </div>
        </div>

        <div className="flex-1">
          <div className={css.item} onClick={() => setIsRatingModal(true)}>
            <img src={data?.isRated ? starFilled : star} alt="" />
            <span>{data?.rating && parseFloat(data.rating).toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomVideoActions;
