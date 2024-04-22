import React, { useState } from 'react'
import css from "./ViewPost.module.scss";
import heart from "../../../assets/heart.svg"
import heartFilled from "../../../assets/heartFilled.svg";
import views from "../../../assets/views.svg"
import star from "../../../assets/star.svg";
import HeartButton from '../../ui/HeartButton/HeartButton';

const BottomPostActions = ({ setIsRatingModal }) => {
  return (
    <div className={css.bottomActionsWrap}>
      <div className={css.line}></div>
      <div className={css.items}>
        <div className="flex-1 -mt-1.5">
          <div className={css.item}>
            <HeartButton />
            <span className="-mt-2.5 animate-none transform-none">16K</span>
          </div>
        </div>

        <div className="flex-1">
          <div className={css.item}>
            <img src={views} alt="" />
            <span>2.1M</span>
          </div>
        </div>

        <div className="flex-1">
          <div className={css.item} onClick={() => setIsRatingModal(true)}>
            <img src={star} alt="" />
            <span>4.5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomPostActions