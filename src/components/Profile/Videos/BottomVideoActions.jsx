import React, { useEffect, useMemo, useState } from "react";
import css from "./PlayVideo.module.scss";
import views from "../../../assets/views.svg";
import star from "../../../assets/star.svg";
import HeartButton from "../../ui/HeartButton/HeartButton";
import {
  useLikeAPostMutation,
  useViewAPostMutation,
} from "../../../services/api/postApi/postApi";
import starFilled from "../../../assets/starFilled.svg";
import voteFilled from "../../../assets/voteFilled.svg";

const BottomVideoActions = ({ data, setIsRatingModal, postId }) => {
  const [likes, setLikes] = useState(data?.likes);
  const [isVoted, setIsVoted] = useState(data?.isViewed);
  const [voteCount, setVoteCount] = useState(data?.views);
  const [likePost, res] = useLikeAPostMutation(postId);
  const { isSuccess, error } = res;

  const handleLikePost = async () => {
    await likePost(postId);
  };

  //  Vote a post mutation
  const [viewAPost, resp] = useViewAPostMutation();
  const { error: isVotingError } = resp;

  useMemo(() => {
    if (isVotingError) {

      if(data?.isViewed){
        setVoteCount(voteCount + 1);
        setIsVoted(true);
      }else{
        setIsVoted(false);
        setVoteCount(voteCount - 1);
      }
    }
  }, [isVotingError]);

   const handleVoteAPost = async () => {
     // Remove vote if already post is voted
     if (isVoted) {
       setIsVoted(false);
       setVoteCount(voteCount - 1);
     } else {
       // Vote the post if not already voted
       setIsVoted(true);
       setVoteCount(voteCount + 1);
     }

     await viewAPost(postId);
   };

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
          <div className={css.item} onClick={handleVoteAPost}>
              <img style={{transform:"scale(1.04)"}} src={isVoted ? voteFilled : views} alt="" />
              <span>{voteCount}</span>
          </div>
        </div>

        <div className="flex-1">
          <div className={css.item} onClick={() => setIsRatingModal(true)}>
            <img src={data?.isRated ? starFilled : star} alt="" />
            <span>
              {data?.rating ? parseFloat(data.rating).toFixed(1) : "0.0"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomVideoActions;
