import React from 'react'
import css from "./Posts.module.scss"
import p1 from "../../../assets/posts/p1.png"
import p2 from "../../../assets/posts/p2.png"
import p3 from "../../../assets/posts/p3.png"
import p4 from "../../../assets/posts/p4.png"
import p5 from "../../../assets/posts/p5.png"
import p6 from "../../../assets/posts/p6.png"
import p7 from "../../../assets/posts/p7.png";
import p8 from "../../../assets/posts/p8.png";

const Posts = () => {
  return (
    <div className={css.posts}>
      <div className={css.post}>
        <img src={p1} alt="" />
      </div>
      <div className={css.post}>
        <img src={p2} alt="" />
      </div>
      <div className={css.post}>
        <img src={p3} alt="" />
      </div>
      <div className={css.post}>
        <img src={p4} alt="" />
      </div>
      <div className={css.post}>
        <img src={p5} alt="" />
      </div>
      <div className={css.post}>
        <img src={p6} alt="" />
      </div>
      <div className={css.post}>
        <img src={p7} alt="" />
      </div>
      <div className={css.post}>
        <img src={p8} alt="" />
      </div>
    </div>
  );
}

export default Posts