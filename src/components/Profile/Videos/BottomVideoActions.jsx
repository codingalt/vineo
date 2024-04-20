import React, { useState } from "react";
import css from "./PlayVideo.module.scss";
import views from "../../../assets/views.svg";
import star from "../../../assets/star.svg";
import HeartButton from "../../ui/HeartButton/HeartButton";

const BottomVideoActions = () => {
  return (
    <div className={css.bottomActionsWrap}>
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
          <div className={css.item}>
            <img src={star} alt="" />
            <span>4.5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomVideoActions;
