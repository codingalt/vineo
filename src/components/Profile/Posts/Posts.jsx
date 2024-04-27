import React from "react";
import css from "./Posts.module.scss";
import { useNavigate } from "react-router-dom";
import ImageComponent from "../../ui/Image/ImagePostsComponent";
import PostSkeleton from "./PostSkeleton";

const Posts = ({ posts }) => {
  const navigate = useNavigate();

  return (
    <div className={css.posts}>
      {posts?.map(
        (item) =>
          item?.type === 0 && (
            <div
              className={css.post}
              onClick={() => navigate(`/posts/${item.id}`)}
              key={item.id}
            >
              <ImageComponent
                src={import.meta.env.VITE_POST_URI + item?.filename}
                alt="Post"
                radius="none"
                width={"100%"}
                height={120}
              />
            </div>
          )
      )}
    </div>
  );
};

export default Posts;
