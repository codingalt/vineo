import React from 'react'
import css from "./Posts.module.scss";
import { CiImageOn } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { CiLock } from "react-icons/ci";

const SubscribeCard = () => {
  return (
    <div className={css.subscribeCardWrapper}>
      <header>
        <div className={css.left}>
          <div className={css.item}>
            <CiImageOn />
            <span>11</span>
          </div>
          <div className="w-[2px] h-[2px] rounded-full bg-[#A1A3A7]"></div>
          <div className={css.item}>
            <CiVideoOn />
            <span>8</span>
          </div>
        </div>

        <div className={css.right}>
          <CiLock />
        </div>
      </header>

      <button>Subscibe to see creator’s posts</button>
    </div>
  );
}

export default SubscribeCard