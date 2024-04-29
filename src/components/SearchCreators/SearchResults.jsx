import React from "react";
import css from "./SearchCreators.module.scss";
import p1 from "../../assets/girl1.png";
import p2 from "../../assets/girl2.png";
import p3 from "../../assets/posts/p1.png";
import Rating from "@mui/material/Rating";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { MagicMotion } from "react-magic-motion";
import ImageProfileComponent from "../ui/Image/ImageProfileComponent";
import { useNavigate } from "react-router-dom";

const SearchResults = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className={css.searchResults}>
      {data?.length > 0 && <div className={css.divider}></div>}
      {/* <MagicMotion>  */}
      {data?.map((item, index) => (
        <div
          key={item.user.id}
          onClick={() => navigate(`/creators/${item.user.username}`)}
        >
          <div className={css.item}>
            <div className={css.left}>
              <div className={css.img}>
                <ImageProfileComponent
                  src={
                    import.meta.env.VITE_PROFILE_PICTURE +
                    item?.user.profile_picture
                  }
                  alt=""
                  radius="full"
                  width={"100%"}
                  height={42}
                  className="rounded-full"
                />
              </div>
              <div className={css.info}>
                <p>{item.user.name}</p>
                <span>{item.user.username}</span>
              </div>
            </div>
            <div className={css.right}>
              <Rating
                name="read-only"
                size="small"
                emptyIcon={
                  <StarBorderIcon
                    style={{ color: "rgba(255,255,255,0.8)" }}
                    color="#BDC5CD"
                    fontSize="inherit"
                  />
                }
                value={item.rating}
                readOnly
              />
            </div>
          </div>
          {data?.length !== index + 1 && <div className={css.divider}></div>}
        </div>
      ))}
      {/* </MagicMotion>  */}
    </div>
  );
};

export default SearchResults;
