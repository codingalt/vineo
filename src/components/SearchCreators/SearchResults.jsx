import React from "react";
import css from "./SearchCreators.module.scss";
import p1 from "../../assets/girl1.png";
import p2 from "../../assets/girl2.png";
import p3 from "../../assets/posts/p1.png";
import Rating from "@mui/material/Rating";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const SearchResults = () => {
    
  const data = [
    {
      id: 1,
      image: p1,
      name: "Christine Hay",
      username: "@Christine_Hay",
      stars: 4,
    },
    {
      id: 2,
      image: p2,
      name: "Patricia Woods",
      username: "@Patricia_Woods",
      stars: 3,
    },
    {
      id: 3,
      image: p3,
      name: "Talia Hodge",
      username: "@Talia_Hodge",
      stars: 3.5,
    },
  ];
  return (
    <div className={css.searchResults}>
      <div className={css.divider}></div>
      {data?.map((item,index) => (
        <div key={item.id}>
          <div className={css.item}>
            <div className={css.left}>
              <div className={css.img}>
                <img src={item.image} alt="" />
              </div>
              <div className={css.info}>
                <p>{item.name}</p>
                <span>{item.username}</span>
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
                value={item.stars}
                readOnly
              />
            </div>
          </div>
          {data?.length !== index + 1 && <div className={css.divider}></div>}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
