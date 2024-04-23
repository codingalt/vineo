import React from 'react'
import css from "./SearchCreators.module.scss";
import p1 from "../../assets/posts/p1.png"
import p2 from "../../assets/girl2.png"
import p3 from "../../assets/posts/p3.png";
import king from "../../assets/king.svg";

const TopCreators = () => {
  const data = [
    {
      id: 1,
      image: p1,
      name: "Jackson",
      points: 1847,
      username: "@Jackson",
      rank: 2
    },
    {
      id: 2,
      image: p2,
      name: "Eiden",
      points: 2430,
      username: "@Eiden",
      rank: 1
    },
    {
      id: 3,
      image: p3,
      name: "Emma Aria",
      points: 1674,
      username: "@Emma_Aria",
      rank: 3
    },
  ];
  return (
    <div className={css.topCreators}>
      <div className={css.card}>
        {data?.map((item, index) => (
          <div className={css.item}>
            <div className={css.profile} key={item.id}>
              {index === 1 && (
                <div className={css.kingImg}>
                  <img src={king} alt="" />
                </div>
              )}

              <img src={item.image} alt="" />
              <div className={css.rank}>{item.rank}</div>
            </div>
            <div className={css.content}>
              <p className={css.name}>{item.name}</p>
              <div className={css.points}>{item.points}</div>
              <div className={css.username}>{item.username}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopCreators