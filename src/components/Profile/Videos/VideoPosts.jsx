import React from 'react'
import { useNavigate } from "react-router-dom";
import css from "./VideoPosts.module.scss";
import p1 from "../../../assets/videos/v1.png";
import p2 from "../../../assets/videos/v2.png";
import p3 from "../../../assets/videos/v3.png";
import p4 from "../../../assets/posts/p4.png";
import p5 from "../../../assets/posts/p5.png";
import p6 from "../../../assets/posts/p6.png";
import p7 from "../../../assets/posts/p7.png";
import p8 from "../../../assets/posts/p8.png";
import ImageComponent from "../../ui/Image/ImagePostsComponent";
import { FaPlay } from "react-icons/fa";
const data = [p1, p2, p3, p4, p5, p6, p7, p8];

const VideoPosts = () => {
    const navigate = useNavigate();

  return (
    <div className={css.videoPosts}>
      {data?.map((item, index) => (
        <div
          className={css.post}
          onClick={() => navigate(`/videos/${index}`)}
          key={item}
        >
          <ImageComponent
            src={item}
            alt="Post"
            radius="none"
            width={"100%"}
            height={120}
          />

          <div className={css.duration}>
            <FaPlay fontSize={8} />
            <span>0:11</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoPosts