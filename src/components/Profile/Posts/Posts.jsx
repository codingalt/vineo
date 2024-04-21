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
// import p1 from "../../../assets/posts/p1.svg";
// import p2 from "../../../assets/posts/p2.svg";
// import p3 from "../../../assets/posts/p3.svg";
// import p4 from "../../../assets/posts/p4.svg";
// import p5 from "../../../assets/posts/p5.svg";
// import p6 from "../../../assets/posts/p6.svg";
// import p7 from "../../../assets/posts/p7.svg";
// import p8 from "../../../assets/posts/p8.svg";
import { useNavigate } from 'react-router-dom'
import { Image } from '@nextui-org/react'
import ImageComponent from '../../ui/Image/ImagePostsComponent';
const data = [p1,p2,p3,p4,p5,p6,p7,p8];

const Posts = () => {
  const navigate = useNavigate();
  return (
    <div className={css.posts}>
      {
        data?.map((item,index)=>(
          <div className={css.post} onClick={()=> navigate(`/posts/${index}`)} key={item}>
            <ImageComponent src={item} alt="Post" radius='none' width={"100%"} height={120} />
          </div>
        ))
      }
     
    </div>
  );
}

export default Posts