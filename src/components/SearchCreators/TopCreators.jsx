import React from 'react'
import css from "./SearchCreators.module.scss";
import p1 from "../../assets/posts/p1.png"
import p2 from "../../assets/posts/p2.png"
import p3 from "../../assets/posts/p3.png";

const TopCreators = () => {
  return (
    <div className={css.topCreators}>
      <div className={css.card}>
        <div className={css.item}>
          <div className={css.profile}>
            <img src={p1} alt="" />
            <div className={css.rank}>2</div>
          </div>
          <div className={css.content}>
            <p className={css.name}>Jackson</p>
            <div className={css.points}>1847</div>
            <div className={css.username}>@Jackson</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopCreators